"use server";

import { Database } from "@/lib/supabase";
import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";
import { randomUUID } from "crypto";
import { redirect } from "next/navigation";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw Error("Supabase URL or KEY is missing!");
}

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export async function updateName(
  name: string,
  isComponent: boolean,
  id: string,
) {
  if (isComponent) {
    await supabase.from("part").update({ name: name }).eq("uuid", id);

    revalidatePath(`/part/${id}`);
  } else {
    await supabase.from("bike").update({ name: name }).eq("uuid", id);

    revalidatePath(`/bike/${id}`);
  }
}

export async function updateComponentType(title: string, id: string) {
  await supabase.from("part").update({ type: title }).eq("uuid", id);

  revalidatePath(`/part/${id}`);
}

export async function updateNote(
  note: string,
  isComponent: boolean,
  id: string,
) {
  if (isComponent) {
    await supabase.from("part").update({ notes: note }).eq("uuid", id);

    revalidatePath(`/part/${id}`);
  } else {
    await supabase.from("bike").update({ notes: note }).eq("uuid", id);

    revalidatePath(`/bike/${id}`);
  }
}

export async function insertComponent(bikeid: string) {
  const uuid = randomUUID();
  const { data, error } = await supabase
    .from("part")
    .insert([{ uuid: uuid, refbikeuuid: bikeid }])
    .select()
    .single();

  if (error || !data) {
    throw new Error(`Failed to create component: ${error?.message || "Unknown error"}`);
  }

  revalidatePath(`/part/${uuid}`);
  revalidatePath(`/bike/${bikeid}`); // Also revalidate the bike page since it shows the parts list
  redirect(`/part/${uuid}`);
}

export async function uploadImage(
  image: string,
  name: string,
  contentType: string,
  id: string,
  isComponent: boolean,
) {
  const file = Buffer.from(image.replace(/data:.*?;base64,/, ""), "base64url");
  await supabase.storage
    .from("bikepassImages")
    .upload(`public/${id}/${name}`, file, {
      contentType,
    });

  let imagePath = `https://olxlvbczlprszofhhvaa.supabase.co/storage/v1/object/public/bikepassImages/public/${id}/${name}`;

  const table = isComponent ? "part" : "bike";

  await supabase.from(table).update({ imagepath: imagePath }).eq("uuid", id);

  const redirectUrl = `/${table}/${id}`;

  redirect(redirectUrl);
}

export async function deleteComponent(id: string) {
  await supabase.from("part").delete().eq("uuid", id);
}

export async function insertBike() {
  const uuid = randomUUID();
  
  // Try insert without .single() first to avoid potential issues
  const { data, error } = await supabase
    .from("bike")
    .insert([{ uuid: uuid }])
    .select("uuid");

  if (error) {
    // Check if it's a duplicate key error on the primary key (id)
    // This could indicate a sequence issue or race condition
    if (
      error.code === "23505" ||
      error.message?.includes("duplicate key") ||
      error.message?.includes("unique constraint")
    ) {
      // If it's a primary key conflict, the sequence might be out of sync
      // Try one more time with a new UUID and a small delay
      await new Promise((resolve) => setTimeout(resolve, 100));
      const uuid2 = randomUUID();
      const { data: data2, error: error2 } = await supabase
        .from("bike")
        .insert([{ uuid: uuid2 }])
        .select("uuid");

      if (error2) {
        throw new Error(
          `Failed to create bike: Database sequence error. The bike table's primary key sequence is out of sync. ` +
          `Please run the SQL fix in fix-bike-sequence.sql in your Supabase SQL Editor. ` +
          `Error: ${error2.message}`,
        );
      }

      if (!data2 || data2.length === 0 || !data2[0]?.uuid) {
        throw new Error("Failed to create bike: No data returned");
      }

      revalidatePath(`/bike/${data2[0].uuid}`);
      redirect(`/bike/${data2[0].uuid}`);
      return;
    }

    // For other errors, throw immediately
    throw new Error(`Failed to create bike: ${error.message || "Unknown error"}`);
  }

  if (!data || data.length === 0 || !data[0]?.uuid) {
    throw new Error("Failed to create bike: No data returned");
  }

  revalidatePath(`/bike/${data[0].uuid}`);
  redirect(`/bike/${data[0].uuid}`);
}

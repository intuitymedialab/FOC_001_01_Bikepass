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
    await supabase.from("part").update({ partname: name }).eq("partuuid", id);

    revalidatePath(`/part/${id}`);
  } else {
    await supabase.from("bike").update({ bikename: name }).eq("bikeuuid", id);

    revalidatePath(`/bike/${id}`);
  }
}

export async function updateComponentType(title: string, id: string) {
  await supabase.from("part").update({ parttype: title }).eq("partuuid", id);

  revalidatePath(`/part/${id}`);
}

export async function updateNote(
  note: string,
  isComponent: boolean,
  id: string,
) {
  if (isComponent) {
    await supabase.from("part").update({ partnotes: note }).eq("partuuid", id);

    revalidatePath(`/part/${id}`);
  } else {
    await supabase.from("bike").update({ bikenotes: note }).eq("bikeuuid", id);

    revalidatePath(`/bike/${id}`);
  }
}

export async function insertComponent(bikeid: string) {
  const uuid = randomUUID();
  await supabase.from("part").insert([{ partuuid: uuid, refbikeuuid: bikeid }]);
  return uuid;
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
  const idName = isComponent ? "partuuid" : "bikeuuid";
  const colName = isComponent ? "partimagepath" : "bikeimagepath";

  await supabase
    .from(table)
    .update({ [colName]: imagePath })
    .eq(idName, id);

  const redirectUrl = `/${table}/${id}`;

  redirect(redirectUrl);
}

export async function deleteComponent(id: string) {
  await supabase.from("part").delete().eq("partuuid", id);
}

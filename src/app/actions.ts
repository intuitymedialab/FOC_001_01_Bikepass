"use server";

import { Database } from "@/lib/supabase";
import { createClient } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw Error("Supabase URL or KEY is missing!");
}

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export async function updateNote(formData: FormData) {
  const value = formData.get("custom_note") as string;
  const id = formData.get("partid") as string;

  await supabase.from("parts").update({ custom_notes: value }).eq("uuid", id);

  revalidatePath(`/part/${id}`);
}

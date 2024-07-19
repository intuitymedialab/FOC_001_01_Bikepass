import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import React from "react";
import { updateNote } from "@/app/actions";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw Error("Supabase URL or KEY is missing!");
}

export default async function Details({
  params,
}: {
  params: { partid: string };
}) {
  const supabase = createClient<Database>(supabaseUrl, supabaseKey);

  let { data: currentPart, error: errorPart } = await supabase
    .from("parts")
    .select(
      "uuid, stockpart_uuid, is_Stock, custom_notes, stockparts (brand, parttype, image_path, material, model, additional_info, notes)",
    )
    .eq("uuid", params.partid)
    .single();

  if (errorPart || !currentPart || !currentPart.stockparts) {
    return <h1>No Part with this ID</h1>;
  }

  return (
    <>
      <h1 className="text-4xl text-black font-bold mb-9">
        {currentPart.stockparts.parttype} | {currentPart.stockparts.brand}{" "}
        {currentPart.stockparts.model}
      </h1>

      {currentPart.stockparts.image_path && (
        <div
          style={{ verticalAlign: "middle" }}
          className="flex flex-col items-center justify-center mt-5 mb-15">
          <Image
            src={currentPart.stockparts.image_path}
            width={300}
            height={171}
            alt="PartImage"
          />
        </div>
      )}

      <p>Originalteil: {currentPart.is_Stock ? "Ja" : "Nein"}</p>
      <p>
        Zusatzinformationen:{" "}
        {JSON.stringify(currentPart.stockparts.additional_info)}
      </p>
      <p>Notizen: {currentPart.stockparts.notes}</p>
      <h2 className="font-bold mt-5">Eigene Notizen</h2>

      <form action={updateNote}>
        <Textarea
          name="custom_note"
          defaultValue={currentPart.custom_notes ?? ""}
        />

        <input type="hidden" value={params.partid} name="partid"></input>

        <Button className="space-x-4 mt-2" type="submit">
          <span>→{"   "}Save</span>
        </Button>
      </form>
    </>
  );
}

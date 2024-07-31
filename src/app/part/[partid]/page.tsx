import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/supabase";
import { Header } from "@/components/elements/Header";
import { Note } from "@/components/elements/Note";
import { ImageUpload } from "@/components/elements/ImageUpoad";
import { DeleteButton } from "@/components/elements/DeleteButton";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw Error("Supabase URL or KEY is missing!");
}

export const revalidate = 0;

export default async function Part({ params }: { params: { partid: string } }) {
  const supabase = createClient<Database>(supabaseUrl, supabaseKey);

  let { data: part, error } = await supabase
    .from("part")
    .select(
      "partuuid, partname, partnotes, partimagepath, refbikeuuid, parttype",
    )
    .eq("partuuid", params.partid)
    .single();

  if (error || !part || !part.partuuid) {
    return <h1>No part with this ID</h1>;
  }

  return (
    <>
      <div className="w-screen ">
        <Header
          title={part.partname}
          subtitle={part.parttype}
          backbuttonid={part.refbikeuuid ?? ""}
          id={part.partuuid}
          isComponent={true}
        />
        <div className="p-4">
          <ImageUpload
            imagepath={part.partimagepath || "/placeholder_part_upload.png"}
            alt="PartImage"
            id={part.partuuid}
            isComponent={true}
          />

          <h2 className="font-bold text-2xl mb-3">Notes & Properties</h2>
          <Note note={part.partnotes!} isComponent={true} id={part.partuuid} />

          <div>
            <DeleteButton
              bikeid={part.refbikeuuid ?? ""}
              partid={part.partuuid}
            />
          </div>

          <div className="mb-24"></div>
        </div>
      </div>
    </>
  );
}

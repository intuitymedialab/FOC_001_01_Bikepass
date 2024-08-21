import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/supabase";
import { Note } from "@/components/elements/Note";
import { ImageUpload } from "@/components/elements/ImageUpload";
import { DeleteButton } from "@/components/elements/DeleteButton";
import { ComponentName } from "@/components/elements/ComponentName";
import { ComponentType } from "@/components/elements/ComponentType";
import { Backbutton } from "@/components/elements/BackButton";
import { ImageBackground } from "@/components/elements/ImageBackground";

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
    .select("uuid, name, notes, imagepath, refbikeuuid, type")
    .eq("uuid", params.partid)
    .single();

  if (error || !part || !part.uuid) {
    return <h1>No part with this ID</h1>;
  }

  return (
    <>
      <div className="fixed">
        <Backbutton backbuttonid={part.refbikeuuid ?? ""} />
      </div>
      <div className="h-330px fixed -z-10 flex w-full">
        <ImageBackground
          imagepath={part.imagepath ?? ""}
          alt={"Component Image"}
          prompt="Upload Part Image"
        />
      </div>
      <div className="flex h-80">
        <ImageUpload id={part.uuid} isComponent={true} />
      </div>
      <div className="shadow-up z-20 w-screen border-separate rounded-t-lg border-t border-slate-400 bg-slate-100 pb-20">
        <div className="px-4 pt-6">
          <h2 className="mb-1 px-3 text-lg">Name</h2>
          <ComponentName id={part.uuid} title={part.name ?? ""} />
        </div>

        <div className="px-4">
          <h2 className="mb-1 px-3 text-lg">Type</h2>
          <ComponentType id={part.uuid} title={part.type ?? ""} />
        </div>
        <div className="px-4">
          <h2 className="mb-1 px-3 text-lg">Notes & Properties</h2>
          <Note note={part.notes!} isComponent={true} id={part.uuid} />

          <div>
            <DeleteButton bikeid={part.refbikeuuid ?? ""} partid={part.uuid} />
          </div>

          <div className=""></div>
        </div>
      </div>
    </>
  );
}

import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/supabase";
import { ImageUpload } from "@/components/elements/ImageUpload";
import { Listitem } from "@/components/elements/Listitem";
import { Note } from "@/components/elements/Note";
import { AddButton } from "@/components/elements/AddButton";
import { Footer } from "@/components/elements/Footer";
import { ImageBackground } from "@/components/elements/ImageBackground";

import { BikeName } from "@/components/elements/BikeName";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw Error("Supabase URL or KEY is missing!");
}

export const revalidate = 0;

export default async function Bike({ params }: { params: { bikeid: string } }) {
  const supabase = createClient<Database>(supabaseUrl, supabaseKey);

  let { data: bike, error: error } = await supabase
    .from("bike")
    .select("uuid, name, notes, imagepath, part(name, type, uuid, notes)")
    .eq("uuid", params.bikeid)
    .single();

  if (error || !bike || !bike.uuid) {
    return <h1>No bike with this ID</h1>;
  }

  return (
    <>
      <div className="h-330px fixed -z-10 flex w-full">
        <ImageBackground
          imagepath={bike.imagepath ?? ""}
          alt={"Component Image"}
          prompt="Upload Bike Image"
        />
      </div>
      <div className="flex h-80">
        <ImageUpload id={bike.uuid} isComponent={false} />
      </div>

      <div className="z-20 w-screen border-separate rounded-t-lg border-t border-slate-400 bg-slate-100 pb-28 shadow-lg">
        <div className="px-4 pt-6">
          <h2 className="mb-1 px-3 text-lg">Name</h2>
          <BikeName id={bike.uuid} title={bike.name ?? ""} />
        </div>

        <div className="px-4">
          <h2 className="mb-1 px-3 text-lg">Notes & Properties</h2>

          <Note note={bike.notes!} isComponent={false} id={bike.uuid} />
        </div>

        <div className="px-4">
          <h2 className="mb-1 px-3 text-lg">Components</h2>
          <div className="mb-8 rounded-lg bg-white">
            {bike.part.map((part, idx) => (
              <Listitem
                key={part.uuid}
                title={part?.name || "generic name"}
                type={part?.type || "generic type"}
                isLastItem={!(idx === bike.part.length - 1)}
                id={part.uuid ?? "No Part ID"}
              />
            ))}

            <AddButton
              bikeid={bike.uuid}
              isFirstItem={bike.part.length === 0}
            />
          </div>

          <Footer />

          <div className=""></div>
        </div>
      </div>
    </>
  );
}

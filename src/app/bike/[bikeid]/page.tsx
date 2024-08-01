import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/supabase";
import { ImageUpload } from "@/components/elements/ImageUpoad";
import { Header } from "@/components/elements/Header";
import { Listitem } from "@/components/elements/Listitem";
import { Note } from "@/components/elements/Note";
import { AddButton } from "@/components/elements/AddButton";
import { Footer } from "@/components/elements/Footer";
import { DeleteButton } from "@/components/elements/DeleteButton";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw Error("Supabase URL or KEY is missing!");
}

export const revalidate = 0;

export default async function Bike({ params }: { params: { bikeid: string } }) {
  const supabase = createClient<Database>(supabaseUrl, supabaseKey);

  let { data: currentBike, error: errorBike } = await supabase
    .from("bike")
    .select(
      "bikeuuid, bikename, bikenotes, bikeimagepath, part(partname, parttype, partuuid, partnotes)",
    )
    .eq("bikeuuid", params.bikeid)
    .single();

  if (errorBike || !currentBike || !currentBike.bikeuuid) {
    return <h1>No bike with this ID</h1>;
  }

  return (
    <>
      <div className="w-screen">
        <Header
          title={currentBike.bikename}
          id={currentBike.bikeuuid}
          isComponent={false}
        />
        <div className="p-4">
          <ImageUpload
            imagepath={
              currentBike.bikeimagepath || "/placeholder_bike_upload.jpg"
            }
            alt="Image"
            id={currentBike.bikeuuid}
            isComponent={false}
          />
          <h2 className="font-bold text-2xl mb-3">Notes & Properties</h2>
          <Note
            note={currentBike.bikenotes!}
            isComponent={false}
            id={currentBike.bikeuuid}
          />

          <h2 className="font-bold text-2xl mb-2">Components</h2>
          <div className="bg-white  rounded-lg mb-8">
            {currentBike.part.map((part, idx) => (
              <Listitem
                key={part.partuuid}
                title={part?.partname || "generic name"}
                type={part?.parttype || "generic type"}
                isLastItem={!(idx === currentBike.part.length - 1)}
                id={part.partuuid ?? "No Part ID"}
              />
            ))}

            <AddButton
              bikeid={currentBike.bikeuuid}
              isFirstItem={currentBike.part.length === 0}
            />
          </div>

          <DeleteButton bikeid={currentBike.bikeuuid} />
          <Footer />

          <div className="mb-24"></div>
        </div>
      </div>
    </>
  );
}

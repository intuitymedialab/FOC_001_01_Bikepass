import Image from "next/image";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/supabase";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!;

if (!supabaseUrl || !supabaseKey) {
  throw Error("Supabase URL or KEY is missing!");
}

export default async function Bike({ params }: { params: { bikeid: string } }) {
  const supabase = createClient<Database>(supabaseUrl, supabaseKey);

  let { data: currentBike, error: errorBike } = await supabase
    .from("bikes")
    .select(
      "id, image_path, bike_id, price_in_eur, frame_number, frame_color ,notes, size, construction_year, stockbikes (brand, model, manual_URL), parts(uuid, stockpart_uuid, is_Stock, custom_notes, stockparts (brand, parttype, material, model))",
    )
    .eq("bike_id", params.bikeid)
    .single();

  if (errorBike || !currentBike || !currentBike.stockbikes) {
    return <h1>No bike with this ID</h1>;
  }

  return (
    <>
      <div>
        <h1 className="text-5xl text-black font-bold mb-9">
          {currentBike.stockbikes.brand} {currentBike.stockbikes.model}
        </h1>
      </div>

      <div
        style={{ verticalAlign: "middle" }}
        className="flex flex-col items-center justify-center mt-5 mb-15">
        <Image
          src={currentBike.image_path ?? ""}
          width={300}
          height={171}
          alt="BikeImage"
        />
      </div>

      <div className="mt-11 mb-24">
        <h2 className="font-bold">Bike</h2>
        <div className="mt-2 mb-11 p-4 pl-4 border border-black">
          <p className="">Hersteller: {currentBike.stockbikes.brand}</p>
          <p className="">Modell: {currentBike.stockbikes.model}</p>
          <p className="">Rahmennummer: {currentBike.frame_number}</p>
          <p className="">Rahmengröße: {currentBike.size}</p>
          <p className="">Farbe: {currentBike.frame_color}</p>
          <p className="">Baujahr: {currentBike.construction_year}</p>
          <p className="">Preis: {currentBike.price_in_eur}€</p>
          {currentBike.stockbikes.manual_URL && (
            <a
              className="text-blue-800"
              href={currentBike.stockbikes.manual_URL}>
              Anleitung
            </a>
          )}
        </div>

        <h2 className="font-bold">Bike Komponenten</h2>

        {currentBike.parts
          .filter(part => part.stockparts)
          .map(part => (
            <div
              key={part.uuid}
              className="flex flex-row items-center justify-between text-white mt-2 mb-6 p-4 pl-4 border border-black">
              <div className="text-black p-1">
                <Link href={`/part/${part.uuid}`}>
                  {`${part?.stockparts?.parttype} | ${part?.stockparts?.brand} ${part?.stockparts?.model} `}{" "}
                </Link>
              </div>
              <div className="text-black">→</div>
            </div>
          ))}
      </div>
    </>
  );
}

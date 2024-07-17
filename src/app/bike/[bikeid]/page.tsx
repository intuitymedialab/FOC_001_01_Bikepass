import { bikes } from "@/lib/data";
import Image from "next/image";
import Link from 'next/link';


export default function Bike({ params }: { params: { bikeid: string } }) {
  const currentBike = bikes.find(b => b.bike.id === params.bikeid)

  if (!currentBike) {
    return <p>Hier ist nix</p>
  }


  return (
    <>
      <div key={currentBike.bike.manufacturer}>
        <h1
          style={{
            fontSize: 50,
            color: "black",
            textAlign: "left"

          }} className="font-bold">
          {currentBike.bike.manufacturer} {currentBike.bike.bikeModel}
        </h1>
      </div>

      <div style={{ verticalAlign: "middle" }} className="flex flex-col items-center justify-center mt-5 mb-15">
        <Image src={currentBike.bike.imagePath} width={300} height={171} alt="BikeImage" />
      </div>

      <div
        style={{
          backgroundColor: "white",
          marginTop: "20px",
          marginBottom: "80px"
        }}

      /* className="flex flex-col items-center justify-center p-24 relative h-full bg-center bg-cover bg-no-repeat bg-opacity-50" */
      >
        <h2 className="font-bold">Bike Komponenten</h2>

        {currentBike.parts.map(part => (
          <div
            style={{
              marginTop: "8px",
              padding: "12px",
              paddingLeft: "10px",
              border: "1px solid black",
            }}
            key={part.modelName}
            className="flex flex-row items-center justify-between text-white">


            <div
              style={{
                padding: "1px",

              }} className="text-black">
              <Link href={`/bike/${2}/part/${part.modelName}`}>{part.manufacturer} {part.modelName}</Link >
            </div>

            <div
              style={{
                color: "black",
                padding: "1px",

              }} >→</div>

          </div>
        ))}

      </div>
    </>
  );
}

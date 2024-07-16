import { bikeData, componentType } from "@/lib/data";
import { AlignCenter, AlignJustify } from "lucide-react";
import Image from "next/image";
import icon from "@/assets/Bike Shop Icons [Converted]-02.svg";
import hero from "@/assets/Jam-Small.png";
import Link from 'next/link';



export default function Home() {
  return (
    <>
      <div key={bikeData.bike.manufacturer}>
        <h1
          style={{
            fontSize: 50,
            color: "black",
            textAlign: "left"

          }} className="font-bold">
          {bikeData.bike.manufacturer} {bikeData.bike.bikeModel}
        </h1>
      </div>

      <div style={{ verticalAlign: "middle" }} className="flex flex-col items-center justify-center mt-5 mb-15">
        <Image src={hero} width="300" height="171" alt="BikeImage" />
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

        {bikeData.parts.map(part => (
          <div
            style={{
              marginTop: "8px",
              padding: "12px",
              paddingLeft: "10px",
              border: "1px solid black",
            }} key={part.modelName} className="flex flex-row items-center justify-between text-white">


            <div
              style={{
                padding: "1px",

              }} className="text-black">
              <Link href="src/app/details.tsx">{part.manufacturer} {part.modelName}</Link >
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

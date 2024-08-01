"use client";

import logo from "@/assets/intuity_logo_weiss.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { insertBike } from "./actions";

export default function Home() {
  async function handlePress() {
    const bikeid = await insertBike();
    window.location.href = `/bike/${bikeid}`;
  }

  return (
    <>
      <div className="bg-black">
        <div
          className="w-full h-screen bg-cover bg-center backdrop-opacity-20"
          style={{
            backgroundImage: "url('/splash-hero.jpg')",
          }}>
          <div className="">
            <div className="flex flex-col  gap-6 items-center justify-center pt-36 ">
              <Image src={logo} className="h-20 w-auto " alt="logo" />

              <div className="">
                <h2 className="text-white text-3xl font-bold">bikepass</h2>
              </div>
              <div className="text-white px-11">
                <p>
                  Bikepass allows you to keep track of your bike's components,
                  make notes about maintenance maintenance or hard to remember
                  compatibility data.
                </p>
              </div>
              <div className="">
                <Button onClick={handlePress} variant={"outlineinv"}>
                  Get Started!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

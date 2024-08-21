/* eslint-disable react/no-unescaped-entities */
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
          className="h-screen w-full bg-cover bg-center backdrop-opacity-20"
          style={{
            backgroundImage: "url('/splash-hero.jpg')",
          }}
        >
          <div className="">
            <div className="flex flex-col items-center justify-center gap-6 pt-36">
              <Image src={logo} className="h-20 w-auto" alt="logo" />

              <div className="">
                <h2 className="text-3xl font-bold text-white">bikepass</h2>
              </div>
              <div className="px-11 text-white">
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

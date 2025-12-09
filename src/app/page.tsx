/* eslint-disable react/no-unescaped-entities */
"use client";

import logo from "@/assets/intuity_logo_weiss.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { insertBike } from "./actions";
import { useState } from "react";

export default function Home() {
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handlePress() {
    // Prevent multiple rapid clicks
    if (isCreating) return;
    
    setIsCreating(true);
    setError(null);
    try {
      await insertBike();
      // redirect happens in the server action
    } catch (error) {
      console.error("Failed to create bike:", error);
      setIsCreating(false);
      const errorMessage = error instanceof Error ? error.message : "Failed to create bike. Please try again.";
      setError(errorMessage);
    }
  }

  return (
    <>
      <div 
        className="fixed inset-0 h-screen w-screen"
        style={{
          backgroundImage: "url('/splash-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 flex h-full w-full items-center justify-center">
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
            <div className="flex flex-col items-center gap-2">
              <Button 
                onClick={handlePress} 
                variant={"outlineinv"}
                disabled={isCreating}
              >
                {isCreating ? "Creating..." : "Get Started!"}
              </Button>
              {error && (
                <p className="text-sm text-red-300 max-w-md text-center px-4">
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import { Input } from "../ui/input";
// import { Button } from "../ui/button";
import { useRef } from "react";
import { uploadImage } from "@/app/actions";

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
  });

export function ImageUpload(props: {
  imagepath: string;
  alt: string;
  id: string;
  isComponent: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files) return;

    const file = files[0];
    const base64File = await toBase64(file);
    uploadImage(base64File, file.name, file.type, props.id, props.isComponent);
  }

  function handleButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (!inputRef || !inputRef.current) return;

    inputRef.current.click();
  }

  return (
    <>
      <form>
        <Input
          ref={inputRef}
          type="file"
          className="invisible"
          onChange={handleFileUpload}
        />
        <div className="flex flex-col items-center justify-center mb-6 mt-20">
          <button onClick={handleButtonClick}>
            <Image
              className="rounded-lg"
              src={props.imagepath}
              width={1000}
              height={500}
              alt={props.alt}
            />
          </button>
        </div>
      </form>
    </>
  );
}

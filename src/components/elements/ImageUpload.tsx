"use client";

import Image from "next/image";
import { UploadIcon } from "lucide-react";
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

  if (props.imagepath) {
    return (
      <>
        <form className="flex flex-col">
          <input
            ref={inputRef}
            type="file"
            className="invisible h-0"
            onChange={handleFileUpload}
          />
          <div className="mb-6 flex flex-col items-center justify-center">
            <button
              className="flex w-full flex-1 items-center justify-center"
              onClick={handleButtonClick}
            >
              <Image
                src={props.imagepath}
                width={1000}
                height={320}
                alt={props.alt}
                className="object-cover object-[-20%]"
              />
            </button>
          </div>
        </form>
      </>
    );
  } else {
    return (
      <>
        <form className="flex flex-col">
          <input
            ref={inputRef}
            type="file"
            className="invisible h-0"
            onChange={handleFileUpload}
          />
          <div className="mb-6 flex flex-col items-center justify-center">
            <button
              className="flex w-full flex-1 items-center justify-center bg-gradient-to-t from-slate-600 to-slate-400"
              onClick={handleButtonClick}
            >
              <div className="flex h-96 flex-col items-center justify-center">
                <UploadIcon />
                <p className="mt-1 font-bold"> Upload Image</p>
              </div>
            </button>
          </div>
        </form>
      </>
    );
  }
}

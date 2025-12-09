"use client";

import { useRef } from "react";
import { uploadImage } from "@/app/actions";

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
  });

export function ImageUpload(props: { id: string; isComponent: boolean }) {
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
      <form className="m-0 flex h-full w-full">
        <input
          ref={inputRef}
          type="file"
          className="invisible m-0 h-0 w-0"
          onChange={handleFileUpload}
        />
        <div className="flex h-full w-full">
          <button
            className="flex h-full w-full items-center justify-center"
            onClick={handleButtonClick}
          ></button>
        </div>
      </form>
    </>
  );
}

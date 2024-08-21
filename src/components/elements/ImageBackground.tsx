"use client";

import { UploadIcon } from "lucide-react";

export function ImageBackground(props: {
  imagepath: string;
  alt: string;
  prompt: string;
}) {
  if (props.imagepath) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={props.imagepath}
        alt={props.alt}
        className="flex flex-1 object-cover"
      />
    );
  } else {
    return (
      <>
        <div className="h-330px flex flex-col items-center justify-center bg-slate-400">
          <UploadIcon />
          <p className="mt-1 font-bold">{props.prompt}</p>
        </div>
      </>
    );
  }
}

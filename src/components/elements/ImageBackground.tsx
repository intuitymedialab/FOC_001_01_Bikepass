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
        className="h-full w-full object-cover"
        style={{ objectPosition: 'center' }}
      />
    );
  } else {
    return (
      <>
        <div className="flex h-full w-full flex-col items-center justify-center bg-slate-400">
          <UploadIcon />
          <p className="mt-1 font-bold">{props.prompt}</p>
        </div>
      </>
    );
  }
}

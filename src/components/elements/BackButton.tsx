import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function Backbutton(props: { backbuttonid: string }) {
  return (
    <>
      <Link
        href={`/bike/${props.backbuttonid}`}
        className="z-50 ml-12 mt-12 flex h-16 w-16 flex-col rounded-full border border-slate-950/20 bg-slate-200/60 text-3xl shadow-md backdrop-blur-lg"
      >
        <div className="flex flex-1 items-center">
          <div className="flex flex-1 items-center justify-center text-center font-bold text-slate-950">
            {" "}
            <ChevronLeft size={32} />
          </div>
        </div>
      </Link>
    </>
  );
}

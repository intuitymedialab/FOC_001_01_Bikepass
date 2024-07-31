"use client";

import { insertComponent } from "@/app/actions";

export function AddButton(props: { bikeid: string; isFirstItem: boolean }) {
  async function newComponent() {
    const uuid = await insertComponent(props.bikeid);
    window.location.href = `/part/${uuid}`;
  }

  const buttonStyle = props.isFirstItem
    ? "w-full items-center text-left justify-between bg-white text-black p-5 pl-3 border-slate-500 font-bold text-lg rounded-lg"
    : "w-full items-center text-left justify-between bg-white text-black p-5 pl-3 border-slate-500 font-bold text-lg rounded-b-lg";

  return (
    <button className={buttonStyle} onClick={newComponent}>
      <div>
        <p>+ Add Part</p>
      </div>
    </button>
  );
}

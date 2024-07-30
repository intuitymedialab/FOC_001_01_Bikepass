"use client";

import { insertComponent } from "@/app/actions";

export function AddButton(props: { bikeid: string }) {
  async function newComponent() {
    const uuid = await insertComponent(props.bikeid);
    window.location.href = `/part/${uuid}`;
  }

  return (
    <button
      className="w-full items-center text-left justify-between bg-neutral-200 text-neutral-600 p-5 pl-3 border-slate-500 font-bold text-lg rounded-b-lg"
      onClick={newComponent}>
      <div>
        <p>+ Add Part</p>
      </div>
    </button>
  );
}

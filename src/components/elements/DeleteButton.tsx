"use client";

import { deleteComponent } from "@/app/actions";
import { Button } from "../ui/button";

export function DeleteButton(props: { bikeid: string; partid: string }) {
  async function handleClick() {
    await deleteComponent(props.partid);
    window.location.href = `/bike/${props.bikeid}`;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <Button variant="deleteoutline" onClick={handleClick}>
        Delete Component
      </Button>
    </div>
  );
}

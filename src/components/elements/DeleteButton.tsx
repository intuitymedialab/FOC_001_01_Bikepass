"use client";

import { deleteBike, deleteComponent } from "@/app/actions";
import { Button } from "../ui/button";

export function DeleteButton(props: { bikeid: string; partid?: string }) {
  async function handleBikeDeltetion() {
    await deleteBike(props.bikeid);
    window.location.href = `/`;
  }

  async function handleComponentDeltetion() {
    await deleteComponent(props.partid!);
    window.location.href = `/bike/${props.bikeid}`;
  }

  if (!props.partid) {
    return (
      <div className="flex flex-col items-center justify-center mb-6">
        <Button variant="deleteoutline" onClick={handleBikeDeltetion}>
          Delete Bike
        </Button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center mb-6">
        <Button variant="deleteoutline" onClick={handleComponentDeltetion}>
          Delete Component
        </Button>
      </div>
    );
  }
}

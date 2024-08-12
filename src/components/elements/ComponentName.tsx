"use client";

import { Input } from "../ui/input";
import { updateName } from "@/app/actions";
import { FocusEventHandler } from "react";

export function ComponentName(props: { id: string; title: string }) {
  const onNameChange: FocusEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    updateName(value, true, props.id);
  };

  return (
    <div className="bg-white px-3 pt-3 pb-1 text-xl font-bold rounded-lg mb-8">
      <Input
        name="partname"
        defaultValue={props.title!}
        placeholder={"edit part name"}
        onBlur={onNameChange}
        className="placeholder-opacity-25"
      />
    </div>
  );
}

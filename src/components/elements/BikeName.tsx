"use client";

import { Input } from "../ui/input";
import { updateName } from "@/app/actions";
import { FocusEventHandler } from "react";

export function BikeName(props: { id: string; title: string }) {
  const onNameChange: FocusEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    updateName(value, false, props.id);
  };

  return (
    <div className="mb-8 rounded-lg bg-white px-3 pb-1 pt-3 text-xl font-bold">
      <Input
        name="bikename"
        defaultValue={props.title!}
        placeholder={"edit bike name"}
        onBlur={onNameChange}
        className="placeholder-opacity-25"
      />
    </div>
  );
}

"use client";

import { Input } from "../ui/input";
import { updateComponentType } from "@/app/actions";
import { FocusEventHandler } from "react";

export function ComponentType(props: { id: string; title: string }) {
  const onTypeChange: FocusEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    updateComponentType(value, props.id);
  };

  return (
    <div className="mb-8 rounded-lg bg-white px-3 pb-1 pt-3 text-xl font-bold">
      <Input
        name="parttype"
        defaultValue={props.title!}
        placeholder={"edit component type"}
        onBlur={onTypeChange}
        className="placeholder-opacity-25"
      />
    </div>
  );
}

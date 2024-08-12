"use client";

import { Input } from "@/components/ui/input";
import { updateComponentType, updateName } from "@/app/actions";
import { FocusEventHandler } from "react";

export function Componentheader(props: {
  title: string | null;
  id: string;
  subtitle: string | null;
}) {
  const onTypeChange: FocusEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    updateComponentType(value, props.id);
  };

  const onNameChange: FocusEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    updateName(value, true, props.id);
  };

  return (
    <div className="flex flex-1 flex-col content-end pr-4">
      <div className="align-text-bottom text-xl">
        <Input
          name="parttype"
          defaultValue={props.subtitle!}
          placeholder={"specify component type"}
          onBlur={onTypeChange}
          className="text-neutral-500 placeholder-neutral-500 placeholder-opacity-25"
        />
      </div>
      <div className="mb-1">
        <Input
          name="partname"
          defaultValue={props.title!}
          placeholder={"name the component"}
          onBlur={onNameChange}
          className="text-3xl placeholder-opacity-25"
        />
      </div>
    </div>
  );
}

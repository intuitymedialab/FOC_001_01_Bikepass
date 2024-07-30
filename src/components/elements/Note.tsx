"use client";

import { Textarea } from "@/components/ui/textarea";
import { updateNote } from "@/app/actions";
import { FocusEventHandler } from "react";
import _ from "lodash";

export function Note(props: {
  note: string;
  isComponent: boolean;
  id: string;
}) {
  const onNoteChange: FocusEventHandler<HTMLTextAreaElement> = ({
    target: { value },
  }) => {
    updateNote(value, props.isComponent, props.id);
  };

  return (
    <div className="bg-white p-2  rounded-lg mb-8">
      <Textarea
        name="bikename"
        onBlur={onNoteChange}
        defaultValue={props.note}
      />
    </div>
  );
}

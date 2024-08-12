"use client";

import { updateNote } from "@/app/actions";
import { FocusEventHandler } from "react";
import TextareaAutosize from "react-textarea-autosize";

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
    <div className="bg-white px-3 pt-3 pb-1 font-bold rounded-lg mb-8">
      <TextareaAutosize
        name="bikename"
        onBlur={onNoteChange}
        className="w-full"
        minRows={5}
        defaultValue={props.note}
        placeholder="keep some notes..."
      />
    </div>
  );
}

"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { updateName } from "@/app/actions";
import { FocusEventHandler } from "react";
import _ from "lodash";

export function Header(props: {
  title: string | null;
  id: string;
  isComponent: boolean;
  subtitle?: string | null;
  backbuttonid?: string;
}) {
  const onNameChange: FocusEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    updateName(value, props.isComponent, props.id);
  };

  if (props.isComponent) {
    return (
      <div className="border-neutral-30 fixed h-24 w-screen border-b bg-white pl-4 drop-shadow-sm">
        <div className="mt-4 flex flex-row items-center gap-4 font-bold text-black">
          <div className="">
            <Link href={`/bike/${props.backbuttonid}`} className="text-3xl">
              ←
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="fixed h-24 w-screen border-b border-neutral-300 bg-white p-5 drop-shadow-sm">
        <h1 className="mt-4 align-text-bottom text-5xl font-bold text-black">
          <div className="mb-9 rounded-lg">
            <Input
              name="bikename"
              defaultValue={props.title!}
              placeholder="name your bike"
              onBlur={onNameChange}
              className="placeholder-opacity-25"
            />
          </div>
        </h1>
      </div>
    );
  }
}

export default Header;

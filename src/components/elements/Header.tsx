"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { updateComponentType, updateName } from "@/app/actions";
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
      <div className="fixed w-screen bg-white pl-4 border-b border-neutral-30 drop-shadow-sm h-24">
        <div className="mt-4 flex flex-row gap-4 text-black font-bold items-center">
          <div className="">
            <Link href={`/bike/${props.backbuttonid}`} className=" text-3xl">
              ←
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="fixed w-screen bg-white p-5 h-24 border-b border-neutral-300 	drop-shadow-sm">
        <h1 className="text-5xl align-text-bottom	mt-4 text-black font-bold">
          <div className="rounded-lg mb-9">
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

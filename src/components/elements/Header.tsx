"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { updateComponentType, updateName } from "@/app/actions";
import { FocusEventHandler } from "react";
import _ from "lodash";

export function Header(props: {
  title: string;
  id: string;
  isComponent: boolean;
  subtitle?: string;
  backbuttonid?: string;
}) {
  const onTypeChange: FocusEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    updateComponentType(value, props.id);
  };

  const onNameChange: FocusEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    updateName(value, props.isComponent, props.id);
  };

  if (props.isComponent) {
    return (
      <div className="fixed w-screen bg-white pl-6  border-b border-neutral-30 drop-shadow-sm h-24">
        <div className="mt-4 flex flex-row text-black font-bold items-center">
          <div className="basis-1/6">
            <Link href={`/bike/${props.backbuttonid}`} className=" text-3xl">
              ←
            </Link>
          </div>
          <div className="basis-5/6  flex flex-col content-end">
            <div className=" align-text-bottom  text-xl text-neutral-400 ">
              <Input
                name="parttype"
                defaultValue={props.subtitle ?? ""}
                onBlur={onTypeChange}
              />
            </div>
            <div className="mb-1">
              <Input
                name="partname"
                defaultValue={props.title ?? ""}
                onBlur={onNameChange}
                className="text-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      // <div className="fixed w-screen bg-white p-6 h-44 border-b border-neutral-30 drop-shadow-sm">
      //   <h1 className="text-5xl align-text-bottom text-black font-bold">
      //     <Link href={`/bike/${props.backbuttonid}`}>
      //       <div className="mb-2">←</div>
      //     </Link>

      //     <div className="rounded-lg text-2xl align-text-bottom text-neutral-400">
      //       <Input
      //         name="parttype"
      //         defaultValue={props.subtitle ?? ""}
      //         onBlur={onTypeChange}
      //       />
      //     </div>
      //     <div className="rounded-lg mb-9">
      //       <Input
      //         name="partname"
      //         defaultValue={props.title ?? ""}
      //         onBlur={onNameChange}
      //       />
      //     </div>
      //   </h1>
      // </div>
    );
  } else {
    return (
      <div className="fixed w-screen bg-white p-6 h-24 border-b border-neutral-300	drop-shadow-sm">
        <h1 className="text-5xl align-text-bottom	mt-5 text-black font-bold">
          <div className="rounded-lg mb-9">
            <Input
              name="bikename"
              defaultValue={props.title ?? ""}
              onBlur={onNameChange}
            />
          </div>
        </h1>
      </div>
    );
  }
}

export default Header;

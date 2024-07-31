import Link from "next/link";

export function Listitem(props: {
  title: string;
  isLastItem: boolean;
  type: string;
  id: string;
}) {
  return (
    <Link href={`/part/${props.id}`}>
      <div className={props.isLastItem ? "" : "border-b border-slate-300 "}>
        <div
          key={props.id}
          className={
            props.isLastItem
              ? "flex flex-row items-center justify-between border-b border-slate-300  pr-3 ml-3 py-2"
              : "flex flex-row items-center justify-between pr-3 ml-3 py-2"
          }>
          <div className="text-black  ">
            <div>
              <div>
                <p className="text-lg text-neutral-500 h-6">{props.type}</p>
              </div>
              <div>
                <p className="text-black text-lg font-bold h-6">
                  {props.title}
                </p>
              </div>
            </div>
          </div>
          <p className="text-black text-2xl m-2 pt-2 ">→</p>
        </div>
      </div>
    </Link>
  );
}

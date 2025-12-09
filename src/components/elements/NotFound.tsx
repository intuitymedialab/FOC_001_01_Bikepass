import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function NotFound(props: { errorText: string }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="flex flex-1 text-4xl font-bold">{props.errorText}</h1>
      <Image
        className="mt-16 flex w-1/2 max-w-80 flex-1"
        src={"/nobike.svg"}
        alt={"No Bike"}
        width={300}
        height={300}
      />
      <Link href={""}>
        <Button className="mt-10 flex flex-col">Go Home</Button>
      </Link>
    </div>
  );
}

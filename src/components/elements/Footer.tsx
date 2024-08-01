import Image from "next/image";
import logo from "@/assets/intuity_logo_grau.svg";

export function Footer() {
  return (
    <div className="flex justify-center">
      <div>
        <a
          href="https://www.intuity.de/"
          target="_blank"
          rel="noopener noreferrer">
          <Image src={logo} className="h-6 w-auto" alt="logo" />
        </a>
      </div>
    </div>
  );
}

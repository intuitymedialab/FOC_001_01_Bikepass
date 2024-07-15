import { cn } from "@/lib/utils";
import { FunctionComponent } from "react";
import Image from "next/image";
import logo from "@/assets/intuity_logo_weiss.svg";
import { Button } from "../ui/button";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <nav
      className={cn(
        "flex flex-row w-full border-b border-b-border p-4 bg-secondary text-secondary-foreground items-center space-x-4 lg:space-x-6 justify-around",
        className,
      )}
      {...props}>
      <a
        href="https://www.intuity.de/"
        target="_blank"
        rel="noopener noreferrer">
        <Image src={logo} className="h-6" alt="logo" />
      </a>
      <div className="absolute right-2">
        <Button
          size="sm"
          className="space-x-4 bg-none text-primary-foreground"
          variant="link">
          <span>→{"   "}Get in touch</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

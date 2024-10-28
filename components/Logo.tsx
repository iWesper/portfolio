import React from "react";
import Image from "next/image";
import logo from "../public/LC_logo_primary.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="col-span-12 w-11/12 md:w-3/4 lg:w-1/2 text-[#FAF2E7] bg-[#FAF2E7] p-4 rounded-lg overflow-hidden group flex flex-col justify-center items-center transition-all">
      <TooltipProvider delayDuration={150}>
        <Tooltip>
          <TooltipTrigger className="items-center">
            <Image
              className="mx-auto"
              src={logo}
              alt="Luís Costa's logo"
              priority={true}
            />
          </TooltipTrigger>
          <TooltipContent className="z-50">
            <p>Hi! :)</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Link>
  );
};

export default Logo;

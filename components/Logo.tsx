import React from "react";
import Image from "next/image";
import logo from "../public/LC_logo_primary.png";

const Logo = () => {
  return (
    <div className="col-span-12 md:col-span-12 text-[#FAF2E7] bg-[#FAF2E7] p-4 rounded-lg overflow-hidden group flex flex-col justify-center items-center hover:-translate-y-2 transition-all w-full">
      <Image className="mx-auto" src={logo} alt="Luís Costa's logo" />
    </div>
  );
};

export default Logo;

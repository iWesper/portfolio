import React from "react";
import Image from "next/image";
import logo from "../public/LC_logo_primary.png";

const Logo = () => {
  return (
    <div className="col-span-12 md:col-span-12 text-white-100 bg-white-100 p-4 rounded-lg overflow-hidden group flex flex-col justify-center items-center hover:-translate-y-2 transition-transform w-full">
      <Image className="mx-auto" src={logo} alt="Luís Costa's logo" />
    </div>
  );
};

export default Logo;

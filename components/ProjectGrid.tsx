import Image from "next/image";
import React from "react";
import { Days_One } from "next/font/google";

interface ProjectGridProps {
  key?: number;
  id?: number;
  img: string;
  title: string;
  description: string;
}

const days_one_init = Days_One({
  subsets: ["latin"],
  weight: "400",
});

const ProjectGrid: React.FC<ProjectGridProps> = ({
  key,
  id,
  img,
  title,
  description,
}) => {
  return (
    <div className="min-h-full col-span-12 md:col-span-6 text-white-100 bg-primary p-4 rounded-lg overflow-hidden group flex flex-col justify-start items-center hover:-translate-y-2 transition-transform w-full">
      <h2
        className={`text-2xl md:text-4xl p-4 ${days_one_init.className} transition-colors duration-200 group-hover:text-tertiary`}
      >
        {title}
      </h2>
      {img && (
        <div className="relative w-full h-64">
          <Image
            src={img}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="absolute p-4"
          />
        </div>
      )}
      <p className="p-4">{description}</p>
    </div>
  );
};

export default ProjectGrid;

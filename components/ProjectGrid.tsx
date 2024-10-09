import Image from "next/image";
import React from "react";
import { Days_One } from "next/font/google";
import {
  FaExternalLinkAlt,
  FaReact,
  FaBootstrap,
  FaUnity,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  TbBrandThreejs,
  TbApi,
  TbBrandFramerMotion,
  TbAugmentedReality,
} from "react-icons/tb";
import {
  SiJavascript,
  SiFirebase,
  SiAxios,
  SiLeaflet,
  SiCsharp,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProjectGridProps {
  key?: number;
  id?: number;
  img: string;
  title: string;
  description: string;
  link?: string;
  roles?: string[];
  techStack?: string[];
}

const days_one_init = Days_One({
  subsets: ["latin"],
  weight: "400",
});

type TechIconKeys =
  | "React.js"
  | "JavaScript"
  | "Bootstrap"
  | "Firebase"
  | "REST APIs"
  | "Axios"
  | "Leaflet"
  | "CSS"
  | "HTML"
  | "Unity"
  | "C#"
  | "Next.js"
  | "TypeScript"
  | "TailwindCSS"
  | "React Three Fiber"
  | "React XR"
  | "Framer Motion";

const techIcons: Record<TechIconKeys, JSX.Element> = {
  "React.js": <FaReact className="size-8 md:size-6 lg:size-10 my-2" />,
  JavaScript: <SiJavascript className="size-8 md:size-6 lg:size-10 my-2" />,
  Bootstrap: <FaBootstrap className="size-8 md:size-6 lg:size-10 my-2" />,
  Firebase: <SiFirebase className="size-8 md:size-10 my-2" />,
  "REST APIs": <TbApi className="size-8 md:size-10 my-2" />,
  Axios: <SiAxios className="size-8 md:size-10 my-2" />,
  Leaflet: <SiLeaflet className="size-8 md:size-10 my-2" />,
  Unity: <FaUnity className="size-8 md:size-10 my-2" />,
  "C#": <SiCsharp className="size-8 md:size-10 my-2" />,
  "Next.js": <SiNextdotjs className="size-8 md:size-10 my-2" />,
  TypeScript: <SiTypescript className="size-8 md:size-10 my-2" />,
  TailwindCSS: <SiTailwindcss className="size-8 md:size-10 my-2" />,
  "React Three Fiber": (
    <TbBrandThreejs className="size-8 md:size-10 my-2" />
  ),
  "React XR": (
    <TbAugmentedReality className="size-8 md:size-10 my-2" />
  ),
  "Framer Motion": (
    <TbBrandFramerMotion className="size-8 md:size-10 my-2" />
  ),
  HTML: <FaHtml5 className="size-8 md:size-10 my-2" />,
  CSS: <FaCss3 className="size-8 md:size-10 my-2" />,
};

const ProjectGrid: React.FC<ProjectGridProps> = ({
  id,
  img,
  title,
  description,
  link,
  roles,
  techStack,
}) => {
  return link ? (
    <a
      href={link}
      target="_blank"
      className="min-h-full col-span-12 md:col-span-6 group items-center hover:-translate-y-2 transition-transform w-full"
    >
      <div className="h-full text-white-100 bg-primary p-4 rounded-lg overflow-hidden flex flex-col">
        <div className="flex flex-row flex-wrap justify-center">
          <h2
            className={`text-2xl md:text-4xl p-4 ${days_one_init.className} transition-colors duration-200 group-hover:text-tertiary text-center`}
          >
            {title}
          </h2>
          <FaExternalLinkAlt className="size-4 md:size-6 lg:size-8 my-auto transition-all group-hover:text-secondary" />
        </div>
        {img && (
          <div className="relative w-full h-64 rounded-lg">
            <Image
              src={img}
              alt={title}
              fill={true}
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="absolute px-4 pt-4 rounded-lg"
            />
          </div>
        )}
        <div className="flex flex-wrap flex-row px-4 pt-2">
          {roles?.map((role) => (
            <div
              key={role}
              className="text-sm rounded-md text-primary bg-secondary p-1 me-1 my-1"
            >
              {role}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap flex-row px-4 pt-2 space-x-1 justify-center">
          {techStack?.map((tech) => (
            <div key={tech} className="p-1">
              <TooltipProvider delayDuration={150}>
                <Tooltip>
                  <TooltipTrigger className="items-center">
                    {techIcons[tech as TechIconKeys] || tech}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
        <p className="p-4">{description}</p>
      </div>
    </a>
  ) : (
    <div className="min-h-full col-span-12 md:col-span-6 text-white-100 bg-primary p-4 rounded-lg overflow-hidden group flex flex-col justify-start items-center transition-transform w-full">
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
            fill={true}
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute p-4"
          />
        </div>
      )}
      <div className="flex flex-wrap flex-row px-4 pt-2">
        {roles?.map((role) => (
          <div
            key={role}
            className="text-sm rounded-md text-primary bg-secondary p-1 me-1 my-1"
          >
            {role}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap flex-row px-4 pt-2 space-x-1 items-center">
        {techStack?.map((tech) => (
          <div key={tech} className="p-1">
            <TooltipProvider delayDuration={150}>
              <Tooltip>
                <TooltipTrigger className="cursor-default">
                  {techIcons[tech as TechIconKeys] || tech}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        ))}
      </div>
      <p className="p-4">{description}</p>
    </div>
  );
};

export default ProjectGrid;

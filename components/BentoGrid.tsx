import React from "react";
import Link from "next/link";
import { Days_One } from "next/font/google";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiUnity,
  SiFigma,
  SiReact,
  SiCsharp,
} from "react-icons/si";
import { FaArrowRight, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const days_one_init = Days_One({
  subsets: ["latin"],
  weight: "400",
});

const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-11/12 md:w-3/4 lg:w-1/2 mx-auto my-2 min-h-full">
      <div className="col-span-12 md:col-span-8 text-white-100 bg-primary p-4 rounded-xl overflow-hidden group flex flex-col justify-between transition-transform relative min-h-full">
        <h2
          className={`text-xl md:text-2xl lg:text-4xl ${days_one_init.className} transition-colors duration-150 group-hover:text-tertiary`}
        >
          About Me
        </h2>
        <p className="mt-4">
          Hey there! I&apos;m Luís, a creative front-end developer from
          Portugal. I focus in the creation of people-friendly experiences,
          striving for an accessible and inspiring environment of use.
        </p>
      </div>
      <Link
        href="/projects"
        className="col-span-12 md:col-span-4 text-white-100 bg-primary p-4 rounded-xl overflow-hidden group flex flex-col justify-between hover:-translate-y-1 transition-transform min-h-full"
      >
        <div className="flex items-center justify-between space-x-2">
          <h2
            className={`text-xl md:text-2xl lg:text-4xl group-hover:text-tertiary transition-colors duration-150 ${days_one_init.className}`}
          >
            Projects
          </h2>
          <FaArrowRight className="group-hover:text-secondary size-10" />
        </div>
        <p className="mt-4">Have a look at some of my projects.</p>
      </Link>
      <div className="col-span-12 md:col-span-6 text-white-100 bg-primary p-4 rounded-xl overflow-hidden group flex flex-col justify-start transition-transform min-h-full">
        <h2
          className={`text-xl md:text-2xl lg:text-4xl group-hover:text-tertiary transition-colors duration-150 ${days_one_init.className}`}
        >
          Skills
        </h2>
        <p className="mt-4">This is my tech stack.</p>
        <div className="mt-auto">
          <div className="flex flex-wrap justify-center space-x-4 mt-4">
            <TooltipProvider delayDuration={150}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SiReact className="hover:text-secondary size-6 md:size-8 lg:size-10 my-2 transition-colors duration-150" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>React.js</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={150}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SiNextdotjs className="hover:text-secondary size-6 md:size-8 lg:size-10 my-2 transition-colors duration-150" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Next.js</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={150}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SiTailwindcss className="hover:text-secondary size-6 md:size-8 lg:size-10 my-2 transition-colors duration-150" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tailwind CSS</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={150}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SiFigma className="hover:text-secondary size-6 md:size-8 lg:size-10 my-2 transition-colors duration-150" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Figma</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={150}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SiCsharp className="hover:text-secondary size-6 md:size-8 lg:size-10 my-2 transition-colors duration-150" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>C#</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={150}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SiUnity className="hover:text-secondary size-6 md:size-8 lg:size-10 my-2 transition-colors duration-150" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Unity</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 text-white-100 bg-primary p-4 rounded-xl overflow-hidden group flex flex-col justify-start transition-transform min-h-full">
        <h2
          className={`text-xl md:text-2xl lg:text-4xl group-hover:text-tertiary transition-colors duration-150 ${days_one_init.className}`}
        >
          Contact
        </h2>
        <p className="mt-4">Feel free to reach out to me.</p>
        <div className="flex items-center justify-center mt-auto space-x-4">
          <TooltipProvider delayDuration={150}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="mailto:luis.pedro10@live.com.pt"
                  className="hover:text-secondary"
                >
                  <FaEnvelope className="hover:text-secondary hover:-translate-y-1 transition-all size-6 md:size-8 lg:size-10 my-2" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Send me an email :)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={150}>
            <Tooltip>
              <TooltipTrigger asChild>
              <a
            href="https://www.linkedin.com/in/lprpc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
            title="LinkedIn"
          >
            <FaLinkedin className="hover:text-secondary hover:-translate-y-1 transition-all size-6 md:size-8 lg:size-10 my-2" />
          </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Lets connect! :D</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;

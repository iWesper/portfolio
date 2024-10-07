import React from "react";
import Link from "next/link";
import { Days_One } from "next/font/google";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiCsharp,
  SiUnity,
  SiFigma,
  SiReact,
} from "react-icons/si";
import { FaArrowRight, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";

const days_one_init = Days_One({
  subsets: ["latin"],
  weight: "400",
});

const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-11/12 md:w-3/4 lg:w-1/2 mx-auto py-10 min-h-full">
      <div className="col-span-12 md:col-span-8 text-white-100 bg-primary p-4 rounded-xl overflow-hidden group flex flex-col justify-between hover:-translate-y-1 transition-transform relative min-h-full">
        <h2
          className={`text-xl md:text-2xl lg:text-4xl ${days_one_init.className} transition-colors duration-200 group-hover:text-tertiary`}
        >
          About Me
        </h2>
        <p>
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
            className={`text-xl md:text-2xl lg:text-4xl group-hover:text-tertiary ${days_one_init.className}`}
          >
            Projects
          </h2>
          <FaArrowRight size={48} className="group-hover:text-secondary" />
        </div>
        <p className="">Have a look at some of my projects.</p>
      </Link>
      <div className="col-span-12 md:col-span-6 text-white-100 bg-primary p-4 rounded-xl overflow-hidden group flex flex-col justify-start hover:-translate-y-1 transition-transform min-h-full">
        <h2
          className={`text-xl md:text-2xl lg:text-4xl group-hover:text-tertiary ${days_one_init.className}`}
        >
          Skills
        </h2>
        <p>This is my tech stack.</p>
        <div className="mt-auto">
          <div className="flex flex-wrap space-x-4">
            <div title="React">
              <SiReact className="hover:-translate-y-1 transition-transform hover:text-secondary size-6 md:size-8 lg:size-10" />
            </div>
            <div title="Next.js">
              <SiNextdotjs className="hover:-translate-y-1 transition-transform hover:text-secondary size-6 md:size-8 lg:size-10" />
            </div>
            <div title="Tailwind CSS">
              <SiTailwindcss className="hover:-translate-y-1 transition-transform hover:text-secondary size-6 md:size-8 lg:size-10" />
            </div>
            <div title="Figma">
              <SiFigma className="hover:-translate-y-1 transition-transform hover:text-secondary size-6 md:size-8 lg:size-10" />
            </div>
            <div title="C#">
              <SiCsharp className="hover:-translate-y-1 transition-transform hover:text-secondary size-6 md:size-8 lg:size-10" />
            </div>
            <div title="Unity">
              <SiUnity className="hover:-translate-y-1 transition-transform hover:text-secondary size-6 md:size-8 lg:size-10" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 text-white-100 bg-primary p-4 rounded-xl overflow-hidden group flex flex-col justify-between hover:-translate-y-1 transition-transform min-h-full">
        <h2
          className={`text-xl md:text-2xl lg:text-4xl group-hover:text-tertiary ${days_one_init.className}`}
        >
          Contact
        </h2>
        <p className="">Feel free to reach out to me.</p>
        <div className="flex items-center justify-start space-x-4">
          <a
            href="mailto:luis.pedro10@live.com.pt"
            className="hover:text-secondary"
            title="Email"
          >
            <FaEnvelope className="hover:text-secondary transition-colors size-6 md:size-8 lg:size-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/lprpc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
            title="LinkedIn"
          >
            <FaLinkedin className="hover:text-secondary transition-colors size-6 md:size-8 lg:size-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;

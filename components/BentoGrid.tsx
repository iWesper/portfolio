import React from "react";
import Link from "next/link";
import { Days_One } from "next/font/google";
import {
  SiNextdotjs,
  SiTailwindcss,
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
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-11/12 md:w-3/4 lg:w-1/2 mx-auto py-10 md:py-40 h-full">
      <Logo />
      <div className="col-span-12 md:col-span-8 text-white-100 bg-primary p-4 rounded-xl group flex flex-col justify-between hover:-translate-y-2 transition-transform relative min-h-[200px]">
        <h2
          className={`text-2xl md:text-4xl ${days_one_init.className} transition-colors duration-200 group-hover:text-tertiary`}
        >
          About Me
        </h2>
        <p className="">
          Hey there! I&apos;m Luís, a creative front-end developer from
          Portugal. I focus in the creation of people-friendly experiences,
          striving for an accessible and inspiring environment of use.
        </p>
      </div>
      <Link
        href="/projects"
        className="col-span-12 md:col-span-4 text-white-100 bg-primary p-4 rounded-xl overflow-hidden group flex flex-col justify-between hover:-translate-y-2 transition-transform"
      >
        <div className="flex items-center justify-between space-x-2">
          <h2
            className={`text-2xl md:text-4xl group-hover:text-tertiary ${days_one_init.className}`}
          >
            Projects
          </h2>
          <FaArrowRight size={48} className="hover:text-secondary" />
        </div>
        <p className="">Have a look at some of my projects.</p>
      </Link>
      <div className="col-span-12 md:col-span-6 text-white-100 bg-primary p-4 rounded-xl overflow-hidden group flex flex-col justify-between hover:-translate-y-2 transition-transform min-h-[200px]">
        <h2
          className={`text-2xl md:text-4xl group-hover:text-tertiary ${days_one_init.className}`}
        >
          Skills
        </h2>
        <p>This is my tech stack.</p>
        <div className="mt-auto">
          <div className="flex space-x-4">
            <div title="React">
              <SiReact
                size={24}
                className="icon hover:-translate-y-2 transition-transform hover:text-secondary"
              />
            </div>
            <div title="Next.js">
              <SiNextdotjs
                size={24}
                className="icon hover:-translate-y-2 transition-transform hover:text-secondary"
              />
            </div>
            <div title="Tailwind CSS">
              <SiTailwindcss
                size={24}
                className="icon hover:-translate-y-2 transition-transform hover:text-secondary"
              />
            </div>
            <div title="Figma">
              <SiFigma
                size={24}
                className="icon hover:-translate-y-2 transition-transform hover:text-secondary"
              />
            </div>
            <div title="Unity">
              <SiUnity
                size={24}
                className="icon hover:-translate-y-2 transition-transform hover:text-secondary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6 text-white-100 bg-primary p-4 rounded-xl overflow-hidden group flex flex-col justify-between hover:-translate-y-2 transition-transform">
        <h2
          className={`text-2xl md:text-4xl group-hover:text-tertiary ${days_one_init.className}`}
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
            <FaEnvelope
              size={48}
              className="icon hover:text-secondary transition-colors"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/lprpc/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary"
            title="LinkedIn"
          >
            <FaLinkedin
              size={48}
              className="icon hover:text-secondary transition-colors"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;

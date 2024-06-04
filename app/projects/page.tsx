import Logo from "@/components/Logo";
import ProjectGrid from "@/components/ProjectGrid";
import { projectData } from "@/data";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Days_One } from "next/font/google";

const days_one_init = Days_One({
  subsets: ["latin"],
  weight: "400",
});

export default function Projects() {
  return (
    <main className="h-full flex flex-col md:flex-row justify-center items-start md:items-center bg-white-100 overflow-auto mx-auto sm:px-10 px-5">
      <div className="self-start my-4 md:fixed md:top-4 md:left-4 bg-primary rounded-xl p-4">
        <Link href="/">
          <FaArrowLeft
            size={48}
            className="hover:text-tertiary text-white-100"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-11/12 md:w-3/4 lg:w-1/2 mx-auto py-10 md:py-40 h-full">
        <Logo />
        <h1
          className={`${days_one_init.className} col-span-12 text-4xl md:text-6xl text-white-100 bg-primary hover:text-secondary transition-colors p-4 rounded-xl overflow-hidden group flex flex-col justify-center items-center`}
        >
          Projects
        </h1>
        {projectData.map((project) => (
          <ProjectGrid
            key={project.id}
            id={project.id}
            img={project.img}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </main>
  );
}
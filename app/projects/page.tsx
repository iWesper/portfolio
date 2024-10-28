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
    <main className="min-h-full flex flex-col md:flex-row justify-center items-start md:items-center bg-white-100 overflow-auto mx-auto sm:px-10 px-5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-11/12 md:w-3/4 lg:w-3/5 mx-auto my-2 h-full justify-start">
        <div className="col-span-12 flex flex-row bg-primary rounded-xl p-4">
          <div className="self-start my-4">
            <Link href="/">
              <FaArrowLeft
                size={48}
                className="hover:text-secondary text-white-100 transition-all"
              />
            </Link>
          </div>
          <h1
            className={`${days_one_init.className} mx-auto text-4xl md:text-6xl text-white-100 hover:text-secondary transition-colors overflow-hidden group flex flex-col justify-center items-center`}
          >
            Projects
          </h1>
        </div>
        {projectData.map((project) => (
          <ProjectGrid
            key={project.id}
            id={project.id}
            img={project.img}
            title={project.title}
            description={project.description}
            link={project.link}
            roles={project.roles}
            techStack={project.techStack}
          />
        ))}
      </div>
    </main>
  );
}

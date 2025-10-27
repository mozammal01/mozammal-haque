"use client";
import { projects } from "@/data/projects";
import ProjectCard from "../projects/ProjectCard";
import LeftSliderMotion from "../animation/LeftSliderMotion";
import { usePathname } from "next/navigation";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export default function Projects() {
  const pathname = usePathname();
  const projectLength = projects.length;
  const filteredProjects = projects.slice(0, pathname === "/" ? 2 : projectLength);
  return (
    <div className="my-20 container mx-auto px-4">
      {pathname === "/" && (
        <div id="projects" className="flex items-center justify-between mb-20">
          <h2 className="text-3xl font-bold text-primary uppercase">Projects</h2>
          <InteractiveHoverButton href="/projects">View All</InteractiveHoverButton>
        </div>
      )}
      <div className="grid grid-cols-1 2xl:grid-cols-2 justify-center items-center gap-10">
        {filteredProjects.map((project) => (
          <LeftSliderMotion key={project.id}>
            <ProjectCard project={project} />
          </LeftSliderMotion>
        ))}
      </div>
    </div>
  );
}

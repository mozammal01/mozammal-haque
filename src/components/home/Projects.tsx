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
    <section className="w-full py-24 relative bg-gradient-to-b from-white to-neutral-50 dark:from-[#111827] dark:to-[#0a0a0a] border-t border-black/5 dark:border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
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
    </section>
  );
}

import { projects } from "@/data/projects";
import ProjectCard from "../projects/ProjectCard";
import LeftSliderMotion from "../animation/LeftSliderMotion";

export default function Projects() {
  return (
    <div id="projects" className="my-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-primary uppercase">Projects</h2>
      <div className="grid grid-cols-1 2xl:grid-cols-2 justify-center items-center gap-10">
        {projects.map((project) => (
          <LeftSliderMotion key={project.id}>
            <ProjectCard project={project} />
          </LeftSliderMotion>
        ))}
      </div>
    </div>
  );
}

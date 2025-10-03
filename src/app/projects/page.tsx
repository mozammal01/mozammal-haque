import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div>
      <h2 className="text-4xl font-bold text-white flex items-center justify-center h-[600px]">All Projects</h2>
      {/* All Projects */}
      <div className="container mx-auto px-4 my-10">
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

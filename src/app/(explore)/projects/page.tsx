import DetailsHeader from "@/components/detailsHeader/DetailsHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div>
      <DetailsHeader title="All Projects" />
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

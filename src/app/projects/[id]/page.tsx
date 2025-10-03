import ProjectDetailsComponent from "@/components/projects/ProjectDetails";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-300 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-4xl font-bold text-white flex items-center justify-center h-[600px]">Here is the details of {project.name}</h2>
      <ProjectDetailsComponent project={project} />
    </div>
  );
}

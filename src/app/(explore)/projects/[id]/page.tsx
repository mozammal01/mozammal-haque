import ProjectDetailsComponent from "@/components/projects/ProjectDetails";
import DetailsHeader from "@/components/detailsHeader/DetailsHeader";
import { projects } from "@/data/projects";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The project you're looking for doesn't exist.",
    };
  }

  return {
    title: `${project.name} - Project Details`,
    description: project.description,
    keywords: [project.name, "web development project", "portfolio project", "React", "Next.js", "MERN Stack"],
    openGraph: {
      title: `${project.name} - Mozammal Haq Portfolio`,
      description: project.description,
        images: [
        {
          url: project.image.src,
          width: 1200,
          height: 630,
          alt: `${project.name} - Web Development Project`,
        },
      ],
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h6 className="text-4xl font-bold text-white mb-4">Project Not Found</h6>
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
      <DetailsHeader title={project.name} subtitle={project.description} />
      <div className="bg-background-secondary text-foreground">
        <ProjectDetailsComponent project={project} />
      </div>
    </div>
  );
}

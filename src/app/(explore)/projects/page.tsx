import ShutterMotion from "@/components/animation/ShutterMotion";
import DetailsHeader from "@/components/detailsHeader/DetailsHeader";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Portfolio",
  description:
    "Explore my portfolio of web development projects including full-stack applications, e-commerce platforms, education management systems, and more. Built with React, Next.js, Node.js, Express.js, and MongoDB.",
  keywords: ["web development projects", "portfolio", "React projects", "Next.js projects", "MERN stack projects", "full-stack projects"],
  openGraph: {
    title: "Projects Portfolio - Mozammal Haq",
    description:
      "Explore my portfolio of web development projects including full-stack applications built with React, Next.js, and MERN stack.",
    images: ["/projects/awesome-restaurant.png"],
  },
};

export default function Projects() {
  return (
    <div>
      <DetailsHeader title="All Projects" />
      {/* All Projects */}
      <div className="container mx-auto px-4 my-10">
        <ShutterMotion className="grid grid-cols-1 2xl:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ShutterMotion>
      </div>
    </div>
  );
}

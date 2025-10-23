import Image from "next/image";
import AnimatedButton from "../animatedButton/AnimatedButton";
import { Project } from "@/interfaces/shared-interfaces";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="md:h-[400px] h-[300px] md:w-[600px] w-[360px] overflow-hidden bg-white rounded-lg duration-300 relative border border-primary mx-auto">
      <div className="bg-black hover:shadow-md shadow-primary md:h-[360px] h-[260px] md:w-[550px] w-[310px] rounded-lg absolute top-4 left-6 hover:opacity-100 opacity-0 duration-500 flex flex-col gap-4 items-center justify-center">
        <h3 className="text-3xl font-bold text-primary">{project.name}</h3>
        <div className="flex max-md:flex-col items-center justify-center md:gap-4 gap-2 w-full">
          <AnimatedButton target="_blank" variant="outline" className="min-w-[150px] min-h-[44px]" text="Source Code"href={project.sourceCode} />
          <AnimatedButton variant="primary" className="min-w-[150px] min-h-[44px]" text="View Details"href={`/projects/${project.id}`} />
        </div>
      </div>
      <div className="h-full w-full">
        <Image src={project.image} alt={project.name} width={100} height={100} className="h-full w-full" unoptimized />
      </div>
    </div>
  );
}

import Image from "next/image";
import AnimatedButton from "../animatedButton/AnimatedButton";
import { Project } from "@/interfaces/shared-interfaces";
import PremiumCard from "../ui/PremiumCard";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="md:w-[600px] w-full mx-auto">
      <PremiumCard className="p-0 overflow-hidden group/card h-[400px]">
        <div className="relative h-full w-full">
          {/* Project Image */}
          <Image 
            src={project.image} 
            alt={project.name} 
            fill
            className="object-cover transition-transform duration-700 group-hover/card:scale-110" 
            unoptimized 
          />
          
          {/* Premium Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover/card:opacity-95 transition-opacity duration-500" />
          
          {/* Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end gap-6 translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
            <h3 className="text-3xl font-bold text-white group-hover/card:text-primary transition-colors duration-300">
              {project.name}
            </h3>
            
            <div className="flex flex-wrap gap-4 items-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100">
              <AnimatedButton 
                target="_blank" 
                variant="outline" 
                className="min-w-[140px]" 
                text="Source Code" 
                href={project.sourceCode} 
              />
              <AnimatedButton 
                variant="primary" 
                className="min-w-[140px]" 
                text="View Details" 
                href={`/projects/${project.id}`} 
              />
            </div>
          </div>
        </div>
      </PremiumCard>
    </div>
  );
}

import Image from "next/image";
import AnimatedButton from "../animatedButton/AnimatedButton";
import { Project } from "@/interfaces/shared-interfaces";
import PremiumCard from "../ui/PremiumCard";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project, index = 0 }: { project: Project, index?: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className="w-full max-w-6xl mx-auto group">
      <PremiumCard className="p-0 overflow-hidden bg-white/5 dark:bg-slate-900/50 backdrop-blur-xl border border-black/10 dark:border-white/10">
        <div className={`flex flex-col lg:flex-row ${isEven ? "" : "lg:flex-row-reverse"} h-auto lg:h-[450px]`}>
          
          {/* Project Image Section */}
          <div className="w-full lg:w-[55%] relative h-[300px] lg:h-full overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
            <Image 
              src={project.image} 
              alt={project.name} 
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
              unoptimized 
            />
            {/* Overlay gradient to blend with content */}
            <div className={`absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent via-transparent to-black/50 opacity-60 z-10`} />
          </div>
          
          {/* Content Section */}
          <div className="w-full lg:w-[45%] p-8 lg:p-12 flex flex-col justify-center relative z-20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
            
            <h3 className="text-3xl lg:text-4xl font-black text-slate-800 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
              {project.name}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 line-clamp-4 leading-relaxed">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.filteredSkills?.slice(0, 5).map((skill) => (
                <div key={skill.id} className="flex items-center gap-1.5 px-3 py-1.5 bg-black/5 dark:bg-white/10 rounded-full border border-black/10 dark:border-white/10">
                  <Image src={skill.icon} alt={skill.name} width={16} height={16} className="w-4 h-4 object-contain" unoptimized />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{skill.name}</span>
                </div>
              ))}
              {project.filteredSkills && project.filteredSkills.length > 5 && (
                <div className="flex items-center px-3 py-1.5 bg-black/5 dark:bg-white/10 rounded-full border border-black/10 dark:border-white/10">
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">+{project.filteredSkills.length - 5}</span>
                </div>
              )}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 items-center mt-auto">
              <a 
                href={project.sourceCode}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-105 transition-transform"
              >
                <Github size={18} />
                <span>Code</span>
              </a>
              <a 
                href={`/projects/${project.id}`}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform"
              >
                <span>Details</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
            
          </div>
        </div>
      </PremiumCard>
    </div>
  );
}

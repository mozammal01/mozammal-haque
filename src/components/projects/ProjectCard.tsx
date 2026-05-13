import Image from "next/image";
import AnimatedButton from "../animatedButton/AnimatedButton";
import { Project } from "@/interfaces/shared-interfaces";
import PremiumCard from "../ui/PremiumCard";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export default function ProjectCard({ project, index = 0 }: { project: Project, index?: number }) {
  const isEven = index % 2 === 0;

  return (
    <div className="w-full max-w-6xl mx-auto group/project">
      <PremiumCard className="p-0 overflow-hidden bg-white/5 dark:bg-slate-900/50 backdrop-blur-xl border border-black/10 dark:border-white/10">
        <div className={`flex flex-col lg:flex-row ${isEven ? "" : "lg:flex-row-reverse"} h-auto lg:h-[450px]`}>

          {/* Project Image Section */}
          <div className="w-full lg:w-[55%] relative h-[300px] lg:h-[450px] overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 group-hover/project:bg-transparent transition-colors duration-500 z-20 mix-blend-overlay pointer-events-none" />

            <div className="absolute top-0 left-0 w-full transition-transform duration-[8s] ease-linear group-hover/project:-translate-y-[calc(100%-300px)] lg:group-hover/project:-translate-y-[calc(100%-450px)]">
              <Image
                src={project.image}
                alt={project.name}
                placeholder="blur"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Overlay gradient to blend with content */}
            <div className={`absolute inset-0 bg-gradient-to-t ${isEven ? 'lg:bg-gradient-to-r' : 'lg:bg-gradient-to-l'} from-transparent via-transparent to-black/50 opacity-60 z-20 pointer-events-none`} />
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
              <AnimatedButton
                variant="outline"
                text="Live"
                href={project.visitNow}
                target="_blank"
                className="px-8 min-w-[140px] text-center inline-block"
              />
              <AnimatedButton
                variant="primary"
                text="Code"
                href={project.sourceCode}
                target="_blank"
                className="px-8 min-w-[140px] text-center inline-block"
              />
              <InteractiveHoverButton
                href={`/projects/${project.id}`}
                className="px-8 min-w-[140px] text-center inline-block">
                Details
              </InteractiveHoverButton>

            </div>

          </div>
        </div>
      </PremiumCard>
    </div>
  );
}

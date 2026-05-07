"use client";
import { projects } from "@/data/projects";
import ProjectCard from "../projects/ProjectCard";
import LeftSliderMotion from "../animation/LeftSliderMotion";
import { usePathname } from "next/navigation";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { motion } from "framer-motion";

export default function Projects() {
  const pathname = usePathname();
  const projectLength = projects.length;
  const filteredProjects = projects.slice(0, pathname === "/" ? 2 : projectLength);
  return (
    <section className="w-full py-24 relative bg-gradient-to-b from-white to-neutral-50 dark:from-[#111827] dark:to-[#0a0a0a] border-t border-black/5 dark:border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        {pathname === "/" && (
          <div id="projects" className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <span className="text-primary font-bold tracking-wider uppercase text-sm block">My Work</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Featured Projects</h2>
              <div className="w-20 h-1 bg-primary rounded-full mt-2" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <InteractiveHoverButton href="/projects">View All Projects</InteractiveHoverButton>
            </motion.div>
          </div>
        )}
      <div className="flex flex-col gap-16 lg:gap-24">
        {filteredProjects.map((project, index) => (
          <LeftSliderMotion key={project.id}>
            <ProjectCard project={project} index={index} />
          </LeftSliderMotion>
        ))}
      </div>
        </div>
    </section>
  );
}

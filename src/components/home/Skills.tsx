"use client";
import { skills } from "@/data/skillsData";
import SkillCard from "../skillCard/SkillCard";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const ref = useRef(null);
  const pathname = usePathname();
  const isSkillsPage = pathname === "/skills";
  const [skillCount, setSkillCount] = useState(5);
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1280) { // xl breakpoint
        setSkillCount(4);
      } else {
        setSkillCount(5);
      }
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const filteredSkills = isSkillsPage ? skills : skills.slice(0, skillCount);

  return (
    <section id="skills" className="w-full py-24 relative bg-gradient-to-b from-neutral-50 to-white dark:from-[#0a0a0a] dark:to-[#030712] border-t border-black/5 dark:border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      {/* Premium Ambient Background Orbs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-60 dark:opacity-40 pointer-events-none mix-blend-screen" />
      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="space-y-4">
          {!isSkillsPage && (
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <span className="text-primary font-bold tracking-wider uppercase text-sm block">My Toolkit</span>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-2 leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300">
                  Skills & Expertise
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full mt-2" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <InteractiveHoverButton 
                  href="/skills"
                  className="border-primary/50 text-primary bg-primary/5 shadow-[0_0_20px_rgba(var(--primary-rgb,255,193,7),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb,255,193,7),0.6)] px-8 py-3 text-lg transition-all duration-300"
                >
                  View All Skills
                </InteractiveHoverButton>
              </motion.div>
            </div>
          )}
          <SkillCard filteredSkills={filteredSkills} />
        </div>
      </div>
    </section>
  );
}

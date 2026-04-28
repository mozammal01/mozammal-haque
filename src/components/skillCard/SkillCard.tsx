"use client";
import Image, { StaticImageData } from "next/image";
import React, { useRef, useState } from "react";
import { Skill } from "@/interfaces/shared-interfaces";
import { motion, useInView } from "framer-motion";
import PremiumCard from "../ui/PremiumCard";

export default function SkillCard({ filteredSkills }: { filteredSkills: Skill[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredId, setHoveredId] = useState(0);
  
  return (
    <div ref={ref} className="flex flex-wrap justify-center gap-8 md:gap-12">
      {filteredSkills.map((skill, index) => (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          onMouseEnter={() => setHoveredId(skill.id)}
          onMouseLeave={() => setHoveredId(0)}
          key={skill.id}
          className="w-[200px] h-[200px] shrink-0 group/skill cursor-pointer"
        >
          <PremiumCard className="w-full h-full">
            {/* Inner background glow orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500" />
            
            <div className="flex flex-col justify-center items-center gap-6 relative z-10 h-full w-full">
              <motion.div
                className="relative"
                animate={{
                  y: hoveredId === skill.id ? -8 : 0,
                  scale: hoveredId === skill.id ? 1.15 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="absolute inset-0 bg-white/20 dark:bg-white/10 rounded-full blur-md opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 scale-150" />
                <Image 
                  src={skill.icon as StaticImageData} 
                  alt={skill.name} 
                  width={72} 
                  height={72} 
                  className={`object-contain relative z-10 drop-shadow-xl transition-all duration-300 ${skill.className || ""}`} 
                />
              </motion.div>

              <div className="flex flex-col items-center">
                <span className="text-xl font-bold tracking-wider text-foreground group-hover/skill:text-primary transition-colors duration-300">
                  {skill.name}
                </span>
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 opacity-0 group-hover/skill:opacity-100 transition-all duration-300 -translate-y-2 group-hover/skill:translate-y-0">
                  Proficient
                </span>
              </div>
            </div>
          </PremiumCard>
        </motion.div>
      ))}
    </div>
  );
}

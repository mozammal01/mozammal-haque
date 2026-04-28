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
    <div ref={ref} className="flex flex-wrap justify-center gap-8">
      {filteredSkills.map((skill) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: skill.id * 0.1 }}
          onMouseEnter={() => setHoveredId(skill.id)}
          onMouseLeave={() => setHoveredId(0)}
          key={skill.id}
          className="w-[220px]"
        >
          <PremiumCard className="h-[220px] flex items-center justify-center text-center">
            <div className="flex flex-col justify-center items-center gap-4">
              <motion.div
                animate={{
                  scale: hoveredId === skill.id ? 1.1 : 1,
                  rotate: hoveredId === skill.id ? [0, -5, 5, 0] : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src={skill.icon as StaticImageData} 
                  alt={skill.name} 
                  width={80} 
                  height={80} 
                  className={`object-contain drop-shadow-[0_0_10px_rgba(255,193,7,0.3)] ${skill.className || ""}`} 
                />
              </motion.div>

              <span className="text-xl font-bold tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          </PremiumCard>
        </motion.div>
      ))}
    </div>
  );
}

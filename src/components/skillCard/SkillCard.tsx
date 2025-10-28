"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import ManyCardMotion from "../animation/ManyCardMotion";
import { Skill } from "@/interfaces/shared-interfaces";
import { motion } from "framer-motion";

export default function SkillCard({ filteredSkills }: { filteredSkills: Skill[] }) {
  const [hoveredId, setHoveredId] = useState(0);
  const handleHover = (id: number) => {
    setHoveredId(id);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
      {filteredSkills.map((skill) => (
        <ManyCardMotion
          index={skill.id - 1}
          onMouseEnter={() => handleHover(skill.id)}
          onMouseLeave={() => handleHover(0)}
          key={skill.id}
          className="flex flex-col justify-center items-center mx-auto gap-2 bg-amber-50 dark:bg-gray-900 rounded p-10 w-[250px] h-[250px] transition-all hover:scale-105 hover:shadow-smooth duration-300 ease-in-out"
        >
          <div className="flex flex-col justify-center items-center relative overflow-hidden h-[250px] w-[250px]">
            <motion.div
              animate={{
                scale: hoveredId === skill.id ? 1.2 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <Image src={skill.icon as StaticImageData} alt={skill.name} width={100} height={100} className={skill.className || ""} />
            </motion.div>

            <motion.span
              initial={{ y: 0, opacity: 1 }}
              animate={{
                y: hoveredId === skill.id ? 20 : 0,
                opacity: hoveredId === skill.id ? 0 : 1,
              }}
              transition={{
                duration: 0.3,
              }}
              className="text-2xl font-bold text-black dark:text-white absolute bottom-0"
            >
              {skill.name}
            </motion.span>
          </div>
        </ManyCardMotion>
      ))}
    </div>
  );
}

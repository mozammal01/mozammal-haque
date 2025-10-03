"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import ManyCardMotion from "../animation/ManyCardMotion";
import { Skill } from "@/interfaces/shared-interfaces";

import { IconProps } from "@/interfaces/shared-interfaces";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null);
  const [hoveredId, setHoveredId] = useState(0);
  const handleHover = (id: number) => {
    setHoveredId(id);
  };
  return (
    <ManyCardMotion
      index={index}
      onMouseEnter={() => handleHover(skill.id)}
      onMouseLeave={() => handleHover(0)}
      key={index}
      className="flex flex-col justify-center items-center mx-auto gap-2 bg-amber-50 rounded p-10 w-[250px] h-[250px] cursor-pointer transition-all hover:scale-105 hover:shadow-smooth duration-300 ease-in-out"
    >
      <div className="flex flex-col justify-center items-center relative overflow-hidden h-[250px] w-[250px]">
        <motion.div
          ref={ref}
          animate={{
            scale: hoveredId === skill.id ? 1.2 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {skill.img ? (
            <Image src={skill.icon as StaticImageData} alt={skill.name} width={100} height={100} className={skill.className || ""} />
          ) : (
            React.createElement(skill.icon as React.ComponentType<IconProps>, { size: 100 })
          )}
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
          className="text-2xl font-bold text-black absolute bottom-0"
        >
          {skill.name}
        </motion.span>
      </div>
    </ManyCardMotion>
  );
}

"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { skills } from "@/data/skills";
import { IconProps } from "@/interfaces/shared-interfaces";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hoveredId, setHoveredId] = useState(0);
  const handleHover = (id: number) => {
    setHoveredId(id);
  };
  const languages = [
    {
      name: "Bangla",
      level: "Fluent",
    },
    {
      name: "English",
      level: "Fairly",
    },
    {
      name: "Hindi",
      level: "Conversational",
    },
  ];

  return (
    <div id="skills" className="my-20 container mx-auto px-4">
      <div className="space-y-4 my-10 ">
        <h2 className="text-3xl font-bold text-primary uppercase">Languages</h2>
        <div className="flex flex-col lg:flex-row gap-10">
          {languages.map((language, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-amber-50 rounded p-10 xl:w-[500px] w-full hover:scale-105 hover:shadow-smooth duration-300"
            >
              <p className="text-2xl font-bold">{language.name}</p>
              <span className="text-xl font-bold text-primary">({language.level})</span>
            </div>
          ))}
        </div>
      </div>
      {/* Skills */}
      <div ref={ref} className="space-y-4 my-10 ">
        <h2 className="text-3xl font-bold text-primary uppercase">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => handleHover(skill.id)}
              onMouseLeave={() => handleHover(0)}
              key={index}
              className="flex flex-col justify-center items-center mx-auto gap-2 bg-amber-50 rounded p-10 w-[250px] h-[250px] cursor-pointer transition-all hover:scale-105 hover:shadow-smooth duration-300 ease-in-out"
            >
              <div className="flex flex-col justify-center items-center relative overflow-hidden h-[250px] w-[250px]">
                <motion.div
                  animate={{
                    scale: hoveredId === skill.id ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {skill.img ? (
                    <Image
                      src={skill.icon as StaticImageData}
                      alt={skill.name}
                      width={100}
                      height={100}
                      className={skill.className || ""}
                    />
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import { skills } from "@/data/skillsData";
import ManyCardMotion from "../animation/ManyCardMotion";
import SkillCard from "../skillCard/SkillCard";

export default function Skills() {
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
            <ManyCardMotion
              index={index}
              key={index}
              className="flex items-center gap-2 bg-amber-50 rounded p-10 xl:w-[500px] w-full hover:scale-105 hover:shadow-smooth duration-300"
            >
              <p className="text-2xl font-bold">{language.name}</p>
              <span className="text-xl font-bold text-primary">({language.level})</span>
            </ManyCardMotion>
          ))}
        </div>
      </div>
      {/* Skills */}
      <div className="space-y-4 my-10 ">
        <h2 className="text-3xl font-bold text-primary uppercase">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

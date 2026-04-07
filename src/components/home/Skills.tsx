"use client";
import { skills } from "@/data/skillsData";
import SkillCard from "../skillCard/SkillCard";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
    <div id="skills" ref={ref} className="my-40 container mx-auto px-4">
      <div className="space-y-4">
        {!isSkillsPage && (
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-3xl font-bold text-primary uppercase">Skills</h2>
            <InteractiveHoverButton href="/skills">View All</InteractiveHoverButton>
          </div>
        )}
        <SkillCard filteredSkills={filteredSkills} />
      </div>
    </div>
  );
}

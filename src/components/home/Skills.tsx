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
    <section id="skills" className="w-full py-24 relative bg-gradient-to-b from-neutral-50 to-white dark:from-[#0f172a] dark:to-[#1e1b4b] border-t border-black/5 dark:border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div ref={ref} className="container mx-auto px-4 relative z-10">
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
    </section>
  );
}

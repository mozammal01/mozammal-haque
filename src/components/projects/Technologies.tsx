import SkillCard from "../skillCard/SkillCard";
import { Skill } from "@/interfaces/shared-interfaces";

export default function Technologies({ filteredSkills }: { filteredSkills: Skill[] }) {
  return (
    <div className="py-4 container mx-auto px-2">
      <SkillCard filteredSkills={filteredSkills} />
    </div>
  );
}
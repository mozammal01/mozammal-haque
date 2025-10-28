import SkillCard from "../skillCard/SkillCard";
import { Skill } from "@/interfaces/shared-interfaces";

export default function Technologies({ filteredSkills }: { filteredSkills: Skill[] }) {
  

  return (
    <div className="py-20 container mx-auto px-4">
      <h3 className="text-3xl font-bold text-primary uppercase">Technologies</h3>
      <div className="my-20">
        <SkillCard filteredSkills={filteredSkills} />
      </div>
    </div>
  );
}
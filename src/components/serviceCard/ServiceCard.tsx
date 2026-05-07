import { Service } from "@/interfaces/shared-interfaces";
import Image from "next/image";
import ShutterMotion from "../animation/ShutterMotion";
import PremiumCard from "../ui/PremiumCard";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <PremiumCard className="group/service h-full">
      <ShutterMotion className="flex flex-col h-full justify-between pb-0">
        <div className="flex flex-col items-center text-center p-2">
          {/* Glowing Icon Wrapper Card */}
          <div className="relative w-20 h-20 rounded-2xl bg-amber-500/10 dark:bg-amber-500/5 flex items-center justify-center mb-6 mx-auto border border-amber-500/10 group-hover/service:border-primary/40 group-hover/service:shadow-[0_0_25px_rgba(245,158,11,0.25)] transition-all duration-500">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover/service:scale-100 transition-transform duration-500" />
            <Image 
              src={service.iconImage} 
              alt={service.name} 
              width={48} 
              height={48} 
              className="relative z-10 transition-all duration-500 group-hover/service:scale-110 object-contain filter dark:brightness-110" 
              unoptimized 
            />
          </div>
          
          {/* Card Title */}
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-white mb-4 group-hover/service:text-primary transition-colors duration-300">
            {service.name}
          </h3>
          
          {/* Card Description */}
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-350 font-medium leading-relaxed max-w-[290px] mx-auto">
            {service.description}
          </p>
        </div>
      </ShutterMotion>
    </PremiumCard>
  );
}

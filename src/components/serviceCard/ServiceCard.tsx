import { Service } from "@/interfaces/shared-interfaces";
import Image from "next/image";
import ShutterMotion from "../animation/ShutterMotion";
import PremiumCard from "../ui/PremiumCard";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <PremiumCard className="group/service h-full">
      <ShutterMotion className="-m-6 flex flex-col md:flex-row h-full min-h-[400px]">
        
        {/* Left Side - Graphic/Icon Area */}
        <div className="w-full md:w-5/12 relative flex items-center justify-center p-8 bg-gradient-to-br from-neutral-100 to-neutral-200/50 dark:from-neutral-800/40 dark:to-neutral-900/40 border-b md:border-b-0 md:border-r border-black/5 dark:border-white/5 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-40 group-hover/service:opacity-80 transition-opacity duration-700"></div>
          <div className="absolute w-64 h-64 border border-primary/20 rounded-full blur-xl group-hover/service:scale-150 transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute w-40 h-40 border border-primary/30 rounded-full blur-md group-hover/service:scale-125 transition-transform duration-700 ease-in-out"></div>
          
          {/* Main Icon */}
          <div className="relative z-10 w-28 h-28 md:w-40 md:h-40 drop-shadow-2xl group-hover/service:scale-110 group-hover/service:-translate-y-2 transition-all duration-500 ease-out flex items-center justify-center">
            <Image 
              src={service.iconImage} 
              alt={service.name} 
              width={160}
              height={160}
              className="object-contain filter dark:brightness-110 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]" 
              unoptimized 
            />
          </div>
        </div>
        
        {/* Right Side - Content Area */}
        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-transparent">
          {/* Category/Tag */}
          <div className="mb-6 flex items-center gap-3">
            <span className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 shadow-sm">
              {service.category}
            </span>
            <div className="h-px bg-primary/20 flex-1"></div>
          </div>
          
          {/* Card Title */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white mb-6 group-hover/service:text-primary transition-colors duration-300 leading-tight">
            {service.name}
          </h3>
          
          {/* Card Description */}
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8">
            {service.description}
          </p>
          
          {/* Features list */}
          <ul className="space-y-4 mt-auto">
            {["High Performance & Fast Loading", "Scalable & Modern Architecture", "Interactive & Smooth Animations"].map((feature, i) => (
              <li key={i} className="flex items-center text-sm md:text-base text-slate-700 dark:text-slate-400 font-semibold group-hover/service:text-slate-900 dark:group-hover/service:text-slate-200 transition-colors duration-300">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-4 shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.2)] group-hover/service:bg-primary/20 group-hover/service:scale-110 transition-all duration-300">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
      </ShutterMotion>
    </PremiumCard>
  );
}

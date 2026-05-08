import LeftSliderMotion from "../animation/LeftSliderMotion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DetailsHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="relative overflow-hidden bg-slate-950 border-b border-white/5 py-20 md:py-28">
      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 bg-primary/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 md:w-[450px] h-80 md:h-[450px] bg-amber-500/5 rounded-full blur-[120px] md:blur-[160px] pointer-events-none" />
      
      {/* Subtly Animated Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Navigation / Back Button */}
        <div className="flex justify-start mb-10 md:mb-12">
          <Link href="/#projects" className="group flex items-center gap-2 text-slate-400 hover:text-primary transition-all duration-300 bg-white/[0.03] border border-white/10 hover:border-primary/30 px-5 py-2 md:py-2.5 rounded-full backdrop-blur-md hover:shadow-[0_0_20px_rgba(255,193,7,0.15)]">
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-sm font-semibold">Back to Projects</span>
          </Link>
        </div>
        
        {/* Main Header Content */}
        <LeftSliderMotion className="text-white flex flex-col items-center justify-center text-center">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-primary uppercase bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-6 shadow-[0_0_15px_rgba(255,193,7,0.05)]">
            Case Study Showcase
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent pb-2 leading-tight">
            {title}
          </h2>
          <p className="xl:w-2/3 w-11/12 mx-auto mt-6 text-sm md:text-lg text-slate-300 leading-relaxed font-medium">
            {subtitle}
          </p>
        </LeftSliderMotion>
      </div>
    </div>
  );
}


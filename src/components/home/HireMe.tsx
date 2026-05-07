"use client";
import AnimatedButton from "../animatedButton/AnimatedButton";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, Cpu, Zap } from "lucide-react";

export default function HireMe() {
  const containerRef = useRef(null);

  return (
    <section id="hireme" className="w-full py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/10 dark:bg-indigo-500/10 blur-[100px] pointer-events-none animate-pulse duration-[6s]" />

      <div className="container mx-auto px-4 max-w-5xl relative z-10" ref={containerRef}>
        {/* Floating Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Accent border highlight */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none opacity-40 dark:opacity-60" />

          {/* Left Content Side */}
          <div className="flex-1 space-y-6 text-center lg:text-left z-10">
            {/* Pulsing Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Open To Opportunities
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white leading-tight">
              Let's Build Something <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-500">Extraordinary</span> Together
            </h3>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              I am available for **Full-time Remote Jobs**, freelancing contracts, and interesting collaborations. Let's combine modern UI aesthetics with flawless performance!
            </p>

            {/* Quick Benefits/Points Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 max-w-md mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4 text-primary" />
                </div>
                <span className="font-semibold text-sm">Scalable Code</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <span className="font-semibold text-sm">Ultra Fast UI</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-primary" />
                </div>
                <span className="font-semibold text-sm">On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
                <span className="font-semibold text-sm">Flexible Hours</span>
              </div>
            </div>
          </div>

          {/* Right Action Side */}
          <div className="flex shrink-0 flex-col sm:flex-row lg:flex-col gap-6 w-full lg:w-auto items-center justify-center z-10">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto lg:w-full"
            >
              <AnimatedButton 
                variant="leftToRight" 
                text="Hire Me Now" 
                href="#contact" 
                className="w-full py-4 px-10 text-center min-w-[200px] text-lg font-bold"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto lg:w-full"
            >
              <AnimatedButton 
                variant="outline" 
                text="View Resume" 
                href="https://drive.google.com/file/d/1JIU_ubgYXZYrIOR2pVUNnpBhknLcowLd/view?usp=sharing" 
                target="_blank"
                className="w-full py-4 px-10 text-center min-w-[200px] text-lg font-bold"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

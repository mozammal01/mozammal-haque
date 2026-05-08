"use client";
import { ProjectDetailsProps } from "@/interfaces/shared-interfaces";
import AnimatedButton from "../animatedButton/AnimatedButton";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import ImageSlider from "./ImageSlider";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Technologies from "./Technologies";
import PremiumCard from "../ui/PremiumCard";
import { Sparkles, CheckCircle2, Calendar, User, Briefcase, Tag } from "lucide-react";

export default function ProjectDetailsComponent({ project }: { project: ProjectDetailsProps }) {
  const { features, sourceCode, visitNow, images1, images2, name, filteredSkills, description } = project;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="container mx-auto px-4 py-16 md:py-24 space-y-20"
    >
      {/* Modern Grid Layout for Overview and Project Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left column: Overview & Features */}
        <div className="lg:col-span-8 space-y-8">
          {/* Overview Card */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 dark:border-white/5 bg-white/5 dark:bg-slate-900/40 p-6 md:p-8 backdrop-blur-md shadow-2xl">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
            <h3 className="text-2xl font-extrabold text-white mb-4 tracking-wider uppercase flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-ping"></span> Project Overview
            </h3>
            <p className="text-slate-300 leading-relaxed text-base md:text-lg">
              {description}
            </p>
          </div>

          {/* Key Features Card */}
          {features && features.length > 0 && (
            <div className="relative overflow-hidden rounded-2xl border border-white/10 dark:border-white/5 bg-white/5 dark:bg-slate-900/40 p-6 md:p-8 backdrop-blur-md shadow-2xl">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-amber-500"></div>
              <h3 className="text-2xl font-extrabold text-white tracking-wider mb-6 flex items-center gap-2 uppercase">
                <Sparkles className="text-primary w-5 h-5 animate-pulse" /> Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className="group flex items-start space-x-4 p-4 rounded-xl border border-white/5 bg-white/5 dark:bg-slate-950/20 hover:bg-white/10 dark:hover:bg-slate-900/50 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
                  >
                    <div className="bg-primary/10 text-primary p-2 rounded-lg group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
                      {feature.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right column: Action Links & Specs */}
        <div className="lg:col-span-4 space-y-8">
          {/* Case Study Info Card */}
          <PremiumCard className="w-full h-full">
            <div className="space-y-6 w-full">
              <h4 className="text-xl font-bold text-white tracking-wider uppercase border-b border-white/10 pb-4">
                Case Study Specs
              </h4>
              
              {/* Specs Rows */}
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <div className="flex items-center gap-3 text-slate-400">
                    <User className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold">Role</span>
                  </div>
                  <span className="text-sm font-bold text-white">Full-Stack Developer</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <div className="flex items-center gap-3 text-slate-400">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold">Category</span>
                  </div>
                  <span className="text-sm font-bold text-white">Web Application</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <div className="flex items-center gap-3 text-slate-400">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold">Timeline</span>
                  </div>
                  <span className="text-sm font-bold text-white">4 Weeks</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <div className="flex items-center gap-3 text-slate-400">
                    <Tag className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold">Status</span>
                  </div>
                  <span className="text-sm font-bold text-primary flex items-center gap-1.5 bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                    Completed
                  </span>
                </div>
              </div>

              {/* Actions/Links */}
              <div className="pt-4 flex flex-col gap-4">
                <InteractiveHoverButton target="_blank" href={visitNow} className="w-full justify-center">
                  Live Site
                </InteractiveHoverButton>
                <AnimatedButton variant="outline" text="Source Code" target="_blank" href={sourceCode} className="w-full block text-center" />
              </div>
            </div>
          </PremiumCard>
        </div>
      </div>

      {/* Visual Showcase (Screenshots) */}
      {((images1 && images1.length > 0) || (images2 && images2.length > 0)) && (
        <div className="space-y-10 pt-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,193,7,0.05)]">
              Application Gallery
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide uppercase">
              Interactive Showcase
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-medium">
              Swipe or click on the card decks below to view various dashboard modules and pages in full detail.
            </p>
          </div>
          <div className="bg-white/[0.02] dark:bg-slate-950/20 border border-white/10 dark:border-white/5 rounded-3xl p-6 md:p-10 backdrop-blur-md">
            <ImageSlider images1={images1 || []} images2={images2 || []} name={name} />
          </div>
        </div>
      )}

      {/* Technologies/Skills */}
      {filteredSkills && filteredSkills.length > 0 && (
        <div className="space-y-6 pt-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,193,7,0.05)]">
              Built With
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide uppercase">
              Technology Stack
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base font-medium">
              These are the foundational frameworks, languages, and tools utilized in developing this product.
            </p>
          </div>
          <div className="bg-white/[0.02] dark:bg-slate-950/20 border border-white/10 dark:border-white/5 rounded-3xl p-4 md:p-8 backdrop-blur-md">
            <Technologies filteredSkills={filteredSkills} />
          </div>
        </div>
      )}
    </motion.div>
  );
}


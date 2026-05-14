"use client";
import { useRef } from "react";
import { services } from "@/data/services";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function Services() {
  const endingCardRef = useRef<HTMLDivElement>(null);
  
  // Extends the top margin massively so it stays 'in view' even as you scroll past it
  const isEndingCardInView = useInView(endingCardRef, { margin: "2000px 0px -20% 0px" });

  return (
    <section 
      id="services" 
      className="w-full py-24 relative bg-gradient-to-b from-neutral-50 to-white dark:from-[#0a0a0a] dark:to-[#030712] border-t border-black/5 dark:border-white/5"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl mb-16 md:mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-primary font-bold tracking-wider uppercase text-sm block mb-2">What I Offer</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">My Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>
      </div>

      <div className="relative w-full px-4 pb-32">
        <div className="flex flex-col gap-24 md:gap-[50vh] max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCardItem 
              key={service.id}
              service={service} 
              index={index} 
              isEndingCardInView={isEndingCardInView} 
            />
          ))}

          <EndingCard 
            endingCardRef={endingCardRef} 
            index={services.length} 
          />
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// Extracted Sub-Components for Clean Code
// -------------------------------------------------------------

function ServiceCardItem({ service, index, isEndingCardInView }: { service: any, index: number, isEndingCardInView: boolean }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="sticky w-full flex justify-center"
      style={{
        top: `calc(15vh + ${index * 30}px)`,
        zIndex: index,
      }}
    >
      {/* Native DOM div handles the hide effect to bypass Framer Motion overrides */}
      <div 
        className="w-full flex justify-center transition-all duration-700 ease-in-out"
        style={{ 
          opacity: isEndingCardInView ? 0 : 1,
          visibility: isEndingCardInView ? "hidden" : "visible",
          transform: isEndingCardInView ? "scale(0.95)" : "scale(1)"
        }}
      >
        <div className={`relative bg-gradient-to-br from-primary/5 via-white/95 to-neutral-50/95 dark:from-primary/10 dark:via-[#0a0a0a]/95 dark:to-black/95 backdrop-blur-2xl border border-primary/20 dark:border-primary/10 rounded-[2rem] p-6 md:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.05)] dark:shadow-[0_30px_100px_rgba(0,0,0,0.8)] w-full max-w-[1000px] flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16 overflow-hidden group`}>
          
          {/* Subtle Background Glow on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          {/* Graphic Area (Alternating) */}
          <div className="w-full md:w-1/2 h-64 md:h-[380px] relative flex items-center justify-center bg-gradient-to-br from-neutral-100 to-white dark:from-[#111111] dark:to-black rounded-2xl border border-primary/10 dark:border-primary/5 overflow-hidden group-hover:border-primary/30 dark:group-hover:border-primary/20 transition-colors duration-500 shadow-inner">
            {/* Decorative Circles */}
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full border border-primary/10" />
            <div className="absolute bottom-8 left-8 w-32 h-32 rounded-full bg-primary/10 dark:bg-primary/5 blur-2xl" />
            
            {/* Glowing Icon Frame */}
            <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_20px_rgba(var(--primary-rgb, 255,193,7),0.15)] dark:drop-shadow-[0_0_30px_rgba(var(--primary-rgb, 255,193,7),0.2)] group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-700">
              <Image
                src={service.iconImage}
                alt={service.name}
                width={192}
                height={192}
                className="object-contain filter dark:brightness-90 group-hover:brightness-110 transition-all duration-500"
                unoptimized
              />
            </div>
          </div>
          
          {/* Content Area */}
          <div className="w-full md:w-1/2 flex flex-col text-center md:text-left py-4">
            
            {/* Icon/Badge at the top */}
            <div className={`mb-6 flex justify-center ${isEven ? 'md:justify-start' : 'md:justify-end md:mr-auto'}`}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(var(--primary-rgb, 255,193,7),0.2)]">
                {service.icon}
              </div>
            </div>

                      <h3 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold mb-6 leading-[1.1] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              {service.name}
            </h3>
            
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8 opacity-90 max-w-md mx-auto md:mx-0">
              {service.description}
            </p>

            {/* Features / Details */}
            {service.features && (
              <ul className="space-y-3.5 mb-6">
                {service.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center justify-center md:justify-start text-sm text-slate-700 dark:text-slate-200 font-semibold group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                    <span className="flex items-center justify-center text-primary mr-4 shrink-0 bg-primary/10 w-6 h-6 rounded-full">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            {/* Bottom Footer Link */}
            <div className="mt-auto flex items-center justify-center md:justify-start text-xs text-slate-500 dark:text-slate-400 font-medium pt-4 border-t border-black/5 dark:border-white/5 group-hover:text-primary transition-colors duration-300">
              <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              Continuously improving and learning
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function EndingCard({ endingCardRef, index }: { endingCardRef: React.RefObject<HTMLDivElement | null>, index: number }) {
  return (
    <motion.div
      ref={endingCardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="sticky w-full flex justify-center pb-12"
      style={{
        top: `calc(15vh + ${index * 30}px)`,
        zIndex: index
      }}
    >
      <div className="relative bg-gradient-to-br from-primary/5 via-white/95 to-neutral-50/95 dark:from-primary/10 dark:via-[#0a0a0a]/95 dark:to-primary/5 backdrop-blur-3xl border border-primary/20 dark:border-primary/30 rounded-[2.5rem] p-10 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.05)] dark:shadow-[0_0_100px_rgba(var(--primary-rgb,255,193,7),0.1)] w-full max-w-[1000px] min-h-[750px] md:min-h-[800px] flex flex-col items-center justify-center text-center overflow-hidden group">
        
        {/* Background Animations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <span className="px-6 py-2 text-sm font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full border border-primary/20 mb-8 inline-block shadow-sm dark:shadow-[0_0_20px_rgba(var(--primary-rgb,255,193,7),0.1)]">
            What's Next?
          </span>
          
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
            Ready to Build Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Dream Project?</span>
          </h3>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
            Whether you need a full-stack web application, a stunning frontend, or secure backend architecture, I am here to bring your vision to life with modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact" className="px-8 py-4 bg-primary text-slate-900 font-bold rounded-xl text-lg hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(var(--primary-rgb,255,193,7),0.3)]">
              Let's Work Together
            </a>
            <a href="#projects" className="px-8 py-4 bg-transparent text-slate-800 dark:text-white font-bold rounded-xl text-lg border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

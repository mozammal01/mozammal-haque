"use client";
import { services } from "@/data/services";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
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
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="sticky w-full flex justify-center"
              style={{
                top: `calc(15vh + ${index * 30}px)`,
                zIndex: index
              }}
            >
              <div className="relative bg-[#0f0e17]/95 backdrop-blur-2xl border border-white/5 rounded-[2rem] p-6 md:p-10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] w-full max-w-[1000px] flex flex-col md:flex-row items-center gap-10 md:gap-16 overflow-hidden group">
                
                {/* Subtle Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Left Side: Graphic Area */}
                <div className="w-full md:w-1/2 h-64 md:h-[380px] relative flex items-center justify-center bg-[#13111c] rounded-2xl border border-white/5 overflow-hidden group-hover:border-indigo-500/20 transition-colors duration-500">
                  {/* Decorative Circles */}
                  <div className="absolute top-8 right-8 w-16 h-16 rounded-full border border-white/10" />
                  <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full border border-white/10" />
                  
                  {/* Glowing Icon Frame */}
                  <div className="relative z-10 w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_30px_rgba(99,102,241,0.15)] group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700">
                    <Image
                      src={service.iconImage}
                      alt={service.name}
                      width={192}
                      height={192}
                      className="object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500"
                      unoptimized
                    />
                  </div>
                </div>
                
                {/* Right Side: Content Area */}
                <div className="w-full md:w-1/2 flex flex-col text-center md:text-left py-4">
                  
                  {/* Icon/Badge at the top */}
                  <div className="mb-6 flex justify-center md:justify-start">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#e0ff32] mb-6 leading-[1.1] tracking-tight">
                    {service.name}
                  </h3>
                  
                  <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed mb-8 opacity-90 max-w-md mx-auto md:mx-0">
                    {service.description}
                  </p>

                  {/* Features / Details */}
                  {service.features && (
                    <ul className="space-y-3.5 mb-6">
                      {service.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-center justify-center md:justify-start text-sm text-slate-200 font-semibold group-hover:text-white transition-colors duration-300">
                          <span className="flex items-center justify-center text-indigo-400 mr-4 shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Bottom Footer Link */}
                  <div className="mt-auto flex items-center justify-center md:justify-start text-xs text-slate-400 font-medium pt-4 border-t border-white/5 group-hover:text-[#e0ff32] transition-colors duration-300">
                    <svg className="w-4 h-4 mr-2 text-[#e0ff32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Continuously improving and learning
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
              <div className="relative bg-white/90 dark:bg-[#0f1115]/90 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-[2.5rem] p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.5)] w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 overflow-hidden group">
                
                {/* Subtle Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Left Side: Glowing Icon / Graphic */}
                <div className="w-full md:w-5/12 h-64 md:h-80 relative flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800/50 dark:to-neutral-900/50 rounded-[2rem] border border-black/5 dark:border-white/5 overflow-hidden">
                  {/* Animated Glow Elements */}
                  <div className="absolute w-48 h-48 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000 ease-in-out" />
                  <div className="absolute w-32 h-32 bg-primary/30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700 delay-100 ease-in-out" />
                  
                  <div className="relative z-10 w-28 h-28 md:w-36 md:h-36 drop-shadow-[0_0_20px_rgba(255,193,7,0.3)] group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                    <Image
                      src={service.iconImage}
                      alt={service.name}
                      width={144}
                      height={144}
                      className="object-contain filter dark:brightness-110"
                      unoptimized
                    />
                  </div>
                </div>
                
                {/* Right Side: Content */}
                <div className="w-full md:w-7/12 flex flex-col text-center md:text-left py-4 pr-0 md:pr-8">
                  <div className="mb-6 flex justify-center md:justify-start">
                    <span className="px-5 py-2 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full border border-primary/20 shadow-sm backdrop-blur-sm">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white mb-6 leading-tight tracking-tight group-hover:text-primary transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features / Details */}
                  <ul className="space-y-4">
                    {["Scalable Architecture", "Modern & Interactive UI", "High Performance"].map((feature, i) => (
                      <li key={i} className="flex items-center justify-center md:justify-start text-sm md:text-base text-slate-700 dark:text-slate-400 font-semibold group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors duration-300">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary mr-4 shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.2)] group-hover:bg-primary/20 transition-colors duration-300">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

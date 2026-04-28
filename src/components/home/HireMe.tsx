"use client";
import AnimatedButton from "../animatedButton/AnimatedButton";
import LeftSliderMotion from "../animation/LeftSliderMotion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HireMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="hireme" className="w-full relative my-20 bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-white p-10 lg:py-20 flex flex-col lg:flex-row items-center justify-center px-4 overflow-hidden shadow-[0_0_40px_rgba(255,193,7,0.15)] border-y border-white/20">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none"></div>

      <div
        ref={ref}
        className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 relative z-10">
        <LeftSliderMotion className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold uppercase -pb-10">I am available for Remote Jobs</LeftSliderMotion>
        <motion.div
          initial={{ opacity: 0, y: -500 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -500 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatedButton variant="outline" text="Hire Me Now" href="#contact" />
        </motion.div>
      </div>
    </section>
  );
}

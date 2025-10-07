"use client";
import AnimatedButton from "../animatedButton/AnimatedButton";
import LeftSliderMotion from "../animation/LeftSliderMotion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HireMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="hireme" className="my-20 bg-primary text-white p-10 lg:py-20 flex flex-col lg:flex-row items-center justify-center px-4">
      
      <div 
      ref={ref}
      className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        <LeftSliderMotion className="lg:text-4xl text-2xl font-bold uppercase -pb-10">I am available for Remote Jobs</LeftSliderMotion>
        <motion.div
          initial={{ opacity: 0, y: -500 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -500 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatedButton variant="outline" text="Hire Me Now" href="#contact" />
        </motion.div>
      </div>
    </div>
  );
}

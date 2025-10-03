"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function RightSliderMotion({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100, clipPath: "inset(0 0 0 100%)" }}
      animate={isInView ? { opacity: 1, x: 0, clipPath: "inset(0 0 0 0)" } : { opacity: 0, x: 100, clipPath: "inset(0 0 0 100%)" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

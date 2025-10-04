"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ManyCardMotion({ children, className, index, onMouseEnter, onMouseLeave }: { children: React.ReactNode; className?: string; index?: number; onMouseEnter?: () => void; onMouseLeave?: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      transition={{ duration: 0.5, delay: index ? index * 0.1 : 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

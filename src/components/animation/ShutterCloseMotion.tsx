"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ShutterCloseMotion({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 0, clipPath: "inset(0 0 100% 0)" }}
      animate={isInView ? { opacity: 1, y: 0, clipPath: "inset(0 0 0 0)" } : { opacity: 0, y: 0, clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 1.4, delay: 0.8 }}
      className={className + " pb-10"}
    >
      {children}
    </motion.div>
  );
}

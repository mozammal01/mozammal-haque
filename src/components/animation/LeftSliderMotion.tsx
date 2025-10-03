"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function LeftSliderMotion({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
    return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100, clipPath: "inset(0 100% 0 0)", backgroundColor: "red" }} 
      animate={isInView ? { opacity: 1, x: 0, clipPath: "inset(0 0 0 0)" , backgroundColor: "" } : { opacity: 0, x: -100, clipPath: "inset(0 100% 0 0)" , backgroundColor: "red" }}
      style={{}}
      transition={{ duration: 1, delay: 0.4 }}
      className={className + " pb-10"}
    >
      {children}
    </motion.div>
  );
}
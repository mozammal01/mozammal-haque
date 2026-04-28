"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative my-20 flex justify-center items-center h-12" style={{ perspective: "1000px" }}>
      {/* 3D Rotating Line */}
      <motion.div
        className="w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent absolute top-1/2 -translate-y-1/2"
        animate={{ rotateX: [0, 180, 360] }}
        transition={{ duration: 6, ease: "linear", repeat: Infinity }}
      />
      
      {/* Floating 3D Diamond */}
      <motion.div
        className="w-4 h-4 bg-gradient-to-br from-primary via-primary/80 to-transparent border border-primary shadow-[0_0_20px_rgba(255,193,7,0.6)] relative z-10"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ 
          rotateX: [0, 360], 
          rotateY: [0, 360], 
          rotateZ: [0, 360],
          scale: [1, 1.2, 1] 
        }}
        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
      />

      {/* Background glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
        <span className="inline-block h-12 w-32 rounded-full bg-primary/20 blur-xl animate-pulse duration-[3000ms]" />
      </div>
    </div>
  );
}

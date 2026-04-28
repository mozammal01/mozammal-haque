"use client";

import React from "react";
import { motion } from "framer-motion";

interface PremiumCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function PremiumCard({ children, className = "" }: PremiumCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative group overflow-hidden rounded-2xl p-[3px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,193,7,0.3)] ${className}`}
    >
      {/* Spinning border effect behind the card */}
      <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--primary)_15%,transparent_30%,transparent_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />
      
      {/* Always visible subtle border */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 dark:border-white/5 pointer-events-none" />

      {/* Inner card background */}
      <div className="relative z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-[14px] w-full h-full overflow-hidden flex flex-col">
        {/* Top linear gradient effect */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Background pattern/glow */}
        <div className="absolute -inset-px bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content wrapper */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          {children}
        </div>
        
        {/* Bottom accent glow */}
        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none" />
      </div>
    </motion.div>
  );
}

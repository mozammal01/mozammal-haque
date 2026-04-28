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
      className={`relative group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(255,193,7,0.1)] ${className}`}
    >
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
    </motion.div>
  );
}

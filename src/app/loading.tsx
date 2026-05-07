"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "HELLO",            // English
  "স্বাগতম",           // Bangla
  "ASSALAMU ALAIKUM", // Arabic/Muslim
  "BONJOUR",          // French
  "HOLA",             // Spanish
  "CIAO",             // Italian
  "WELCOME",          // English
  "MOZAMMAL HAQUE"    // Branding
];

// Framer motion variants for letter-by-letter stagger animations
const letterVariants = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 150, damping: 15 } },
  exit: { y: -40, opacity: 0, transition: { ease: "easeIn", duration: 0.15 } }
};

const containerVariants = {
  animate: { transition: { staggerChildren: 0.03 } },
  exit: { transition: { staggerChildren: 0.02, staggerDirection: -1 } }
};

export default function Loading({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Smooth Percentage Counter
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + Math.floor(Math.random() * 10) + 3;
          return next > 100 ? 100 : next;
        });
      }, 90);
      return () => clearInterval(interval);
    } else {
      const delayTimer = setTimeout(() => {
        setLoading(false);
      }, 1200); // Buffer for final branding name exposure
      return () => clearTimeout(delayTimer);
    }
  }, [progress]);

  // Multilingual Word Rotation
  useEffect(() => {
    if (progress < 100) {
      const wordInterval = setInterval(() => {
        setIndex((prev) => (prev + 1) % (words.length - 1));
      }, 260);
      return () => clearInterval(wordInterval);
    } else {
      setIndex(words.length - 1); // Freeze on final branding "MOZAMMAL HAQUE"
    }
  }, [progress]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            initial={{ y: 0 }}
            exit={{ 
              y: "-100vh",
              transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 bg-[#020617] text-white z-[9999] flex flex-col items-center justify-between py-12 px-6 overflow-hidden select-none"
          >
            {/* Shifting Premium Mesh Gradient Background */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-amber-500/10 blur-[120px] animate-pulse" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/10 blur-[150px] animate-pulse" style={{ animationDelay: "1.5s" }} />
              <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-purple-600/5 blur-[100px] animate-pulse" style={{ animationDelay: "3s" }} />
            </div>

            {/* Subtle Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />

            {/* TOP WIDGET: Monospaced HUD style meta */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative z-10 flex items-center justify-between w-full max-w-6xl text-[10px] md:text-xs font-mono text-slate-500 tracking-[0.25em] uppercase px-4"
            >
              <span>[ PORTFOLIO v2.0 ]</span>
              <span className="animate-pulse text-amber-500/80">● CREATIVE DEV SYSTEM</span>
            </motion.div>

            {/* CENTER PANEL: Greetings & Concentric Rings */}
            <div className="relative flex flex-col items-center text-center space-y-14 z-10 w-full max-w-4xl my-auto">
              {/* Spinning Rings with Pulsing Ambient Golden Aura */}
              <div className="relative w-36 h-36 flex items-center justify-center">
                {/* Outer Breathing Aura Glow */}
                <div className="absolute inset-[-10px] rounded-full bg-amber-500/5 blur-xl animate-ping" style={{ animationDuration: "3s" }} />
                
                {/* Interactive spinning tracks */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-t-2 border-b-2 border-primary border-r border-r-transparent border-l border-l-transparent shadow-[0_0_25px_rgba(245,158,11,0.15)]"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                  className="absolute inset-3 rounded-full border-r-2 border-l-2 border-primary/30 border-t border-t-transparent border-b border-b-transparent"
                />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                  className="absolute inset-6 rounded-full border-t border-b border-white/5 border-r border-r-transparent border-l border-l-transparent"
                />
                
                <span className="text-3xl font-black tracking-tighter text-primary font-mono drop-shadow-[0_0_10px_rgba(245,158,11,0.2)]">
                  {progress}%
                </span>
              </div>

              {/* Character-by-Character Stagger Greetings Animation */}
              <div className="h-20 md:h-28 flex items-center justify-center w-full px-4 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="flex flex-wrap justify-center"
                  >
                    {words[index].split("").map((char, charIdx) => (
                      <motion.span
                        key={charIdx}
                        variants={letterVariants}
                        className={`text-4xl sm:text-6xl md:text-7xl font-black tracking-tight font-sans inline-block select-none ${
                          char === " " ? "mr-4" : ""
                        } ${
                          index === words.length - 1 
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 drop-shadow-[0_0_20px_rgba(245,158,11,0.25)]" 
                            : "text-white/95"
                        }`}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress Slider Track */}
              <div className="w-80 h-[2px] bg-white/5 rounded-full overflow-hidden relative shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 shadow-[0_0_10px_rgba(245,158,11,0.6)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* BOTTOM WIDGET: Monospaced Status Labels */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative z-10 flex items-center justify-between w-full max-w-6xl text-[9px] md:text-[11px] font-mono text-slate-500 tracking-[0.2em] px-4"
            >
              <span>CRAFTING EXPERIENCES</span>
              <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <main className={loading ? "opacity-0 select-none pointer-events-none h-screen overflow-hidden" : "opacity-100 transition-opacity duration-1000"}>
        {children}
      </main>
    </>
  );
}

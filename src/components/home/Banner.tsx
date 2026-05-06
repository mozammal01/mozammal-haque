"use client";
import Image from "next/image";
import bannerImage from "@/../public/me/yellow-hoodie.png";
import { motion } from "framer-motion";
import { TypingAnimation } from "../ui/typing-animation";
import { TextAnimate } from "../ui/text-animate";
import { WordRotate } from "../ui/word-rotate";
import { Code2, Sparkles } from "lucide-react";
import { IconCloud } from "../ui/icon-cloud";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

const slugs = [
  "typescript", "javascript", "react", "nextdotjs", "nodedotjs", 
  "express", "mongodb", "prisma", "tailwindcss", "html5", "css3", 
  "framer", "git", "github", "vercel", "figma"
];
const iconUrls = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

export default function Banner() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#020817] pt-28 pb-10 lg:pt-0 lg:pb-0">
      
      {/* Dynamic Grid Background with Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Animated Light Orbs */}
      <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-primary/30 blur-[120px] rounded-full mix-blend-screen dark:mix-blend-lighten animate-pulse" />
      <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full mix-blend-screen dark:mix-blend-lighten animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] bg-purple-500/20 blur-[100px] rounded-full mix-blend-screen dark:mix-blend-lighten animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 pt-10 lg:pt-0">
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] backdrop-blur-xl cursor-pointer hover:bg-white dark:hover:bg-slate-800 transition-all"
            >
              <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </div>
              <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500 dark:from-slate-200 dark:to-slate-400">Available for new opportunities</span>
              <Sparkles className="w-4 h-4 text-yellow-500 group-hover:animate-spin" />
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4 relative">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-600 dark:text-slate-400 flex items-center justify-center lg:justify-start gap-3">
                <TypingAnimation>Hi There,</TypingAnimation> 
                <span className="animate-wave inline-block origin-[70%_70%] text-3xl">👋</span>
              </h3>
              <h1 className="text-[2.75rem] sm:text-6xl lg:text-[5rem] font-black tracking-tighter text-slate-900 dark:text-white leading-[1.05]">
                <TextAnimate animation="slideUp" by="character" once>
                  I'm Mozammal
                </TextAnimate>
                <div className="h-3 lg:h-1" />
                <span className="relative inline-block mt-2">
                  <span className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-purple-600 blur-xl opacity-20 dark:opacity-40 rounded-lg"></span>
                  <WordRotate 
                    className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-600 drop-shadow-sm pb-2"
                    words={["Full Stack Developer", "MERN Stack Expert", "UI/UX Enthusiast", "Web Innovator"]} 
                    duration={2500} 
                  />
                </span>
              </h1>
            </div>

            {/* Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
            >
              I build exceptional and accessible digital experiences for the web. Expert in crafting responsive, scalable, and visually stunning applications with modern technologies like React, Next.js, and Node.js.
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <InteractiveHoverButton 
                href="#projects" 
                className="w-[240px] h-[52px] bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:shadow-xl hover:shadow-primary/20 dark:hover:shadow-primary/20 border border-transparent hover:border-primary dark:hover:border-primary flex items-center justify-center [&>a]:w-full [&>a]:flex [&>a]:justify-center [&>a]:items-center"
              >
                View Projects
              </InteractiveHoverButton>
              
              <InteractiveHoverButton 
                href="https://drive.google.com/file/d/1JIU_ubgYXZYrIOR2pVUNnpBhknLcowLd/view?usp=sharing" 
                target="_blank"
                className="w-[240px] h-[52px] bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-primary flex items-center justify-center [&>a]:w-full [&>a]:flex [&>a]:justify-center [&>a]:items-center"
              >
                Download Resume
              </InteractiveHoverButton>
            </motion.div>
          </div>

          {/* Image Side with Icon Cloud */}
          <div className="lg:col-span-5 relative mt-20 lg:mt-0 flex justify-center lg:justify-end h-full min-h-[500px] lg:min-h-[650px] items-center lg:items-end pb-0">
            {/* 3D Icon Cloud behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[120%] aspect-square opacity-40 dark:opacity-60 pointer-events-auto z-0 cursor-move">
               <IconCloud icons={iconUrls} />
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="relative w-full max-w-[480px] z-10"
            >
              {/* Main Image */}
              <Image 
                src={bannerImage} 
                alt="Mozammal Haq - Full Stack Web Developer" 
                width={800} 
                height={800} 
                priority 
                className="w-full h-auto drop-shadow-[0_0_40px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] relative z-10 pointer-events-none"
              />
              
              {/* Glassmorphism Stats Card */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 -left-4 md:-left-12 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/40 dark:border-white/10 p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex gap-4"
              >
                <div className="flex flex-col items-center justify-center px-2">
                  <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-blue-600">10+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Projects Completed</p>
                </div>
              </motion.div>

              {/* Floating Decoration */}
              <motion.div 
                animate={{ y: [10, -10, 10], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 -right-4 md:-right-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-3 rounded-2xl border border-white/40 dark:border-white/10 shadow-xl z-20"
              >
                <Code2 className="w-7 h-7 text-primary" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center justify-center"
      >
        <div className="w-[30px] h-[50px] border-2 border-slate-300/80 dark:border-slate-600/80 rounded-full flex justify-center p-1 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce mt-1"></div>
        </div>
      </motion.div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes wave {
          0% { transform: rotate(0.0deg) }
          10% { transform: rotate(14.0deg) }
          20% { transform: rotate(-8.0deg) }
          30% { transform: rotate(14.0deg) }
          40% { transform: rotate(-4.0deg) }
          50% { transform: rotate(10.0deg) }
          60% { transform: rotate(0.0deg) }
          100% { transform: rotate(0.0deg) }
        }
        .animate-wave {
          animation: wave 2.5s infinite;
        }
      `}} />
    </section>
  );
}

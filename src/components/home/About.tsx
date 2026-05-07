"use client";
import Image from "next/image";
import aboutImage from "@/../public/me/black-t-shirt.png";
import AnimatedButton from "../animatedButton/AnimatedButton";
import { motion } from "framer-motion";
import { TextAnimate } from "../ui/text-animate";
import { Code2, GraduationCap, MapPin, User2 } from "lucide-react";
import PremiumCard from "../ui/PremiumCard";

export default function About() {
  return (
    <section id="about" className="w-full py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background decorations */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-900/20 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <TextAnimate animation="slideUp" by="word" className="text-primary font-bold tracking-wider uppercase mb-2 block">
            Discover
          </TextAnimate>
          <TextAnimate animation="slideUp" by="word" delay={0.1} className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white block">
            About Me
          </TextAnimate>
          <div className="w-24 h-1.5 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Side (Left on Desktop) */}
          <div className="lg:col-span-7 space-y-8 order-last lg:order-first">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6 leading-tight">
                I'm <span className="text-primary relative inline-block">Mozammal Haque
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                  </svg>
                </span>
                <br />a Passionate Web Developer
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Hello! I am an 18-year-old enthusiastic developer from Bangladesh. My journey in web development began in 2023 when I decided to turn my passion into a career. Starting with <strong className="text-primary font-bold">HTML & CSS</strong>, I have rapidly expanded my skill set.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Today, I am proficient in modern technologies including <strong className="text-primary font-bold">JavaScript, React, Next.js, Node.js, Express, and Prisma</strong>. I thrive on creating dynamic, responsive, and visually stunning web applications that deliver exceptional user experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <PremiumCard>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <User2 className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mb-1">Name</h4>
                    <p className="font-bold text-slate-800 dark:text-slate-200">Mozammal Haque</p>
                  </div>
                </div>
              </PremiumCard>
              
              <PremiumCard>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mb-1">Location</h4>
                    <p className="font-bold text-slate-800 dark:text-slate-200">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </PremiumCard>
              
              <PremiumCard>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mb-1">Education</h4>
                    <p className="font-bold text-slate-800 dark:text-slate-200 line-clamp-1" title="Govt. Adomjeenagar MW College">Govt. Adomjeenagar MW College</p>
                  </div>
                </div>
              </PremiumCard>
              
              <PremiumCard>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Code2 className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mb-1">Role</h4>
                    <p className="font-bold text-slate-800 dark:text-slate-200">Full Stack Web Developer</p>
                  </div>
                </div>
              </PremiumCard>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <AnimatedButton variant="rightToLeft" text="My Skills" href="#skills" />
              <AnimatedButton
                variant="leftToRight"
                text="My Resume"
                href="https://drive.google.com/file/d/1JIU_ubgYXZYrIOR2pVUNnpBhknLcowLd/view?usp=sharing"
                target="_blank"
              />
            </motion.div>
          </div>

          {/* Image Side (Right on Desktop) */}
          <div className="lg:col-span-5 relative order-first lg:order-last">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative rounded-3xl overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl bg-gradient-to-b from-slate-200/50 to-transparent dark:from-slate-800/50"
            >
              {/* Add an inner glow / overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <Image
                src={aboutImage}
                alt="Mozammal Haque"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 right-6 z-20 bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 p-5 rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                    <Code2 className="text-white w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-2xl">10+ Projects</p>
                    <p className="text-white/80 text-sm font-medium">Completed successfully</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative element behind image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2.5rem] -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}


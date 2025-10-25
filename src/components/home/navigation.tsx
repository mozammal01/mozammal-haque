"use client";
import logoWhite from "@/../public/logo/logo-white.png";
import logoBlack from "@/../public/logo/logo-black.png";  
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/navItems";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { TextAnimate } from "../ui/text-animate";

export default function Navigation() {

  return (
    <div className="relative">
      <div
        className={`md:flex hidden flex-col gap-4 justify-between items-center h-screen px-4 top-0 right-0 py-10 fixed bg-black/15 dark:bg-white/50 z-50`}
      >
        <Link href="#home">
          <div className="dark:hidden">
            <Image src={logoWhite} alt="Home" width={60} height={60} />
          </div>
          <div className="hidden dark:block">
            <Image src={logoBlack} alt="Home" width={60} height={60} />
          </div>
        </Link>
        <div className="flex flex-col gap-8">
          {navItems.map((icon, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link
                  href={icon.href}
                  className="hover:bg-[#ffc107] hover:text-black dark:hover:text-white transition-all scale-100 hover:scale-120 duration-300 rounded-full p-4 dark:text-black text-white font-extrabold"
                >
                  {icon.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <TextAnimate animation="slideLeft" by="word">
                  {icon.placeholder}
                </TextAnimate>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <div className="hover:bg-primary size-10 inline-flex items-center justify-center transition-all scale-100 hover:scale-110 duration-300 rounded-full">
          <AnimatedThemeToggler className={`text-white dark:text-black`} />
        </div>
      </div>
    </div>
  );
}

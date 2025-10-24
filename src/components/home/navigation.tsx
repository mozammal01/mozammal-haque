"use client";
import logoWhite from "@/../public/logo/logo-white.png";
import logoBlack from "@/../public/logo/logo-black.png";  
import Image from "next/image";
import Link from "next/link";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { House, Mail, User } from "lucide-react";
import { Brain } from "lucide-react";

import { Folder } from "lucide-react";

import { Server } from "lucide-react";

export default function Navigation() {
  const icons = [
    {
      id: 1,
      icon: <House size={25} />,
      href: "#home",
      placeholder: "Home",
    },
    {
      id: 2,
      icon: <User size={25} />,
      href: "#about",
      placeholder: "About",
    },
    {
      id: 3,
      icon: <Brain size={25} />,
      href: "#skills",
      placeholder: "Skills",
    },
    {
      id: 4,
      icon: <Folder size={25} />,
      href: "#projects",
      placeholder: "Projects",
    },
    {
      id: 5,
      icon: <Server size={25} />,
      href: "#services",
      placeholder: "Services",
    },
    {
      id: 6,
      icon: <Mail size={25} />,
      href: "#contact",
      placeholder: "Contact",
    },
  ];

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
          {icons.map((icon, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link
                  href={icon.href}
                  className="hover:bg-[#ffc107] hover:text-white transition-all scale-100 hover:scale-120 duration-300 rounded-full p-4 dark:text-black text-white font-extrabold"
                >
                  {icon.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{icon.placeholder}</p>
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

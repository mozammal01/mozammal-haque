"use client";
import logoWhite from "@/../public/logo/logo-white.png";
import logoBlack from "@/../public/logo/logo-black.png";
import ProjIcon from "@/../public/icons/navIcon/projects.png";
import HomeIcon from "@/../public/icons/navIcon/home.png";
import AboutIcon from "@/../public/icons/navIcon/about.png";
import ContIcon from "@/../public/icons/navIcon/contact.png";
import ServIcon from "@/../public/icons/navIcon/services.png";
import BlogsIcon from "@/../public/icons/navIcon/blogs.png";
import Image from "next/image";
import Link from "next/link";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";

export default function Navigation() {
  const icons = [
    {
      id: 1,
      icon: HomeIcon,
      href: "#home",
      placeholder: "Home",
    },
    {
      id: 2,
      icon: AboutIcon,
      href: "#about",
      placeholder: "About",
    },
    {
      id: 3,
      icon: BlogsIcon,
      href: "#skills",
      placeholder: "Skills",
    },
    {
      id: 4,
      icon: ProjIcon,
      href: "#projects",
      placeholder: "Projects",
    },
    {
      id: 5,
      icon: ServIcon,
      href: "#services",
      placeholder: "Services",
    },
    {
      id: 6,
      icon: ContIcon,
      href: "#contact",
      placeholder: "Contact",
    },
  ];

  return (
    <div className="relative">
      <div
        className={`md:flex hidden flex-col gap-4 justify-between items-center h-screen px-4 top-0 right-0 py-10 fixed bg-black/15 dark:bg-white/50 z-50`}
      >
        <div>
          <div className="dark:hidden">
            <Image src={logoWhite} alt="Home" width={60} height={60} />
          </div>
          <div className="hidden dark:block">
            <Image src={logoBlack} alt="Home" width={60} height={60} />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {icons.map((icon, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Link
                  href={icon.href}
                  className="hover:bg-[#ffc107] hover:text-white transition-all scale-100 hover:scale-120 duration-300 rounded-full p-4"
                >
                  <Image src={icon.icon} alt={icon.placeholder} width={20} height={20} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{icon.placeholder}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <div className="hover:bg-primary size-10 inline-flex items-center justify-center transition-all scale-100 hover:scale-110 duration-300 rounded-full">
          <AnimatedThemeToggler className={`text-black`} />
        </div>
      </div>
    </div>
  );
}

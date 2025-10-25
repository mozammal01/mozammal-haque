"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { navItems } from "@/data/navItems";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/40 dark:bg-black/40 backdrop-blur-md shadow-sm z-50">
      <div className="flex flex-row-reverse items-center justify-between px-4 py-3">
        {/* Logo */}
        <AnimatedThemeToggler className={`text-black dark:text-white`} />

        {/* Toggle Button */}
        <div className="flex items-center gap-4">
          <button onClick={() => setOpen(!open)} className="p-2 rounded-md hover:bg-white/60 dark:hover:bg-black/40 transition">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <Link href="/" className="font-bold text-lg text-gray-900">
            <Image src="/logo/logo.png" alt="Logo" width={50} height={50} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white/90 dark:bg-black/90 dark:text-white text-black font-bold shadow-md transition-all duration-600 ease-in-out ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col p-2 py-6 space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href} onClick={() => setOpen(false)} className="block hover:text-primary hover:font-extrabold scale-100 hover:scale-102 transition-all duration-300 ease-in-out">
                {item.placeholder}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

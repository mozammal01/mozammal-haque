"use client";
import logo from "@/../public/logo/logo.png";
import ProjIcon from "@/../public/icons/navIcon/projects.png";
import HomeIcon from "@/../public/icons/navIcon/home.png";
// import EduIcon from "@/../public/icons/navIcon/education.png";
import AboutIcon from "@/../public/icons/navIcon/about.png";
import ContIcon from "@/../public/icons/navIcon/contact.png";
// import PortIcon from "@/../public/icons/navIcon/portfolio.png";
import ServIcon from "@/../public/icons/navIcon/services.png";
import BlogsIcon from "@/../public/icons/navIcon/blogs.png";
import Image from "next/image";
import { useEffect } from "react";

export default function Navigation() {
  useEffect(() => {
    const home = document.getElementById("skills") as HTMLElement;
    console.log(home);
  }, []);

  const icons = [
    {
      icon: HomeIcon,
      href: "/",
    },
    {
      icon: AboutIcon,
      href: "/about",
    },
    {
      icon: ProjIcon,
      href: "/projects",
    },
    {
      icon: ServIcon,
      href: "/services",
    },
    {
      icon: BlogsIcon,
      href: "/blogs",
    },
    {
      icon: ContIcon,
      href: "/contact",
    },
  ];
  return (
    <div
      className={`flex flex-col gap-4 justify-between items-center h-screen bg-transparent px-4 fixed top-0 right-0 py-10 border-l-8 border-white `}
    >
      <div>
        <Image src={logo} alt="Home" width={60} height={60} />
      </div>
      <div className="flex flex-col gap-2">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="hover:bg-[#ffc107] hover:text-white transition-all scale-100 hover:scale-120 duration-300 rounded-full p-4"
          >
            <Image src={icon.icon} alt={icon.href} width={20} height={20} />
          </div>
        ))}
      </div>
      <div>
        <Image src={logo} alt="Home" width={60} height={60} />
      </div>
    </div>
  );
}

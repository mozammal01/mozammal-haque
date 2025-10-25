import { Brain, Folder, House, Mail, Server, User } from "lucide-react";

export const navItems = [
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
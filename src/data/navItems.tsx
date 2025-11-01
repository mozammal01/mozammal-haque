import { Brain, Folder, House, Mail, Server, User } from "lucide-react";

export const navItems = [
  {
    id: 1,
    icon: <House size={25} />,
    hrefAnchor: "#home",
    hrefLink: "/",
    placeholder: "Home",
  },
  {
    id: 2,
    icon: <User size={25} />,
    hrefAnchor: "#about",
    hrefLink: "/#about",
    placeholder: "About",
  },
  {
    id: 3,
    icon: <Brain size={25} />,
    hrefAnchor: "#skills",
    hrefLink: "/#skills",
    placeholder: "Skills",
  },
  {
    id: 4,
    icon: <Folder size={25} />,
    hrefAnchor: "#projects",
    hrefLink: "/#projects",
    placeholder: "Projects",
  },
  {
    id: 5,
    icon: <Server size={25} />,
    hrefAnchor: "#services",
    hrefLink: "/#services",
    placeholder: "Services",
  },
  {
    id: 6,
    icon: <Mail size={25} />,
    hrefAnchor: "#contact",
    hrefLink: "/#contact",
    placeholder: "Contact",
  },
  ];
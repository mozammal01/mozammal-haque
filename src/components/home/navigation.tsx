import { Home } from "lucide-react";
import AboutIcon from "../icons/aboutIcon";
import EduIcon from "../icons/eduIcon";

export default function Navigation() {
  const icons = [
    {
      icon: <Home size={20} />,
      href: "/",
    },
    {
      icon: <AboutIcon size={20} />,
      href: "/about",
    },
    {
      icon: <EduIcon size={20} />,
      href: "/edu",
    },
    {
      icon: <EduIcon size={20} />,
      href: "/edu",
    },
    {
      icon: <EduIcon size={20} />,
      href: "/edu",
    },
  ];
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg-amber-50 px-4 fixed top-0 right-0">
      {icons.map((icon, index) => (
        <div key={index} className="bg-white rounded-full p-4">
          {icon.icon} 
        </div>
        ))}
      </div>
  );
}

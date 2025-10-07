import logo from "@/../public/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import LeftSliderMotion from "../animation/LeftSliderMotion";
import ShutterMotion from "../animation/ShutterMotion";
import FooterContact from "../footerContact/FooterContact";
export default function Footer() {
  return (
    <div className="bg-amber-50 py-10 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between flex-col 2xl:flex-row gap-10">
          {/* Left Side */}

          <LeftSliderMotion className="flex flex-col gap-4 px-4">
            <div className="min-xl:mx-auto">
              <Image src={logo} alt="logo" width={60} height={60} />
            </div>
            <h3 className="text-2xl font-bold text-primary uppercase">Mozammal Haq</h3>
            <h4 className="text-lg font-semibold uppercase">Web Developer</h4>
            <p>© 2025 Mozammal Haque</p>
          </LeftSliderMotion>
          {/* Left Middle Side */}
          <ShutterMotion className="flex flex-col gap-4 px-4 ">
            <h3 className="text-2xl font-bold text-primary uppercase">Sections</h3>
            <div className="flex flex-col gap-2 font-semibold">
              <Link href="#home" className="hover:text-primary hover:scale-105 duration-300">
                Home
              </Link>
              <Link href="#about" className="hover:text-primary hover:scale-105 duration-300">
                About
              </Link>
              <Link href="#skills" className="hover:text-primary hover:scale-105 duration-300">
                Skills
              </Link>
              <Link href="#projects" className="hover:text-primary hover:scale-105 duration-300">
                Projects
              </Link>
              <Link href="#services" className="hover:text-primary hover:scale-105 duration-300">
                Services
              </Link>
            </div>
          </ShutterMotion>
          {/* Right Middle Side */}
          <ShutterMotion className="flex flex-col gap-4 px-4">
            <h3 className="text-2xl font-bold text-primary uppercase">Services</h3>
            <div className="flex flex-col gap-2 font-semibold">
              <p>Web Development</p>
              <p>Front End Development</p>
              <p>Back End Development</p>
              <p>Full Stack Development</p>
            </div>
          </ShutterMotion>
          {/* Right Side */}
          <FooterContact />
        </div>
      </div>
    </div>
  );
}

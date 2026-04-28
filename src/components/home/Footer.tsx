import logo from "@/../public/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import LeftSliderMotion from "../animation/LeftSliderMotion";
import ShutterMotion from "../animation/ShutterMotion";
import FooterContact from "../footerContact/FooterContact";
import { TextAnimate } from "../ui/text-animate";
import { HyperText } from "../ui/hyper-text";
export default function Footer() {
  return (
    <footer className="w-full relative bg-amber-50 dark:bg-gradient-to-b dark:from-[#000000] dark:to-[#020617] py-16 border-t border-black/5 dark:border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Left Side */}

          <LeftSliderMotion className="flex flex-col gap-4 px-4">
            <div className="">
              <Image src={logo} alt="Mozammal Haq Logo - Full Stack Web Developer" width={60} height={60} />
            </div>
            <h3 className="text-2xl font-bold text-primary uppercase">
              <HyperText className="text-3xl">Mozammal Haq</HyperText>
            </h3>
            <h4 className="text-lg font-semibold uppercase">
              <TextAnimate animation="slideLeft" by="word" delay={0.2}>
                Web Developer
              </TextAnimate>
            </h4>
            <div>
              <TextAnimate animation="slideLeft" by="word" delay={0.3}>
                © 2025 Mozammal Haque
              </TextAnimate>
            </div>
          </LeftSliderMotion>
          {/* Left Middle Side */}
          <ShutterMotion className="flex flex-col gap-4 px-4 ">
            <h3 className="text-2xl font-bold text-primary uppercase">Sections</h3>
            <div className="flex flex-col gap-2 font-semibold">
              <Link href="#home" className="hover:text-primary hover:scale-105 duration-300">
                <TextAnimate animation="slideLeft" by="word" delay={0.6}>
                  Home
                </TextAnimate>
              </Link>
              <Link href="#about" className="hover:text-primary hover:scale-105 duration-300">
                <TextAnimate animation="slideLeft" by="word" delay={0.8}>
                  About
                </TextAnimate>
              </Link>
              <Link href="#skills" className="hover:text-primary hover:scale-105 duration-300">
                <TextAnimate animation="slideLeft" by="word" delay={1}>
                  Skills
                </TextAnimate>
              </Link>
              <Link href="#projects" className="hover:text-primary hover:scale-105 duration-300">
                <TextAnimate animation="slideLeft" by="word" delay={1.2}>
                  Projects
                </TextAnimate>
              </Link>
              <Link href="#services" className="hover:text-primary hover:scale-105 duration-300">
                <TextAnimate animation="slideLeft" by="word" delay={1.4}>
                  Services
                </TextAnimate>
              </Link>
            </div>
          </ShutterMotion>
          {/* Right Middle Side */}
          <ShutterMotion className="flex flex-col gap-4 px-4">
            <h3 className="text-2xl font-bold text-primary uppercase">Services</h3>
            <div className="flex flex-col gap-2 font-semibold">
              <TextAnimate animation="slideLeft" by="line" delay={1.4}>
                Web Development
              </TextAnimate>
              <TextAnimate animation="slideLeft" by="line" delay={1.6}>
                Front End Development
              </TextAnimate>
              <TextAnimate animation="slideLeft" by="line" delay={1.8}>
                Back End Development
              </TextAnimate>
              <TextAnimate animation="slideLeft" by="line" delay={2}>
                Full Stack Development
              </TextAnimate>
            </div>
          </ShutterMotion>
          {/* Right Side */}
          <FooterContact />
        </div>
      </div>
    </footer>
  );
}

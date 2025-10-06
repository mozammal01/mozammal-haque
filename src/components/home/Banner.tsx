"use client";
import Image from "next/image";
import bannerImage from "@/../public/me/yellow-hoodie.png";
import { TypeAnimation } from "react-type-animation";
import AnimatedButton from "../animatedButton/AnimatedButton";
import ZoomOutMotion from "../animation/ZoomOutMotion";
import ShutterCloseMotion from "../animation/ShutterCloseMotion";
import { TypingAnimation } from "../ui/typing-animation";
import { TextAnimate } from "../ui/text-animate";

export default function Banner() {
  return (
    <div className="h-screen flex items-center relative lg:justify-end text-black " id="home">
      {/* Image */}
      <ZoomOutMotion className="absolute hidden 2xl:block bottom-0 -left-40">
        <Image src={bannerImage} alt="Banner" width={800} height={500} className="" />
      </ZoomOutMotion>
      {/* Text */}
      <ShutterCloseMotion className="flex flex-col gap-4 2xl:w-1/2 space-y-4">
        <h3 className="text-3xl font-bold text-primary uppercase">
          <TypingAnimation>Hi There ,</TypingAnimation>
        </h3>
        <h1 className="text-6xl font-bold">
          <TextAnimate animation="blurInUp" by="character" once>
            I am Mozammal Haq
          </TextAnimate>
        </h1>
        <div className="md:block hidden">
          <TypeAnimation
            sequence={["Front End Development", 1000, "Full Stack Developer", 1000, "Mearn Stack Developer", 1000]}
            wrapper="span"
            speed={50}
            className="text-primary font-bold uppercase"
            style={{ fontSize: "2em", display: "inline-block", width: "100%" }}
            repeat={Infinity}
          />
        </div>
        <TextAnimate animation="slideUp" by="word"  className="text-lg w-4/5 font-semibold">
          Passionate junior web developer skilled in React, Next.js, TypeScript, and Tailwind. Focused on creating responsive, modern, and
          user-friendly websites with clean code, seamless performance, and creative problem-solving.
        </TextAnimate>

        <AnimatedButton
          target="_blank"
          variant="topToBottom"
          text="My Resume"
          href="https://drive.google.com/file/d/1JXgJwpPaL8zN6Wb6G-DYOyAfIBF24jPS/view?usp=drive_link"
        />
      </ShutterCloseMotion>
    </div>
  );
}

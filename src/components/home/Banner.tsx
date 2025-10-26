"use client";
import Image from "next/image";
import bannerImage from "@/../public/me/yellow-hoodie.png";
import AnimatedButton from "../animatedButton/AnimatedButton";
import ZoomOutMotion from "../animation/ZoomOutMotion";
import ShutterCloseMotion from "../animation/ShutterCloseMotion";
import { TypingAnimation } from "../ui/typing-animation";
import { TextAnimate } from "../ui/text-animate";
import { WordRotate } from "../ui/word-rotate";

export default function Banner() {
  return (
    <div className="h-screen flex items-center relative lg:justify-end text-black " id="home">
      {/* Image */}
      <ZoomOutMotion className="absolute hidden 2xl:block bottom-0 left-0">
        <Image src={bannerImage} alt="Mozammal Haq - Full Stack Web Developer" width={800} height={500} priority />
      </ZoomOutMotion>
      {/* Text */}
      <ShutterCloseMotion className="flex flex-col gap-4 2xl:w-1/2 space-y-4 px-4">
        <h3 className="xl:text-3xl text-2xl font-bold text-primary uppercase">
          <TypingAnimation>Hi There ,</TypingAnimation>
        </h3>
        <h1 className="2xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold">
          <TextAnimate animation="slideLeft" by="character" once>
            I am Mozammal Haq
          </TextAnimate>
        </h1>

        <WordRotate className="xl:text-4xl md:text-3xl text-2xl font-bold text-primary uppercase" words={["Front End Developer", "Full Stack Developer", "Mern Stack Developer"]} duration={1500} />

        <TextAnimate animation="slideLeft" by="word" className="text-lg w-4/5 font-semibold">
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

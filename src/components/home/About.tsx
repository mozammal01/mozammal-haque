"use client";
import Image from "next/image";
import aboutImage from "@/../public/me/black-t-shirt.png";
import AnimatedButton from "../animatedButton/AnimatedButton";
import ZoomOutMotion from "../animation/ZoomOutMotion";
import { TextAnimate } from "../ui/text-animate";

export default function About() {
  return (
    <div id="about" className="my-20 lg:flex items-center justify-center container mx-auto px-4">
      <div className="lg:w-1/2 w-full space-y-6 text-foreground">
        <TextAnimate animation="slideLeft" by="character" delay={0.1} once className="xl:text-3xl text-2xl font-bold text-primary uppercase">
          About Me
        </TextAnimate>
        <TextAnimate animation="slideLeft" by="character" once delay={0.2} className="2xl:text-5xl md:text-4xl text-3xl font-bold">
          Who I am ?
        </TextAnimate>
        <TextAnimate animation="slideLeft" by="character" delay={0.3} once className="xl:text-3xl text-2xl font-bold">
          I am a JR. Web Developer
        </TextAnimate>
        <div className="text-lg w-4/5 space-y-4">
          <TextAnimate animation="slideLeft" by="character" delay={0.5} once>
            Hello, My name is Mozammal Haque. I am 18 years old. I live in Bangladesh. I am graduated from Government Adomjeenagar MW
            collage in Narayongonj,Bangladesh
          </TextAnimate>
          <TextAnimate animation="slideLeft" by="character" delay={0.7} once>
            My interest in web development started in 2023 when I decided to do web development as my career— First i started with HTML &
            CSS. Now i am proficient in HTML, CSS, JavaScript, and familiar with React, NextJS, Node.js, expressJS, mongoDB.
          </TextAnimate>
        </div>

        <div className="flex gap-4 mt-12">
          <AnimatedButton variant="rightToLeft" text="My Skills" href="#skills" />

          <AnimatedButton
            variant="leftToRight"
            text="My Resume"
            href="https://drive.google.com/file/d/1JXgJwpPaL8zN6Wb6G-DYOyAfIBF24jPS/view?usp=drive_link"
            target="_blank"
          />
        </div>
      </div>
      <ZoomOutMotion className="w-1/2 hidden lg:block">
        <Image src={aboutImage} alt="Mozammal Haq - Web Developer Portrait" width={800} height={500} />
      </ZoomOutMotion>
    </div>
  );
}

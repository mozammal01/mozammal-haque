"use client";
import Image from "next/image";
import bannerImage from "@/../public/me/yellow-hoodie.png";
import { TypeAnimation } from "react-type-animation";
import { Button } from "../ui/button";

export default function Banner() {
  return (
    <div className="h-screen flex items-center relative lg:justify-end">
      {/* Image */}
      <div className="absolute hidden 2xl:block bottom-0 -left-40">
        <Image src={bannerImage} alt="Banner" width={800} height={500} />
      </div>
      {/* Text */}
      <div className="flex flex-col gap-4 2xl:w-1/2 space-y-4">
        <h3 className="text-3xl font-bold text-primary uppercase">Hi There ,</h3>
        <h1 className="text-6xl font-bold">I am Mozammal Haq</h1>
        <TypeAnimation
          sequence={["Front End Development", 1000, "Full Stack Developer", 1000, "Mearn Stack Developer", 1000]}
          wrapper="span"
          speed={50}
          className="text-primary font-bold uppercase"
          style={{ fontSize: "2em", display: "inline-block", width: "100%" }}
          repeat={Infinity}
        />
        <p className="text-lg w-4/5 font-semibold">
          Passionate junior web developer skilled in React, Next.js, TypeScript, and Tailwind. Focused on creating responsive, modern, and
          user-friendly websites with clean code, seamless performance, and creative problem-solving.
        </p>
        <a href="https://drive.google.com/file/d/1RsoK-SaMvjAXV7So2w7KzjzKfIs9JvyU/view" target="_blank">
          <Button className="hover:bg-amber-400 font-bold">My Resume</Button>
        </a>
      </div>
    </div>
  );
}

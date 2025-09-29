"use client";
import Image from "next/image";
import bannerImage from "@/../public/me/yellow-hoodie.png";
import { TypeAnimation } from 'react-type-animation';

export default function Banner() {
  return (
    <div className="h-screen flex items-center">
      {/* Image */}
      <div className="-mt-46">
        <Image src={bannerImage} alt="Banner" width={800} height={500} />
      </div>
      {/* Text */}
      <div className="flex flex-col gap-4 w-1/2 space-y-4">
        <h3 className="text-3xl font-bold text-primary uppercase">Hi There ,</h3>
        <h1 className="text-6xl font-bold">I am Mozammal Haq</h1>
        <TypeAnimation
            sequence={[
              'Front End Development',
              1000,
              'Full Stack Developer',
              1000,
              'Mearn Stack Developer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            className="text-primary font-bold uppercase"
            style={{ fontSize: '2em', display: 'inline-block', width: '100%' }}
            repeat={Infinity}
          />
        <p className="text-lg w-4/5 font-semibold">
        Passionate junior web developer skilled in React, Next.js, TypeScript, and Tailwind. Focused on creating responsive, modern, and user-friendly websites with clean code, seamless performance, and creative problem-solving.
        </p>
      </div>
    </div>
  );
}
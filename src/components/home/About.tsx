import Image from "next/image";
import aboutImage from "@/../public/me/black-t-shirt.png";
import { Button } from "../ui/button";
import Link from "next/link";

export default function About() {
  return (
    <div className="my-20 lg:flex items-center justify-center container mx-auto px-4">
      <div className="lg:w-1/2 w-full space-y-6">
        <h3 className="text-3xl font-bold text-primary uppercase">About Me</h3>
        <h2 className="text-5xl font-bold">Who I am ?</h2>
        <h2 className="text-3xl font-bold">I am a JR. Web Developer</h2>
        <div className="text-lg w-4/5 space-y-4">
          <p>
            Hello, My name is <span className="font-semibold">Mozammal Haq</span>. I am 18 years old. I live in Bangladesh. I am graduated from Government
            Adomjeenagar MW collage in Narayongonj,Bangladesh
          </p>
          <p>
            My interest in web development started in 2023 when I decided to do web development as my career— First i started with HTML &
            CSS. Now i am proficient in HTML, CSS, JavaScript, and familiar with React, NextJS, Node.js, expressJS, mongoDB.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="#skills">
            <Button className="hover:bg-amber-400 font-bold">My Skills</Button>
          </Link>
          <a href="https://drive.google.com/file/d/1RsoK-SaMvjAXV7So2w7KzjzKfIs9JvyU/view" target="_blank">
            <Button className="hover:bg-amber-400 font-bold">My Resume</Button>
          </a>
        </div>
      </div>
      <div className="w-1/2 hidden lg:block">
        <Image src={aboutImage} alt="About" width={800} height={500} />
      </div>
    </div>
  );
}

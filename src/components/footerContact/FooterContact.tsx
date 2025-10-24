"use client";
import Link from "next/link";
import { social } from "@/data/social";
import RightSliderMotion from "../animation/RightSliderMotion";
import { TextAnimate } from "../ui/text-animate";
export default function FooterContact() {
  return (
    <RightSliderMotion className="flex flex-col gap-4 px-4">
      <h3 className="text-2xl font-bold text-primary uppercase">Contact</h3>
      <div className="flex flex-col gap-2 font-semibold">
        <Link href="tel:+8801846581810" className="hover:text-primary hover:scale-105 duration-300">
          <TextAnimate animation="slideLeft" by="word" delay={1}>
            +8801846581810
          </TextAnimate>
        </Link>
        <Link href="mailto:mozammalhaq01@gmail.com" className="hover:text-primary hover:scale-105 duration-300">
          <TextAnimate animation="slideLeft" by="word" delay={1.5}>
            mozammalhaq01@gmail.com
          </TextAnimate>
        </Link>
        <div className="grid grid-cols-4 gap-2 mt-4 max-xl:mx-10">
          {social.map((icon) => (
            <Link
              key={icon.id}
              href={icon.href}
              className=" scale-95 hover:scale-110 duration-300 bg-primary size-10 rounded flex items-center justify-center"
            >
              <icon.icon className="text-white" />
            </Link>
          ))}
        </div>
      </div>
    </RightSliderMotion>
  );
}

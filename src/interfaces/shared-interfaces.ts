import { SVGProps } from "react";
import { StaticImageData } from "next/image";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export interface AnimatedButtonProps {
  variant?: "leftToRight" | "primary" | "outline" | "rightToLeft" | "leftToRightBottom" | "rightToLeftBottom" | "rotateRight" | "rotateLeft" | "upToDown" | "downToUp" | "topToBottom" | "bottomToTop";
  text: string;
  href: string;
  className?: string;
  target?: string;
}

export interface Project {
  id: number;
  name: string;
  image: StaticImageData;
  sourceCode: string;
  visitNow: string;
}

export interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
  icon: string;
  iconImage: StaticImageData;
}

export interface Skill {
  id: number;
  name: string;
  img: boolean;
  icon: StaticImageData | React.ComponentType<IconProps>;
  className: string;
}

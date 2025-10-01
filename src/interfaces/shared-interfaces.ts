import { SVGProps } from "react";
import { StaticImageData } from "next/image";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export interface AnimatedButtonProps {
  outline?: boolean;
  primary?: boolean;
  text: string;
  href: string;
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

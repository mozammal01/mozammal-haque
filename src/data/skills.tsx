import DaisyIcon from "@/components/icons/daisyIcon";
import ShadcnIcon from "@/components/icons/shadcnIcon";
import SwiperIcon from "@/components/icons/swiperIcon";
import VercelIcon from "@/components/icons/vercelIcon";
import { Skill } from "@/interfaces/shared-interfaces";
import firebaseImg from "@/../public/skills/firebase.png";
import formikImg from "@/../public/skills/formik.png";
import nextjsImg from "@/../public/skills/nextjs.png";
import reactImg from "@/../public/skills/react.png";
import tailwindImg from "@/../public/skills/tailwindcss.png";
import typescriptImg from "@/../public/skills/ts.png";
import cssImg from "@/../public/skills/css.png";
import htmlImg from "@/../public/skills/html.png";
import bootstrapImg from "@/../public/skills/bootstrap.png";
import figmaImg from "@/../public/skills/figma.png";
import gitImg from "@/../public/skills/git.png";
import jsImg from "@/../public/skills/js.png";
import materialUiImg from "@/../public/skills/material.png";
import mongoDbImg from "@/../public/skills/mongodb.png";
import nodeJsImg from "@/../public/skills/nodejs.png";

export const skills: Skill[] = [
  {
    id: 1,
    name: "React",
    img: true,
    icon: reactImg,
    className: "animate-spin-slow",
  },
  {
    id: 2,
    name: "NextJS",
    img: true,
    icon: nextjsImg,
    className: "",
  },
  {
    id: 3,
    name: "Typescript",
    img: true,
    icon: typescriptImg,
    className: "",
  },
  {
    id: 4,
    name: "JavaScript",
    img: true,
    icon: jsImg,
    className: "",
  },
  {
    id: 5,
    name: "Shadcn",
    img: false,
    icon: ShadcnIcon,
    className: "",
  },
  {
    id: 6,
    name: "Vercel",
    img: false,
    icon: VercelIcon,
    className: "",
  },
  {
    id: 7,
    name: "Swiper",
    img: false,
    icon: SwiperIcon,
    className: "",
  },
  {
    id: 8,
    name: "Firebase",
    img: true,
    icon: firebaseImg,
    className: "",
  },
  {
    id: 9,
    name: "Formik",
    img: true,
    icon: formikImg,
    className: "",
  },

  {
    id: 10,
    name: "TailwindCSS",
    img: true,
    icon: tailwindImg,
    className: "",
  },
  {
    id: 11,
    name: "CSS3",
    img: true,
    icon: cssImg,
    className: "",
  },
  {
    id: 12,
    name: "HTML5",
    img: true,
    icon: htmlImg,
    className: "",
  },
  {
    id: 13,
    name: "Bootstrap",
    img: true,
    icon: bootstrapImg,
    className: "",
  },
  {
    id: 14,
    name: "Figma",
    img: true,
    icon: figmaImg,
    className: "",
  },
  {
    id: 15,
    name: "Git",
    img: true,
    icon: gitImg,
    className: "",
  },
  {
    id: 16,
    name: "Material UI",
    img: true,
    icon: materialUiImg,
    className: "",
  },
  {
    id: 17,
    name: "MongoDB",
    img: true,
    icon: mongoDbImg,
    className: "",
  },
  {
    id: 18,
    name: "NodeJS",
    img: true,
    icon: nodeJsImg,
    className: "",
  },
  {
    id: 19,
    name: "DaisyUI",
    img: false,
    icon: DaisyIcon,
    className: "",
  },
];

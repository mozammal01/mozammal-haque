"use client";
import DaisyIcon from "../icons/daisyIcon";
import ShadcnIcon from "../icons/shadcnIcon";
import SwiperIcon from "../icons/swiperIcon";
import Image from "next/image";
import firebaseImg from "@/../public/skills/firebase.png";
import formikImg from "@/../public/skills/formik.png";
import nextjsImg from "@/../public/skills/nextjs.png";
// import reactImg from "@/../public/skills/react.png";
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
import VercelIcon from "../icons/vercelIcon";
import { useState } from "react";

export default function Skills() {
  const [hoveredId, setHoveredId] = useState(0);
  const handleHover = (id: number) => {
    setHoveredId(id);
  };
  const languages = [
    {
      name: "Bangla",
      level: "Fluent",
    },
    {
      name: "English",
      level: "Fairly",
    },
    {
      name: "Hindi",
      level: "Conversational",
    },
  ];
  const skills = [
    {
      id: 1,
      name: "DaisyUI",
      img: false,
      icon: <DaisyIcon size={100} />,
    },

    {
      id: 2,
      name: "Shadcn",
      img: false,
      icon: <ShadcnIcon size={100} />,
    },
    {
      id: 3,
      name: "Swiper",
      img: false,
      icon: <SwiperIcon size={100} />,
    },
    {
      id: 4,
      name: "NextJS",
      img: false,
      icon: <Image src={nextjsImg} alt="NextJS" width={100} height={100} />,
    },
    {
      id: 5,
      name: "Vercel",
      img: false,
      icon: <VercelIcon size={100} />,
    },
    {
      id: 6,
      name: "Firebase",
      img: true,
      icon: <Image src={firebaseImg} alt="Firebase" width={100} height={100} />,
    },
    {
      id: 7,
      name: "Formik",
      img: true,
      icon: <Image src={formikImg} alt="Formik" width={100} height={100} />,
    },
    {
      id: 8,
      name: "TailwindCSS",
      img: true,
      icon: <Image src={tailwindImg} alt="TailwindCSS" width={100} height={100} />,
    },
    {
      id: 9,
      name: "Typescript",
      img: true,
      icon: <Image src={typescriptImg} alt="Typescript" width={100} height={100} />,
    },
    {
      id: 10,
      name: "CSS3",
      img: true,
      icon: <Image src={cssImg} alt="CSS3" width={100} height={100} />,
    },
    {
      id: 11,
      name: "HTML5",
      img: true,
      icon: <Image src={htmlImg} alt="HTML5" width={100} height={100} />,
    },
    {
      id: 12,
      name: "Bootstrap",
      img: true,
      icon: <Image src={bootstrapImg} alt="Bootstrap" width={100} height={100} />,
    },
    {
      id: 13,
      name: "Figma",
      img: true,
      icon: <Image src={figmaImg} alt="Figma" width={100} height={100} />,
    },
    {
      id: 14,
      name: "Git",
      img: true,
      icon: <Image src={gitImg} alt="Git" width={100} height={100} />,
    },
    {
      id: 15,
      name: "JavaScript",
      img: true,
      icon: <Image src={jsImg} alt="JavaScript" width={100} height={100} />,
    },
    {
      id: 16,
      name: "Material UI",
      img: true,
      icon: <Image src={materialUiImg} alt="Material UI" width={100} height={100} />,
    },
    {
      id: 17,
      name: "MongoDB",
      img: true,
      icon: <Image src={mongoDbImg} alt="MongoDB" width={100} height={100} />,
    },
    {
      id: 18,
      name: "NodeJS",
      img: true,
      icon: <Image src={nodeJsImg} alt="NodeJS" width={100} height={100} />,
    },
  ];

  return (
    <div id="skills" className="my-20 container mx-auto px-4">
      <div className="space-y-4 my-10 ">
        <h2 className="text-3xl font-bold text-primary uppercase">Languages</h2>
        <div className="flex flex-col lg:flex-row gap-10">
          {languages.map((language, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-amber-50 rounded p-10 xl:w-[500px] w-full hover:scale-105 hover:shadow-lg duration-300"
            >
              <p className="text-2xl font-bold">{language.name}</p>
              <span className="text-xl font-bold text-primary">({language.level})</span>
            </div>
          ))}
        </div>
      </div>
      {/* Skills */}
      <div className="space-y-4 my-10 ">
        <h2 className="text-3xl font-bold text-primary uppercase">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
          {skills.map((skill, index) => (
            <div
              onMouseEnter={() => handleHover(skill.id)}
              onMouseLeave={() => handleHover(0)}
              key={index}
              className="flex flex-col justify-center items-center mx-auto gap-2 bg-amber-50 rounded p-10 w-[250px] h-[250px] hover:scale-105 hover:shadow-md shadow-primary duration-300"
            >
              {hoveredId === skill.id ? (
                <div className="scale-120 duration-300 flex flex-col justify-center items-center">
                  {skill.icon}
                  <span className="text-2xl font-bold text-transparent duration-300">{skill.name}</span>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center">
                  {skill.icon}
                  <span className="text-2xl font-bold text-black duration-300">{skill.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

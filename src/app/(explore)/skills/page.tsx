import { IconCloud } from "@/components/ui/icon-cloud";
import DetailsHeader from "@/components/detailsHeader/DetailsHeader";
import Skills from "@/components/home/Skills";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Technical Skills & Expertise",
  description:
    "Comprehensive overview of my technical skills and expertise including React, Next.js, TypeScript, JavaScript, Node.js, Express.js, MongoDB, Tailwind CSS, Material UI, Git, Firebase, and more web development technologies.",
  keywords: [
    "React skills",
    "Next.js expertise",
    "TypeScript developer",
    "MERN stack skills",
    "web development skills",
    "frontend skills",
    "backend skills",
  ],
  openGraph: {
    title: "Technical Skills & Expertise - Mozammal Haq",
    description:
      "Comprehensive overview of my technical skills including React, Next.js, TypeScript, Node.js, and modern web development technologies.",
  },
};

const images = [
  "https://res.cloudinary.com/mozammal01/image/upload/v1759567662/skills/nextjs_tutftu.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759567663/skills/tailwindcss_mixpse.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759567663/skills/mongodb_yzchbx.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759567663/skills/ts_g3xzcl.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759567663/skills/react_p7hhqt.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759567663/skills/nodejs_c3xn4m.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759567662/skills/material_dh3jzu.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759567662/skills/js_khg1jh.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759567662/skills/git_xlqf1i.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759567662/skills/html_azt7u2.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759567662/skills/figma_own52t.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759567661/skills/css_oiollt.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759567661/skills/bootstrap_dmqoxo.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759567661/skills/formik_vdoe1d.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759567661/skills/firebase_u4aiia.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759568451/swiper-logo_hfijfk.svg",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759568452/vite_jkaj6z.svg",
  "https://res.cloudinary.com/mozammal01/image/upload/v1759568452/vercel_sl8pcw.svg",
  "https://res.cloudinary.com/mozammal01/image/upload/v1761630850/eslint_fjvqow.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1761630850/framerMotion_j2cmja.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1761630851/vite_s16wvp.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1761630850/lucideReact_ejjiic.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1761630850/sweetAlert_o09wss.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1761630850/nextjs_qd9ndr.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1761630850/magicUI_o9tjyx.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1761630849/heroUI_pkh25n.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1761630849/daisyUI_b42kkz.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1761630849/icons8_hum5th.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1761630849/reactForm_vpmcpg.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1761630848/shadcn_tgea8y.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1761630849/swiper_ccnktq.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1761630849/reactDom_j6jlki.png",
  "https://res.cloudinary.com/mozammal01/image/upload/v1761631061/vercel_ioc7x3.png",
];

import { TextAnimate } from "@/components/ui/text-animate";

export default function SkillsPage() {

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020817] pt-28">
      {/* Hero Section */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[400px] lg:min-h-[500px]">
          {/* Text Content */}
          <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 pt-10 lg:pt-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-600 pb-2">
              <TextAnimate animation="slideUp" by="character" once>
                My Skills
              </TextAnimate>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl font-medium leading-relaxed">
              I specialize in full-stack web development, utilizing the latest technologies to build scalable, high-performance, and visually stunning applications.
            </p>
          </div>
          
          {/* Icon Cloud */}
          <div className="relative flex items-center justify-center w-full h-[350px] sm:h-[450px] lg:h-[600px]">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
             <div className="relative z-10 w-full h-full flex items-center justify-center">
               <IconCloud images={images} />
             </div>
          </div>
        </div>
      </div>

      {/* Main Skills Section */}
      <div className="relative z-20">
        <Skills />
      </div>
    </div>
  );
}

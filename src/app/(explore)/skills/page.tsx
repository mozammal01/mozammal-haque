import { IconCloud } from "@/components/ui/icon-cloud";
import DetailsHeader from "@/components/detailsHeader/DetailsHeader";
import Skills from "@/components/home/Skills";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
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

export default function SkillsPage() {
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
    "https://res.cloudinary.com/mozammal01/image/upload/v1759568452/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtbGFiZWw9IlZlcmNlbCBsb2dvbWFyayIgaGVpZ2h0PSIyMiIgcm9sZT0iaW1nIiBzdHlsZT0id2lkdGg6YXV0bztvdmVyZmxvdzp2aXNpYmxlIiB2aWV3Qm94PSIwIDAgNzQgNjQiPjx_sl8pcw.svg",
    "https://res.cloudinary.com/mozammal01/image/upload/v1759568451/svg_xml_base64_PHN2ZyBhcmlhLWxhYmVsPSJkYWlzeVVJIGxvZ29tYXJrIiB4PSI3NSIgeT0iNzUiIHdpZHRoPSI0NTAiIGhlaWdodD0iNDUwIiB2aWV3Qm94PSIwIDAgNDUwIDQ1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBkYXR_fvivwp.svg",
    "https://res.cloudinary.com/mozammal01/image/upload/v1759568452/svg_xml_base64_PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBjbGFzcz0ic2l6ZS01Ij48cmVjdCB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgZmlsbD0ibm9uZSIvPjxsaW5lIHgxPSIyMDgiIHkxPSIxMjgiIHgyPSI_hvi7xv.svg",
  ];

  return (
    <div>
      <DetailsHeader title="Skills" />
      {/*  */}
      <div className="bg-background relative flex size-full items-center justify-center overflow-hidden rounded-lg">
        <IconCloud images={images} />
      </div>
      <div className="-mt-20">
        <Skills />
      </div>
      <SmoothCursor />
    </div>
  );
}

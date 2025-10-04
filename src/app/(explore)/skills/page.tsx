import { IconCloud } from "@/components/ui/icon-cloud";
import DetailsHeader from "@/components/detailsHeader/DetailsHeader";
import Skills from "@/components/home/Skills";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

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
    // "https://plus.unsplash.com/premium_photo-1675553988173-a5249b5815fe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://plus.unsplash.com/premium_photo-1675297844586-534b030564e0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://plus.unsplash.com/premium_photo-1675555581018-7f1a352ff9a6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://images.unsplash.com/photo-1719937050517-68d4e2a1702e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://images.unsplash.com/photo-1720048171230-c60d162f93a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://plus.unsplash.com/premium_photo-1675553988173-a5249b5815fe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://plus.unsplash.com/premium_photo-1675297844586-534b030564e0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://plus.unsplash.com/premium_photo-1675555581018-7f1a352ff9a6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://images.unsplash.com/photo-1719937050517-68d4e2a1702e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://images.unsplash.com/photo-1720048171230-c60d162f93a0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://plus.unsplash.com/premium_photo-1675553988173-a5249b5815fe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://plus.unsplash.com/premium_photo-1675297844586-534b030564e0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://plus.unsplash.com/premium_photo-1675555581018-7f1a352ff9a6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // "https://images.unsplash.com/photo-1719937050517-68d4e2a1702e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

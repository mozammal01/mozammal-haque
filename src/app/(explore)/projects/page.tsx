import DetailsHeader from "@/components/detailsHeader/DetailsHeader";
import Projects from "@/components/home/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Portfolio",
  description:
    "Explore my portfolio of web development projects including full-stack applications, e-commerce platforms, education management systems, and more. Built with React, Next.js, Node.js, Express.js, and MongoDB.",
  keywords: ["web development projects", "portfolio", "React projects", "Next.js projects", "MERN stack projects", "full-stack projects"],
  openGraph: {
    title: "Projects Portfolio - Mozammal Haq",
    description:
      "Explore my portfolio of web development projects including full-stack applications built with React, Next.js, and MERN stack.",
    images: ["/projects/awesome-restaurant.png"],
  },
};

export default function ProjectsPage() {
  return (
    <div>
      <DetailsHeader title="All Projects" />
      {/* All Projects */}
      <div className="container mx-auto px-4 my-20">
        <Projects />
      </div>
    </div>
  );
}

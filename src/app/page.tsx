import Banner from "@/components/home/Banner";
import Navigation from "@/components/home/navigation";
import About from "@/components/home/About";
import Skills from "@/components/home/Skills";
import HireMe from "@/components/home/HireMe";
import Projects from "@/components/home/Projects";
import Services from "@/components/home/Services";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mozammal Haq",
    alternateName: "Mozammal Haque",
    url: "https://mozammalhaq.com",
    image: "https://mozammalhaq.com/me/yellow-hoodie.png",
    jobTitle: "Full Stack Web Developer",
    description: "Passionate junior web developer specializing in React, Next.js, TypeScript, Node.js, Express.js, and MongoDB.",
    knowsAbout: [
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Narayanganj",
      addressCountry: "Bangladesh",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Government Adomjeenagar MW College",
    },
    sameAs: [
      // Add your social media links here
      // "https://github.com/yourusername",
      // "https://linkedin.com/in/yourusername",
      // "https://twitter.com/yourusername"
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div>
        <div
          className="grid grid-cols-12 object-cover w-full"
          style={{ backgroundImage: "url('/background/background.png')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="col-span-11">
            <Banner />
          </div>
          <div className="col-span-1">
            <Navigation />
          </div>
        </div>
        <About />
        <Skills />
        <HireMe />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

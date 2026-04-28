import DownToUpMotion from "../animation/DownToUpMotion";
import ContactForm from "../contact/ContactForm";
import ContactInfo from "../contact/ContactInfo";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-32 relative bg-gradient-to-b from-white to-neutral-50 dark:from-[#030712] dark:to-[#000000] border-t border-black/5 dark:border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <DownToUpMotion className="relative bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-2xl shadow-[0_0_40px_rgba(255,193,7,0.05)] xl:w-4/5 w-full mx-auto xl:flex overflow-hidden group">
          {/* Top linear gradient effect */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 z-20" />
          
          <ContactInfo />
          <ContactForm />
        </DownToUpMotion>
      </div>
    </section>
  );
}

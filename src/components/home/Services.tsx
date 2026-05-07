import { services } from "@/data/services";
import ServiceCard from "../serviceCard/ServiceCard";
import ManyCardMotion from "../animation/ManyCardMotion";
export default function Services() {
  return (
    <section id="services" className="w-full py-24 relative bg-gradient-to-b from-neutral-50 to-white dark:from-[#0a0a0a] dark:to-[#030712] border-t border-black/5 dark:border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm block mb-2">What I Offer</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">My Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 justify-items-center">
          {services.map((service) => (
            <ManyCardMotion
              key={service.id}
              index={service.id}
              className="w-full max-w-[380px]"
            >
              <ServiceCard service={service} />
            </ManyCardMotion>
          ))}
        </div>
      </div>
    </section>
  );
}

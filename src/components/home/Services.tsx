import { services } from "@/data/services";
import ServiceCard from "../serviceCard/ServiceCard";
import ManyCardMotion from "../animation/ManyCardMotion";
export default function Services() {
  return (
    <section id="services" className="w-full py-24 relative bg-gradient-to-b from-neutral-50 to-white dark:from-[#0a0a0a] dark:to-[#030712] border-t border-black/5 dark:border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="container mx-auto px-8 relative z-10">
        <h2 className="text-3xl font-bold text-primary uppercase">Services</h2>
        <div className="flex flex-wrap justify-center gap-10 my-10">
        {services.map((service) => (
          <ManyCardMotion
            key={service.id}
            index={service.id}
            className="w-full lg:w-[calc(50%-20px)] 2xl:w-[calc(33.33%-27px)]"
          >
            <ServiceCard service={service} />
          </ManyCardMotion>
        ))}
      </div>
      </div>
    </section>
  );
}

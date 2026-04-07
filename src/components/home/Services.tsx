import { services } from "@/data/services";
import ServiceCard from "../serviceCard/ServiceCard";
import ManyCardMotion from "../animation/ManyCardMotion";
export default function Services() {
  return (
    <div id="services" className="my-20 container mx-auto px-8">
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
  );
}

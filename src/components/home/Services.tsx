import { services } from "@/data/services";
import ServiceCard from "../serviceCard/ServiceCard";
import ManyCardMotion from "../animation/ManyCardMotion";
export default function Services() {
  return (
    <div id="services" className="my-20 container mx-auto px-8">
      <h2 className="text-3xl font-bold text-primary uppercase">Services</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 justify-center items-center my-10">
        {services.map((service) => (
          <ManyCardMotion key={service.id} index={service.id}>
            <ServiceCard service={service} />
          </ManyCardMotion>
        ))}
      </div>
    </div>
  );
}

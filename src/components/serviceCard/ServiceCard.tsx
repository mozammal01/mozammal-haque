import { Service } from "@/interfaces/shared-interfaces";
import Image from "next/image";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-lg shadow-smooth p-4 hover:scale-105 hover:shadow-extra-smooth duration-300 h-[320px]">
      <Image src={service.iconImage} alt={service.name} width={100} height={100} className="mx-auto" />
      <h2 className="text-2xl font-bold text-primary text-center my-4">{service.icon} {service.name}</h2>
      <p className="text-lg text-gray-500 text-center w-4/5 mx-auto font-semibold">{service.description}</p>
    </div>
  );
}

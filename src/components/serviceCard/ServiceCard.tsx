import { Service } from "@/interfaces/shared-interfaces";
import Image from "next/image";
import ShutterMotion from "../animation/ShutterMotion";
import { TextAnimate } from "../ui/text-animate";
import PremiumCard from "../ui/PremiumCard";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <PremiumCard className="group/service">
      <ShutterMotion className="flex flex-col h-full">
        <div className="relative mb-6 mx-auto">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-0 group-hover/service:scale-100 transition-transform duration-500" />
          <Image 
            src={service.iconImage} 
            alt={service.name} 
            width={80} 
            height={80} 
            className="relative z-10 transition-transform duration-500 group-hover/service:scale-110" 
            unoptimized 
          />
        </div>
        
        <h2 className="text-2xl font-bold text-primary text-center mb-4 flex items-center justify-center gap-2">
          <span className="text-3xl">{service.icon}</span>
          {service.name}
        </h2>
        
        <div className="text-lg text-slate-300 text-center flex-grow font-medium leading-relaxed">
          <TextAnimate animation="slideLeft" by="word" delay={0.1}>
            {`${service.description}`}
          </TextAnimate>
        </div>
      </ShutterMotion>
    </PremiumCard>
  );
}

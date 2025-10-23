import { Service } from "@/interfaces/shared-interfaces";
import Image from "next/image";
import ShutterMotion from "../animation/ShutterMotion";
import { TextAnimate } from "../ui/text-animate";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-smooth p-4 hover:scale-105 hover:shadow-extra-smooth duration-300 h-full ">
      <ShutterMotion>
        <Image src={service.iconImage} alt={service.name} width={100} height={100} className="mx-auto" />
        <h2 className="text-2xl font-bold text-primary text-center my-4">
          {service.icon} {service.name}
        </h2>
        <div className="text-lg text-gray-500 dark:text-gray-200 text-center w-4/5 mx-auto font-semibold">
          <TextAnimate animation="slideLeft" by="word" delay={0.5}>
            {`${service.description}`}
          </TextAnimate>
        </div>
      </ShutterMotion>
    </div>
  );
}

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import contactBG from "@/../public/background/contact.jpg";
import Image from "next/image";

export default function ContactInfo() {
  return (
    <div className="relative w-full xl:w-2/5 rounded-md">
      <Image src={contactBG} alt="Contact" className="h-[454px]" />
      <div className="flex flex-col gap-8 justify-start absolute top-0 left-0 sm:p-10 p-2 py-10">
        <h3 className="text-xl font-bold text-primary uppercase">Contact Information</h3>
        <p className="text-lg text-gray-500">You can get my contact information here and if you like.</p>
        <div className="mt-16 space-y-4">
          <Link href="mailto:mozammalhaq01@gmail.com" target="_blank" className="text-lg flex items-center gap-2">
            <div className="bg-primary rounded p-2">
              <Mail size={20} className="text-white" />
            </div>
            <span>Email: </span>
            <span className="font-bold">mozammalhaq01@gmail.com</span>
          </Link>
          <Link href="tel:+8801846581810" target="_blank" className="text-lg flex items-center gap-2">
            <div className="bg-primary rounded p-2">
              <Phone size={20} className="text-white" />
            </div>
            <span>Phone: </span>
            <span className="font-bold">+8801846581810</span>
          </Link>
          <Link
            href="https://www.google.com/maps/place/Dhaka/@23.7809757,90.337288,12z/data=!3m1!4b1!4m6!3m5!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.804093!4d90.4152376!16zL20vMGZuYjQ?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="text-lg flex items-center gap-2"
          >
            <div className="bg-primary rounded p-2">
              <MapPin size={20} className="text-white" />
            </div>
            <span>Address: </span>
            <span className="font-bold">Dhaka, Bangladesh</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

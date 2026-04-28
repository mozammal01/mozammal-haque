import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import contactBG from "@/../public/background/contact.jpg";
import Image from "next/image";
import { TextAnimate } from "../ui/text-animate";

export default function ContactInfo() {
  return (
    <div className="relative xl:w-2/5 w-full rounded-md overflow-hidden group/info">
      <Image src={contactBG} alt="Contact" className="h-full w-full absolute inset-0 object-cover dark:invert opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-transparent dark:from-slate-900/90 dark:via-slate-900/80 dark:to-transparent" />
      
      <div className="flex flex-col gap-8 justify-center relative z-10 md:p-10 p-6 h-full">
        <div>
          <h3 className="text-3xl font-bold text-primary uppercase mb-2">
            <TextAnimate animation="slideLeft" by="line" delay={0.1} once>
              Contact Information
            </TextAnimate>
          </h3>
          <div className="text-lg text-slate-600 dark:text-slate-400 font-medium">
            <TextAnimate animation="slideLeft" by="word" delay={0.2} once>
              Ready to collaborate? Reach out to me directly.
            </TextAnimate>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <Link href="mailto:mozammalhaq01@gmail.com" target="_blank" className="flex items-center gap-4 group/item p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-primary/20">
            <div className="bg-primary/10 dark:bg-primary/20 rounded-full p-4 group-hover/item:bg-primary group-hover/item:scale-110 transition-all duration-300 group-hover/item:shadow-[0_0_20px_rgba(255,193,7,0.4)]">
              <Mail size={24} className="text-primary group-hover/item:text-black transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Email</span>
              <span className="text-lg font-bold text-foreground">
                <TextAnimate animation="slideLeft" by="word" delay={0.3} once>
                  mozammalhaq01@gmail.com
                </TextAnimate>
              </span>
            </div>
          </Link>
          
          <Link href="tel:+8801846581810" target="_blank" className="flex items-center gap-4 group/item p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-primary/20">
            <div className="bg-primary/10 dark:bg-primary/20 rounded-full p-4 group-hover/item:bg-primary group-hover/item:scale-110 transition-all duration-300 group-hover/item:shadow-[0_0_20px_rgba(255,193,7,0.4)]">
              <Phone size={24} className="text-primary group-hover/item:text-black transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Phone</span>
              <span className="text-lg font-bold text-foreground">
                <TextAnimate animation="slideLeft" by="word" delay={0.4} once>
                  +8801846581810
                </TextAnimate>
              </span>
            </div>
          </Link>
          
          <Link
            href="https://www.google.com/maps/place/Dhaka/@23.7809757,90.337288,12z"
            target="_blank"
            className="flex items-center gap-4 group/item p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-primary/20"
          >
            <div className="bg-primary/10 dark:bg-primary/20 rounded-full p-4 group-hover/item:bg-primary group-hover/item:scale-110 transition-all duration-300 group-hover/item:shadow-[0_0_20px_rgba(255,193,7,0.4)]">
              <MapPin size={24} className="text-primary group-hover/item:text-black transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">Location</span>
              <span className="text-lg font-bold text-foreground">
                <TextAnimate animation="slideLeft" by="word" delay={0.5} once>
                  Dhaka, Bangladesh
                </TextAnimate>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

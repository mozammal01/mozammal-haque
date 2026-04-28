"use client";
import AnimatedButton from "../animatedButton/AnimatedButton";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
  return (
    <div className="xl:p-10 p-4 rounded-md space-y-4 w-full xl:w-3/5 max-xl:py-10">
      <div className="flex flex-col gap-8 justify-center items-center w-full text-foreground">
        <div className="grid grid-cols-2 gap-6 w-full">
          <Input
            type="text"
            id="name"
            placeholder="Name"
            className="font-medium bg-transparent dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-6 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
          />
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="font-medium bg-transparent dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-6 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
          />
        </div>
        <Input
          type="text"
          id="subject"
          placeholder="Subject"
          className="font-medium bg-transparent dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-6 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-300"
        />
        <Textarea
          id="message"
          placeholder="Message"
          className="font-medium bg-transparent dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-4 min-h-[160px] focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary transition-all duration-300 resize-none"
        />
        <div className="w-full flex justify-end">
          <AnimatedButton variant="rotateRight" className="py-4 px-8" text="Send Message" href="mailto:mozammalhaq01@gmail.com" />
        </div>
      </div>
    </div>
  );
}

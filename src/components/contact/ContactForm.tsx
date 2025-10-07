"use client";
import AnimatedButton from "../animatedButton/AnimatedButton";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
  return (
    <div className="xl:p-10 p-4 rounded-md space-y-4 w-full xl:w-3/5">
      <div className="flex flex-col gap-8 justify-center items-center w-full text-black">
        <div className="grid grid-cols-2 gap-6 w-full">
          <Input
            type="text"
            id="name"
            placeholder="Name"
            className="font-semibold border-t-0 border-l-0 border-r-0 rounded-none focus:outline-none focus:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none border-b-2 border-primary"
          />
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="font-semibold border-t-0 border-l-0 border-r-0 rounded-none focus:outline-none focus:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none border-b-2 border-primary"
          />
        </div>
        <Input
          type="text"
          id="subject"
          placeholder="Subject"
          className="font-semibold border-t-0 border-l-0 border-r-0 rounded-none focus:outline-none focus:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none border-b-2 border-primary"
        />
        <Textarea
          id="message"
          placeholder="Message"
          className="font-semibold h-32 border-t-0 border-l-0 border-r-0 rounded-none focus:outline-none focus:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none border-b-2 border-primary"
        />
        <div>
          <AnimatedButton variant="rotateRight" className="py-4" text="Send Message" href="mailto:mozammalhaq01@gmail.com" />
        </div>
      </div>
    </div>
  );
}

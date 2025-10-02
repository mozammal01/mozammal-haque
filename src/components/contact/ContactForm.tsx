"use client";
import TextField from "@mui/material/TextField";
import AnimatedButton from "../animatedButton/AnimatedButton";

export default function ContactForm() {
  return (
    <div className="p-10 rounded-md space-y-4 w-full xl:w-3/5">
      <div className="flex flex-col gap-8 justify-center items-center w-full">
        <div className="grid grid-cols-2 gap-6 w-full">
          <TextField label="Name" variant="standard" fullWidth />
          <TextField label="Email" variant="standard" fullWidth />
        </div>
        <TextField label="Subject" variant="standard" fullWidth />
        <TextField id="outlined-multiline-static" label="Message" multiline rows={4} variant="outlined" fullWidth />
        <div className="flex justify-end  ">
          <AnimatedButton variant="rotateRight" className="py-4" text="Send Message" href="mailto:mozammalhaq01@gmail.com" />
        </div>
      </div>
    </div>
  );
}

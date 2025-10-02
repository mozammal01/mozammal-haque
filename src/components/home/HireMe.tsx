import AnimatedButton from "../animatedButton/AnimatedButton";

export default function HireMe() {
  return (
    <div id="hireme" className="my-20 bg-primary text-white p-10 h-[160px] flex items-center justify-center px-4">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <h2 className="text-4xl font-bold uppercase">I am available for Remote Jobs</h2>
        <AnimatedButton variant="outline" text="Hire Me Now" href="#contact" />
      </div>
    </div>
  );
}

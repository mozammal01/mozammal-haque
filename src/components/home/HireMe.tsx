import AnimatedButton from "../animatedButton/AnimatedButton";

export default function HireMe() {
  return (
    <div id="hireme" className="my-20 bg-primary text-white p-10 lg:py-20 py-10 flex flex-col lg:flex-row items-center justify-center px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        <h2 className="lg:text-4xl text-2xl font-bold uppercase">I am available for Remote Jobs</h2>
        <AnimatedButton variant="outline" text="Hire Me Now" href="#contact" />
      </div>
    </div>
  );
}

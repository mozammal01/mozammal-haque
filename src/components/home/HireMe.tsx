import { Button } from "../ui/button";

export default function HireMe() {
  return (
    <div id="hireme" className="my-20 bg-primary text-white p-10 h-[160px] flex items-center justify-center px-4">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <h2 className="text-4xl font-bold uppercase">I am available for Remote Jobs</h2>
        <Button variant="outline" className="text-primary font-bold hover:text-primary/90">Hire Me Now</Button>
      </div>
    </div>
  );
}

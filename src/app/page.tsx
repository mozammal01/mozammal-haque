import Navigation from "@/components/home/navigation";

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1 text-2xl font-bold">Hello</div>
      <h1 className="text-3xl font-bold underline col-span-10">Hello There</h1>
      <div className="col-span-1">
        <Navigation />
      </div>
    </div>
  );
}

import Banner from "@/components/home/Banner";
import LeftSide from "@/components/home/LeftSide";
import Navigation from "@/components/home/navigation";
import About from "@/components/home/About";

export default function Home() {
  return (
    <div>
    <div className="grid grid-cols-12 object-cover w-full" style={{ backgroundImage: "url('/background/background.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="col-span-1">
      {/* <LeftSide /> */}
      </div>
      <div className="col-span-10">
        <Banner />
      </div>
      <div className="col-span-1">
        <Navigation />
      </div>
    </div>
    <About />
    </div>

  );
}

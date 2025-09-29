import Banner from "@/components/home/Banner";
import LeftSide from "@/components/home/LeftSide";
import Navigation from "@/components/home/navigation";

export default function Home() {
  return (
    <div className="grid grid-cols-12" style={{ backgroundImage: "url('/background/background.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="col-span-1">
      <LeftSide />
      </div>
      <div className="col-span-10">
        <Banner />
      </div>
      <div className="col-span-1">
        <Navigation />
      </div>
    </div>
  );
}

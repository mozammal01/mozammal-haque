import errorImg from "@/../public/error/404.gif";
import AnimatedButton from "@/components/animatedButton/AnimatedButton";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div>
        <Image src={errorImg} alt="404 Error - Page Not Found" width={800} height={1000} />
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <h2 className="text-5xl font-bold text-red-500">This page is Not Found</h2>
        <AnimatedButton variant="outline" text="Go back to home" href="/" />
      </div>
    </div>
  );
}

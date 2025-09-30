import { AnimatedButtonProps } from "@/interfaces/shared-interfaces";
import Link from "next/link";

export default function AnimatedButton({ outline, primary, text, href }: AnimatedButtonProps) {
  const renderButtonPrimary = () => (
    <button className="relative px-6 py-2 text-white bg-primary overflow-hidden group">
      {text}
      <span className="absolute left-0 bottom-0 h-[4px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
      <span className="absolute right-0 top-0 h-[4px] w-0 bg-white transition-all duration-300 group-hover:w-full delay-300"></span>
      <span className="absolute left-0 top-0 w-[4px] h-0 bg-white transition-all duration-300 group-hover:h-full delay-150"></span>
      <span className="absolute right-0 bottom-0 w-[4px] h-0 bg-white transition-all duration-300 group-hover:h-full delay-450"></span>
    </button>
  );

  const renderButtonOutline = () => (
    <button className="relative px-6 py-2 bg-white text-primary border border-primary overflow-hidden group">
      {text}
      <span className="absolute left-0 bottom-0 h-[4px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
      <span className="absolute right-0 top-0 h-[4px] w-0 bg-primary transition-all duration-300 group-hover:w-full delay-300"></span>
      <span className="absolute left-0 top-0 w-[4px] h-0 bg-primary transition-all duration-300 group-hover:h-full delay-150"></span>
      <span className="absolute right-0 bottom-0 w-[4px] h-0 bg-primary transition-all duration-300 group-hover:h-full delay-450"></span>
    </button>
  );
  return (
    <div>
      {primary && (
        <>
          <Link href={href} target="_blank">
            {renderButtonPrimary()}
          </Link>
        </>
      )}
      {outline && (
        <Link href={href} target="_blank">
          {renderButtonOutline()}
        </Link>
      )}
    </div>
  );
}

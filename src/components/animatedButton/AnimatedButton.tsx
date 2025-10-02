import { AnimatedButtonProps } from "@/interfaces/shared-interfaces";
import Link from "next/link";

export default function AnimatedButton({ variant, text, href, className ,target}: AnimatedButtonProps) {
  const renderButtonPrimary = () => (
    <Link href={href} target={target}>
      <button className={`relative px-6 py-2 text-white bg-primary overflow-hidden group ${className}`}>
        {text}
        <span className="absolute left-0 bottom-0 h-[4px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
        <span className="absolute right-0 top-0 h-[4px] w-0 bg-white transition-all duration-300 group-hover:w-full delay-300"></span>
        <span className="absolute left-0 top-0 w-[4px] h-0 bg-white transition-all duration-300 group-hover:h-full delay-150"></span>
        <span className="absolute right-0 bottom-0 w-[4px] h-0 bg-white transition-all duration-300 group-hover:h-full delay-450"></span>
      </button>
    </Link>
  );

  const renderButtonOutline = () => (
    <Link href={href} target={target}>
      <button className={`relative px-6 py-2 bg-white text-primary border border-primary overflow-hidden group ${className}`}>
        {text}
        <span className="absolute left-0 bottom-0 h-[4px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
        <span className="absolute right-0 top-0 h-[4px] w-0 bg-primary transition-all duration-300 group-hover:w-full delay-300"></span>
        <span className="absolute left-0 top-0 w-[4px] h-0 bg-primary transition-all duration-300 group-hover:h-full delay-150"></span>
        <span className="absolute right-0 bottom-0 w-[4px] h-0 bg-primary transition-all duration-300 group-hover:h-full delay-450"></span>
      </button>
    </Link>
  );

  const renderButtonLeftToRightBottom = () => (
    <section>
      <Link href={href} target={target} className="relative bg-white rounded-lg border-2 border-primary text-primary py-3 px-5 group">
        <span className="absolute w-0 h-1 group-hover:w-full transition-all ease-out duration-500 bg-primary left-0 top-14"></span>
        <span className="relative">{text}</span>
      </Link>
    </section>
  );
  
  const renderButtonRightToLeftBottom = () => (
    <section>
      <Link href={href} target={target} className="relative bg-white rounded-lg border-2 border-primary text-primary py-3 px-5 group">
        <span className="absolute w-0 h-1 group-hover:w-full transition-all ease-out duration-500 bg-primary right-0 top-14"></span>
        <span className="relative">{text}</span>
      </Link>
    </section>
  );

  const renderButtonLeftToRight = () => (
    <section>
      <Link href={href} target={target} className="relative bg-white rounded border-2 hover:text-white duration-500 border-primary text-primary py-3 px-5 group">
        <span className="absolute w-0 h-full group-hover:w-full transition-all ease-out duration-500 bg-primary left-0 top-0"></span>
        <span className="relative">{text}</span>
      </Link>
    </section>
  );

  const renderButtonRightToLeft = () => (
    <section>
      <Link href={href} target={target} className="relative bg-white rounded border-2 hover:text-white duration-500 border-primary text-primary py-3 px-5 group">
        <span className="absolute w-0 h-full group-hover:w-full transition-all ease-out duration-500 bg-primary right-0 top-0"></span>
        <span className="relative">{text}</span>
      </Link>
    </section>
  );

  const renderButtonTopToBottom = () => (
    <section>
      <Link href={href} target={target} className="relative bg-white rounded border-2 hover:text-white duration-500 border-primary text-primary py-3 px-5 group">
        <span className="absolute w-full h-0 group-hover:h-full transition-all ease-out duration-300 bg-primary top-0 left-0"></span>
        <span className="relative">{text}</span>
      </Link>
    </section>
  );
  
  const renderButtonBottomToTop = () => (
    <section>
      <Link href={href} target={target} className="relative bg-white rounded border-2 hover:text-white duration-500 border-primary text-primary py-3 px-5 group">
        <span className="absolute w-full h-0 group-hover:h-full transition-all ease-out duration-300 bg-primary bottom-0 left-0"></span>
        <span className="relative">{text}</span>
      </Link>
    </section>
  );

  const renderButtonRotateRight = () => (
    <section className="w-full flex">
      <Link  href={href} target={target}
      className="relative bg-white rounded-lg overflow-hidden border-2 border-primary text-primary   duration-500 hover:text-white py-2.5 px-5 group">
      <span className="absolute w-64 h-64 mt-12 group-hover:rotate-45 group-hover:-mt-24 transition-all ease-linear duration-500 bg-primary right-0 top-0"></span>
      <span className="relative">{text}</span>
    </Link>
    </section>
  );

  const renderButtonRotateLeft = () => (
    <section className="w-full flex">
      <Link  href={href} target={target}
      className="relative bg-white rounded-lg overflow-hidden border-2 border-primary text-primary   duration-500 hover:text-white py-2.5 px-5 group">
      <span className="absolute w-64 h-64 mt-12 group-hover:-rotate-45 group-hover:-mt-24 transition-all ease-linear duration-500 bg-primary left-0 top-0"></span>
      <span className="relative">{text}</span>
    </Link>
    </section>
  );

  return (
    <>
      {variant === "primary" && renderButtonPrimary()}
      {variant === "outline" && renderButtonOutline()}
      {variant === "leftToRightBottom" && renderButtonLeftToRightBottom()}
      {variant === "rightToLeftBottom" && renderButtonRightToLeftBottom()}
      {variant === "leftToRight" && renderButtonLeftToRight()}
      {variant === "rightToLeft" && renderButtonRightToLeft()}
      {variant === "topToBottom" && renderButtonTopToBottom()}
      {variant === "bottomToTop" && renderButtonBottomToTop()}
      {variant === "rotateRight" && renderButtonRotateRight()}
      {variant === "rotateLeft" && renderButtonRotateLeft()}
    </>
  );
}
{
  /* 
export const Button = () => {
  return (
    <>
    
   
    </>
  );
}; */
}

// {/* <section className="w-full h-screen flex items-center justify-center gap-10">
//   {/* Left to Right */}

//     <a href="#" className="relative bg-white rounded-lg border-2 border-blue-500 text-blue-500 py-3 px-5 group">
//       <span className="absolute w-0 h-1 group-hover:w-full transition-all ease-out duration-500 bg-blue-500 left-0 top-14"></span>
//       <span className="relative">Left to Right</span>
//     </a>

//   {/* Right to Left */}
//   <a
//     href="#"
//     className="relative bg-white rounded-lg overflow-hidden border-2 border-blue-500 text-blue-500   duration-500 hover:text-white py-2.5 px-5 group"
//   >
//     <span className="absolute w-32 h-16 group-hover:-ms-32 transition-all ease-linear duration-500 bg-blue-500 left-32 top-0"></span>
//     <span className="relative">Right to Left</span>
//   </a>
//   {/* Left to Right */}
//   <a
//     href="#"
//     className="relative bg-white rounded-lg overflow-hidden border-2 border-blue-500 text-blue-500   duration-500 hover:text-white py-2.5 px-5 group"
//   >
//     <span className="absolute w-32 h-16 group-hover:-me-32 transition-all ease-linear duration-500 bg-blue-500 right-32 top-0"></span>
//     <span className="relative">Left to Right</span>
//   </a>
//   {/* Rotate Right */}
//   <a
//     href="#"
//     className="relative bg-white rounded-lg overflow-hidden border-2 border-blue-500 text-blue-500   duration-500 hover:text-white py-2.5 px-5 group"
//   >
//     <span className="absolute w-64 h-64 mt-12 group-hover:rotate-45 group-hover:-mt-24 transition-all ease-linear duration-500 bg-blue-500 right-0 top-0"></span>
//     <span className="relative">Rotate Right</span>
//   </a>
//   {/* Rotate left */}
//   <a
//     href="#"
//     className="relative bg-white rounded-lg overflow-hidden border-2 border-blue-500 text-blue-500   duration-500 hover:text-white py-2.5 px-5 group"
//   >
//     <span className="absolute w-64 h-64 mt-12 group-hover:-rotate-45 group-hover:-mt-24 transition-all ease-linear duration-500 bg-blue-500 left-0 top-0"></span>
//     <span className="relative">Rotate left</span>
//   </a>
//   {/* Up to Down */}
//   <a
//     href="#"
//     className="relative bg-white rounded-lg overflow-hidden border-2 border-blue-500 text-blue-500   duration-500 hover:text-white py-2.5 px-5 group"
//   >
//     <span className="absolute w-64 h-64 mb-12 group-hover:-mb-24 transition-all ease-linear duration-500 bg-blue-500 left-0 bottom-0"></span>
//     <span className="relative">Up to Down</span>
//   </a>
//   {/* Down to Up */}
//   <a
//     href="#"
//     className="relative bg-white rounded-lg overflow-hidden border-2 border-blue-500 text-blue-500   duration-500 hover:text-white py-2.5 px-5 group"
//   >
//     <span className="absolute w-64 h-64 mt-12 group-hover:-mt-24 transition-all ease-linear duration-500 bg-blue-500 left-0 top-0"></span>
//     <span className="relative">Down to Up</span>
//   </a>
// </section>; */}

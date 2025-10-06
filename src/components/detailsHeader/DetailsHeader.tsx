import LeftSliderMotion from "../animation/LeftSliderMotion";

export default function DetailsHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <LeftSliderMotion className="text-white flex flex-col items-center justify-center h-[600px]">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="xl:w-1/2 w-5/6 mx-auto text-center mt-6 text-gray-300">{subtitle}</p>
    </LeftSliderMotion>
  );
}

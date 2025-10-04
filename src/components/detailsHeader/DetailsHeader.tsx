export default function DetailsHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="text-white flex flex-col items-center justify-center h-[600px]">
    <h2 className="text-4xl font-bold">{title}</h2>
    <p className="w-1/2 mx-auto text-center mt-6 text-gray-300">{subtitle}</p>
  </div>
  );
}
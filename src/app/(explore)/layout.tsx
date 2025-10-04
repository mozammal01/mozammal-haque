export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-[600px] object-cover -z-10">
        <source src="/video/projects.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-[600px] bg-black/80 z-10"></div>

      <div className="z-20 relative">{children}</div>
    </div>
  );
}

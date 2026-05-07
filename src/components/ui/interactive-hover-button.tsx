import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import Link from "next/link";

export function InteractiveHoverButton({ children, className, href, target, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: string, target?: string }) {
  return (
    <button
      className={cn(
        "group/btn bg-background relative w-auto cursor-pointer overflow-hidden rounded border p-2 px-6 text-center font-semibold",
        className
      )}
      {...props}
    >
      <Link target={target} href={href || ""}>
        <div className="flex items-center gap-2">
          <div className="bg-primary h-2 w-2 rounded transition-all duration-300 group-hover/btn:scale-[100.8]"></div>
          <span className="inline-block transition-all duration-300 group-hover/btn:translate-x-12 group-hover/btn:opacity-0">{children}</span>
        </div>
        <div className="text-primary-foreground absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover/btn:-translate-x-5 group-hover/btn:opacity-100">
          <span>{children}</span>
          <ArrowRight />
        </div>
      </Link>
    </button>
  );
}

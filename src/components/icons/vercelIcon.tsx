import { IconProps } from "@/interfaces/shared-interfaces";

export default function VercelIcon({...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Vercel logomark"
      height={props.size}
      width={props.size}
      role="img"
      style={{ width: "auto", overflow: "visible" }}
      viewBox="0 0 74 64"
      {...props}
    >
      <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" fill="var(--geist-foreground)" />
    </svg>  
  );
}

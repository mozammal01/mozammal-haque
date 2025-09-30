import { IconProps } from "@/interfaces/shared-interfaces";

export default function NextJSIcon({...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} fill="none" className="block dark:hidden">
      <mask id="nextjs_react_svg__a" width="26" height="26" x="7" y="7" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }}>
        <path fill="#000" d="M20 33c7.18 0 13-5.82 13-13S27.18 7 20 7 7 12.82 7 20s5.82 13 13 13" />
      </mask>
      <g mask="url(#nextjs_react_svg__a)">
        <path fill="#000" d="M20 33c7.18 0 13-5.82 13-13S27.18 7 20 7 7 12.82 7 20s5.82 13 13 13" />
        <path fill="url(#nextjs_react_svg__b)" d="M28.596 29.753 16.987 14.8H14.8v10.396h1.75v-8.174l10.672 13.789q.723-.484 1.374-1.058" />
        <path fill="url(#nextjs_react_svg__c)" d="M25.344 14.8h-1.733v10.4h1.733z" />
      </g>
      <defs>
        <linearGradient id="nextjs_react_svg__b" x1="22.744" x2="27.872" y1="23.828" y2="30.183" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="nextjs_react_svg__c" x1="24.478" x2="24.449" y1="14.8" y2="22.438" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

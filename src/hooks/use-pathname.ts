"use client";
import { usePathname } from "next/navigation";

export const usePathnameHook = () => {
  return usePathname();
};
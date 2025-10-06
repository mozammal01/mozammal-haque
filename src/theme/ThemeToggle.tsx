import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      {theme === "light" ? <AnimatedThemeToggler onClick={() => setTheme("dark")} /> : <AnimatedThemeToggler onClick={() => setTheme("light")} />}
    </div>
  );
}

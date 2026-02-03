import { useEffect, type ReactNode } from "react";
import { useTheme } from "@/features/theme/model/useTheme";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initial = stored || systemPref;
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);
  }, [setTheme]);

  return <>{children}</>;
};
import { create } from "zustand";

export const useTheme = create<{
  theme: "light" | "dark";
  toggle: () => void;
  setTheme: (t: "light" | "dark") => void;
}>(set => ({
  theme: "light",
  toggle: () =>
    set(state => {
      const newTheme = state.theme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),

  setTheme: theme => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));

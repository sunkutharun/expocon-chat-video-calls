import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("expocon-theme") || "dark",
  setTheme: (theme) => {
    localStorage.setItem("expocon-theme", theme);
    set({ theme });
  },
}));
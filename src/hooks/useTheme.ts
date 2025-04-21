
import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

// Get current theme from localStorage or system
const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export function useTheme(): [Theme, (t?: Theme) => void] {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // When theme changes, update <html> class
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Manual toggle
  const toggleTheme = useCallback((newTheme?: Theme) => {
    setTheme(current => {
      if (newTheme) return newTheme;
      return current === "dark" ? "light" : "dark";
    });
  }, []);

  return [theme, toggleTheme];
}

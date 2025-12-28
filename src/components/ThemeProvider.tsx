import {  useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ThemeContext } from "../functions/ThemeContext";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  function ToggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


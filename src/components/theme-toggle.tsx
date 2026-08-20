"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="nav-icon-button"
      title={theme === "dark" ? "Modo Claro" : "Modo Escuro"}
      aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {theme === "dark" ? (
        <Sun aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
      ) : (
        <Moon aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
      )}
    </button>
  );
}

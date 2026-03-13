"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  const handleClick = () => {
    const audio = new Audio("/click.mp3");
    audio.volume = 0.4;
    audio.play().catch(() => {});
    toggle();
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Toggle theme"
      className="hover:opacity-70 transition-opacity cursor-pointer"
    >
      {theme === "dark" ? <Sun size={13} /> : <Moon size={13} />}
    </button>
  );
}

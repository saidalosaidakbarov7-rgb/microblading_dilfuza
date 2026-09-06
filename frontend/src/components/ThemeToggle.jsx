import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((value) => !value)}
      aria-label={dark ? "Light mode" : "Dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#3B2A20]/10 bg-white/50 text-[#3B2A20] transition-all hover:border-[#B08D57] hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-[#F5EDE4] dark:hover:bg-white/10"
    >
      {dark ? (
        <Sun size={17} strokeWidth={1.7} />
      ) : (
        <Moon size={17} strokeWidth={1.7} />
      )}
    </button>
  );
}
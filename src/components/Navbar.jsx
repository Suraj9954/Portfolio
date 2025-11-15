import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-6xl flex items-center justify-between px-6 md:px-8 py-3 bg-white/80 dark:bg-slate-900/80 z-50 border border-slate-100 dark:border-slate-800 rounded-xl shadow-subtle backdrop-blur">
      <div className="flex items-center gap-3">
        <div className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
          PORTFOLIO
        </div>
      </div>

      <ul className="flex items-center gap-4">
        <li>
          <a
            href="/Suraj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-500 hover:bg-accent-700 text-white rounded-md text-sm font-medium shadow-sm transition"
          >
            View Resume
          </a>
        </li>

      </ul>
    </nav>
  );
}

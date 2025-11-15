import { useState, useEffect } from "react";
import { Sun, Moon, Globe } from "lucide-react";

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
    <nav
      className="fixed top-0 left-0 w-full flex items-center justify-between px-8 md:px-16 lg:px-28 py-4 
                    bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl z-50 
                    border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm"
    >
      <div
        className="text-xl md:text-2xl font-bold tracking-wide 
                bg-gradient-to-r from-indigo-500 to-purple-500 
                bg-clip-text cursor-pointer
                drop-shadow-sm"
      >
        PORTFOLIO
      </div>

      <ul className="flex items-center gap-6 md:gap-8 text-sm md:text-base font-medium">
        <li>
          <a
            href="/Suraj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            View Resume
          </a>
        </li>
        <li className="cursor-pointer text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
          Blog
        </li>
      </ul>
    </nav>
  );
}

import { Linkedin, Instagram, Facebook, Github } from "lucide-react";

export default function Footer() {
  const links = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={22} />,
      url: "https://www.linkedin.com/in/suraj-kumar-982bab282/",
    },
    {
      name: "GitHub",
      icon: <Github size={22} />,
      url: "https://github.com/Suraj9954",
    },
    {
      name: "Instagram",
      icon: <Instagram size={22} />,
      url: "https://www.instagram.com/suraj._.kumar09/",
    },
  ];

  return (
    <footer
      className="
      w-full py-12 px-8 md:px-16 
      bg-white dark:bg-slate-900
      border-t border-slate-200 dark:border-slate-800
      transition-all duration-700
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-3 rounded-lg bg-slate-100 dark:bg-slate-800 
                border border-slate-200 dark:border-slate-700
                text-slate-700 dark:text-slate-300 
                hover:scale-110 hover:bg-indigo-100 dark:hover:bg-slate-700
                hover:text-indigo-600 dark:hover:text-indigo-400
                hover:border-indigo-300 dark:hover:border-indigo-600
                shadow-sm hover:shadow-lg
                transition-all duration-300
              "
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>

        <div className="space-y-2">
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Designed & Built with ❤️ by{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              Suraj Kumar
            </span>
          </p>
          <p className="text-slate-500 dark:text-slate-500 text-xs">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

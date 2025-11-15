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
    <footer className="w-full py-12 px-6 md:px-12 border-t border-slate-100 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">
        <div className="flex gap-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 shadow-sm transition"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="h-px w-20 bg-slate-200 dark:bg-slate-700"></div>

        <div className="space-y-1">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
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

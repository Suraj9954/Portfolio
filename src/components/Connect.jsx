import { Linkedin, Instagram, Github } from "lucide-react";

export default function Connections() {
  const socials = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={32} className="text-blue-600 dark:text-blue-400" />,
      url: "https://www.linkedin.com/in/suraj-kumar-982bab282/",
      color: "hover:bg-blue-100 dark:hover:bg-blue-900/40",
    },
    {
      name: "GitHub",
      icon: <Github size={32} className="text-blue-700 dark:text-blue-300" />,
      url: "https://github.com/Suraj9954",
      color: "hover:bg-blue-200 dark:hover:bg-blue-900/40",
    },
    {
      name: "Instagram",
      icon: (
        <Instagram size={32} className="text-pink-600 dark:text-pink-400" />
      ),
      url: "https://www.instagram.com/suraj._.kumar09/",
      color: "hover:bg-pink-100 dark:hover:bg-pink-900/40",
    },
  ];

  return (
    <section
      id="connections"
      className="w-full px-6 md:px-12 py-16 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-accent-500 tracking-wide uppercase mb-2">
            Let's Connect
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md flex flex-col items-center justify-center gap-3 transition-all duration-200"
            >
              <div className="text-2xl">{social.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {social.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

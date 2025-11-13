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
      className="
        w-full px-8 md:px-16 lg:px-28 py-20
        bg-slate-50 dark:bg-slate-950
        transition-all duration-700
      "
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2">
            Let's Connect
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
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
              className="group p-8 rounded-xl 
                bg-white dark:bg-slate-800 
                border border-slate-200 dark:border-slate-700 
                shadow-md hover:shadow-2xl hover:border-indigo-300 dark:hover:border-indigo-600
                flex flex-col items-center justify-center gap-4
                transition-all duration-500 hover:-translate-y-2"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
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

import { Code2, Monitor, Server, Database, Wrench, Globe } from "lucide-react";

export default function Skills() {
  const skillData = [
    {
      title: "Programming Languages",
      icon: <Code2 size={28} className="text-indigo-600" />,
      items: ["C++", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      title: "Frontend Development",
      icon: <Monitor size={28} className="text-blue-600" />,
      items: ["React.js", "Redux Toolkit", "RTK Query", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: <Server size={28} className="text-purple-600" />,
      items: ["Node.js", "Express.js", "REST APIs", "Authentication (JWT)"],
    },
    {
      title: "Databases",
      icon: <Database size={28} className="text-teal-600" />,
      items: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={28} className="text-pink-600" />,
      items: ["GitHub", "VS Code", "Postman", "Nodemailer", "Stripe"],
    },
    {
      title: "Soft Skills",
      icon: <Globe size={28} className="text-green-600" />,
      items: ["Teamwork", "Communication", "Problem-Solving", "Adaptability"],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full px-8 md:px-16 lg:px-28 py-20 
                 bg-white dark:bg-slate-900
                 transition-all duration-700"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2">
            Technical Knowledge
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-slate-200 dark:border-slate-700 
                         bg-slate-50 dark:bg-slate-800/50 
                         hover:border-indigo-300 dark:hover:border-indigo-600
                         shadow-sm hover:shadow-xl 
                         transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-white dark:bg-slate-700 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {skill.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium
                               bg-white dark:bg-slate-700 
                               text-slate-700 dark:text-slate-200 
                               border border-slate-200 dark:border-slate-600
                               hover:border-indigo-300 dark:hover:border-indigo-500
                               hover:bg-indigo-50 dark:hover:bg-slate-600
                               transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

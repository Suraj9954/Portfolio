import { Code2, Monitor, Server, Database, Wrench, Globe } from "lucide-react";

export default function Skills() {
  const skillData = [
    {
      title: "Programming Languages",
      icon: <Code2 size={28} className="text-indigo-600" />,
      items: ["C++", "JavaScript", "SQL"],
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
    <section id="skills" className="w-full px-6 md:px-12 py-16 bg-slate-50 dark:bg-slate-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent-500 tracking-wide uppercase mb-2">Technical Knowledge</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 bg-slate-50 dark:bg-slate-700 rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-200">
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
                    className="px-3 py-1.5 rounded-md text-sm font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 transition-colors duration-200"
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

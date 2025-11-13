import { Globe, Github } from "lucide-react";

export default function WorkExperience() {
  const experiences = [
    {
      title: "Learning Management System (LMS)",
      company: {
        live: "https://deployed-lms.vercel.app/",
        github: "https://github.com/Suraj9954/E-Learning-LMS",
      },
      date: "Oct 2024 – Jan 2025",
      description:
        "Developed a full-stack e-learning platform using the MERN stack. Implemented JWT authentication, role-based access control, Stripe payments, automated emails via Nodemailer, optimized RTK Query data fetching, teacher dashboards, revenue charts, rich text editor, and student progress tracking.",
    },
    {
      title: "Job Portal Web Application",
      company: {
        live: null,
        github: "https://github.com/Suraj9954/Job-Portal",
      },
      date: "Feb 2024 – Mar 2024",
      description:
        "Built a job portal using MERN with secure JWT & bcrypt auth, recruiter dashboards, job filtering, resume uploads, automated emails, REST APIs, and a Tailwind CSS-based user-friendly UI.",
    },
  ];

  return (
    <section
      id="experience"
      className="
        w-full px-8 md:px-16 lg:px-28 py-20 
        bg-slate-50 dark:bg-slate-950
        transition-all duration-700
      "
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2">
            Work Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Projects
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
                relative pl-8 md:pl-12
                before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 
                before:bg-gradient-to-b before:from-indigo-600 before:to-purple-600
                dark:before:from-indigo-400 dark:before:to-purple-400
              "
            >
              <div
                className="absolute left-[-6.5px] top-1/2 -translate-y-1/2 
     w-3 h-3 bg-indigo-600 dark:bg-indigo-400 rounded-full ring-2 ring-indigo-600 dark:ring-indigo-400"
              ></div>
              <div
                className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl 
                            border border-slate-200 dark:border-slate-700 
                            shadow-md hover:shadow-xl 
                            transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1 md:mt-0">
                    {exp.date}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  {exp.company.live && (
                    <a
                      href={exp.company.live}
                      target="_blank"
                      className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      <Globe size={18} /> Live Demo
                    </a>
                  )}

                  {exp.company.github && (
                    <a
                      href={exp.company.github}
                      target="_blank"
                      className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:underline"
                    >
                      <Github size={18} /> GitHub Code
                    </a>
                  )}
                </div>

                <p className="text-slate-700 dark:text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

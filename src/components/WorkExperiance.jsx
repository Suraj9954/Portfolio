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
        "Developed a full-stack e-learning platform using the MERN stack with authentication, role-based access, Stripe payments, rich text editor, dashboards, revenue charts, and RTK Query optimizations.",
    },
    {
      title: "Job Portal Web Application",
      company: {
        live: null,
        github: "https://github.com/Suraj9954/Job-Portal",
      },
      date: "Feb 2024 – Mar 2024",
      description:
        "Built a job portal using MERN with secure JWT authentication, job filtering, resume uploads, recruiter dashboards, and email automation.",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full px-6 md:px-12 py-16 bg-white dark:bg-slate-900 transition-all duration-300"
    >
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-accent-500 tracking-wide uppercase mb-2">
            Work Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Projects
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-xl 
              bg-slate-50 dark:bg-slate-800 
              border border-slate-200 dark:border-slate-700 
              shadow-sm w-full"
            >
              {/* Title + Year */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white">
                  {exp.title}
                </h3>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-2 md:mt-0">
                  {exp.date}
                </span>
              </div>

              {/* Links */}
              <div className="flex items-center gap-5 mb-4">
                {exp.company.live && (
                  <a
                    href={exp.company.live}
                    target="_blank"
                    className="flex items-center gap-2 text-accent-500 hover:underline font-medium text-sm"
                  >
                    <Globe size={16} /> Live Demo
                  </a>
                )}

                {exp.company.github && (
                  <a
                    href={exp.company.github}
                    target="_blank"
                    className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:underline font-medium text-sm"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {exp.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

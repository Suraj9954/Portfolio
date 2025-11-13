export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      school:
        "Motilal Nehru National Institute of Technology (MNNIT) Allahabad - India",
      year: "2022 – 2026",
      description:
        "Pursuing B.Tech with strong focus on software engineering, web development, data structures, algorithms, and project-based learning. Worked on MERN projects, LMS, job portal, and cloud integrated systems.",
    },
    {
      degree: "Senior Secondary (Class XII) – ISC Board",
      school: "R.P.M. Academy, Gorakhpur",
      year: "2021",
      description:
        "Completed 12th with a focus on Physics, Chemistry, Mathematics. Built a strong foundation for engineering concepts and problem-solving.",
    },
    {
      degree: "Secondary (Class X) – ICSE Board",
      school: "R.P.M. Academy, Gorakhpur",
      year: "2019",
      description:
        "Completed 10th with excellent academic performance. Developed interest in technology, science and computer fundamentals.",
    },
  ];

  return (
    <section
      id="education"
      className="
        w-full px-8 md:px-16 lg:px-28 py-20 
        bg-white dark:bg-slate-900
        transition-all duration-700
      "
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2">
            Academic Background
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Education
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="
                bg-slate-50 dark:bg-slate-800 
                p-6 md:p-8 rounded-xl 
                border border-slate-200 dark:border-slate-700 
                shadow-md hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-600
                transition-all duration-500
              "
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-1 md:mt-0">
                  {edu.year}
                </span>
              </div>

              <p className="text-base font-medium text-slate-600 dark:text-slate-300 mb-4">
                {edu.school}
              </p>

              <p className="text-slate-700 dark:text-slate-400 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";

export default function Hero() {
  const greetings = ["Hey 👋", "Hello 👋", "Namaste 🙏"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = greetings[index];
    const typeSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % greetings.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="w-full min-h-screen flex items-center justify-center py-24 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6">
          <p className="text-sm md:text-base font-semibold text-accent-500 uppercase tracking-wide">
            Full Stack Developer
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Suraj Kumar
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 min-h-11">
            <span className="border-r-4 border-accent-500 pr-2 animate-pulse">
              {text}
            </span>
          </h2>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            I’m Suraj Kumar, a passionate Full-Stack Developer and currently
            pursuing B.Tech at MNNIT Allahabad. I love building scalable,
            user-focused web applications and have hands-on experience developing
            complete products like a Learning Management System and a Job Portal,
            featuring secure authentication, payment integration, dashboards, and
            real-time updates.
          </p>

          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href="#connections"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500 hover:bg-accent-700 text-white rounded-md font-semibold shadow-sm transition"
            >
              Connect
            </a>
            <a
              href="/Suraj_Resume.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-700">
            <img
              src="/image.jpeg"
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

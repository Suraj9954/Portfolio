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
    <section
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between 
        px-8 md:px-16 lg:px-28 py-20 pt-32
        bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50
        dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
        transition-all duration-700"
    >
      <div className="flex flex-col gap-8 max-w-2xl mt-10 lg:mt-0">
        <div className="space-y-4">
          <p className="text-sm md:text-base font-medium text-indigo-600 dark:text-indigo-400 tracking-wider uppercase">
            Full Stack Developer
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900 dark:text-white">
            Suraj Kumar
          </h1>
        </div>

        <h2 className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 min-h-[45px]">
          <span className="border-r-4 border-indigo-600 dark:border-indigo-400 pr-1 animate-pulse">
            {text}
          </span>
        </h2>

        <p
          className="text-base md:text-lg text-slate-600 dark:text-slate-400 
              leading-relaxed max-w-xl lg:max-w-2xl
              lg:mr-3"
        >
          I’m Suraj Kumar, a passionate Full-Stack Developer and currently
          pursuing B.Tech at MNNIT Allahabad. I love building scalable,
          user-focused web applications and have hands-on experience developing
          complete products like a Learning Management System and a Job Portal,
          featuring secure authentication, payment integration, dashboards, and
          real-time updates.
        </p>

        <div className="flex gap-4 mt-4">
          <a
            href="#connections"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Connect with Me
          </a>
          <a
            href="/Suraj_Resume.pdf"
            target="_blank"
            className="px-6 py-3 bg-white dark:bg-slate-800 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-slate-700 transition-all duration-300"
          >
            View Resume
          </a>
        </div>
      </div>

      <div className="mt-12 lg:mt-0">
        <div className="relative w-[260px] md:w-[340px] lg:w-[380px] aspect-[3/4]">
          <div
            className="absolute inset-0 bg-gradient-to-br 
                          from-indigo-500 to-purple-600 
                          rounded-3xl blur-2xl opacity-20"
          ></div>

          <div
            className="relative w-full h-full rounded-3xl overflow-hidden 
                      shadow-2xl ring-4 ring-white/20 dark:ring-slate-700/30
                      hover:scale-[1.02] transition-transform duration-500"
          >
            <img
              src="/Photo.jpeg"
              alt="Profile"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

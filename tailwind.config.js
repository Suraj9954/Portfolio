/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        accent: {
          50: "#f5f8ff",
          100: "#e6eefc",
          500: "#2563eb",
          700: "#1d4ed8",
        },
      },
      boxShadow: {
        subtle: "0 6px 18px rgba(16,24,40,0.06)",
      },
    },
  },
  plugins: [],
};

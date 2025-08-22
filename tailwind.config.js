/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 force class mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

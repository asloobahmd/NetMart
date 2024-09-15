/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#24303F",
        bgdark: "#1A222C",
        productbgdark: "#3d444d",
        bglight: "#F1F5F9",
      },
    },
  },
  plugins: [],
};

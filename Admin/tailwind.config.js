/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        sm: "480px",
        md: "768px",
        xmd: "630px",
        xxmd: "976px",
        lg: "1200px",
        xl: "1300px",
      },
    },
    screens: {
      sm: "480px",
      smm: "768px",
      md: "976px",
      lg: "1200px",
      xl: "1300px",
    },
    extend: {
      colors: {
        primary: "#24303F",
        bgdark: "#1A222C",
        bglight: "#F1F5F9",
      },
    },
  },
  plugins: [],
};

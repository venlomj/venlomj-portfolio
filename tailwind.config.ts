import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      screens: { xs: "520px", "2xl": "1400px" },
      colors: {
        "light-blue": "#3b82f6",
        primary: {
          // background: "rgb(11, 17, 32, .03)", //"rgba(255, 255, 255, .05)",
          background: "#fff",
          foreground: "#000",
          hbackground: "#F8F8F8",
        },
        secondary: {
          // background: "rgb(11, 17, 32)", //"rgba(255, 255, 255, .03)",
          // foreground: "rgb(11, 17, 32, 0.4)", //"rgba(255,255,255,0.4)",
          background: "rgb(1,1,11)",
          foreground: "#fff",
        },
        blue: {
          joust: "#56acff",
          cosmos: "#003049",
          hera: "#7179ef",
        },
        green: {
          benzol: "#00d372",
        },
        pink: {
          ice: "#d87cac",
        },
        dark: "#232A3C",
        medium: "#293245",
      },
    },
  },
  plugins: [],
};
export default config;

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
          background: "#fff",
          foreground: "#000",
          hbackground: "#F8F8F8",
        },
        secondary: {
          background: "rgb(1,1,11)",
          foreground: "#fff",
        },
        blue: {
          joust: "#56acff",
          cosmos: "#003049",
          hera: "#7179ef",
          DEFAULT: "#000075", // Add a default value for blue
        },
        green: {
          benzol: "#00d372",
        },
        pink: {
          ice: "#d87cac",
        },
        dark: "#232A3C",
        medium: "#293245",
        custom: {
          indigo: "#6610f2",
          purple: "#8C13B2",
          cyan: "#ecf1fd",
          blueGray: "#7393B3",
          gold: "#FFD700",
          mjBlue: "#2FB8FF",
          opPrimary: "rgba(0, 0, 117, 0.6)",
          npxOrange: "#e94e2a",
          linkedin: "#0072b1",
          white: "#fff",
          gray100: "#f8f9fa",
          gray200: "#e9ecef",
          gray300: "#dee2e6",
          gray400: "#ced4da",
          gray500: "#adb5bd",
          gray600: "#6c757d",
          gray700: "#495057",
          gray800: "#343a40",
          gray900: "#212529",
          black: "#000",
          // Add custom color
          primary: "#ff6347", // Example color; replace with your desired color
        },
      },
    },
  },
  plugins: [],
};

export default config;

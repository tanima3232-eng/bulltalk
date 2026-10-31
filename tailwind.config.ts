import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "rgba(var(--brand-navy-rgb), <alpha-value>)",
        gold: "#C9A75D",
        offwhite: "#F5F7FA",
        dark: "#27364B",
        "light-gold": "#FBF7EC",
        "light-navy": "#EDF3FA",
      },
      fontFamily: {
        sans: ["var(--font-noto)", "var(--font-inter)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

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
        navy: "#1A2E4A",
        gold: "#C9A84C",
        offwhite: "#F4F4F2",
        dark: "#333333",
        "light-gold": "#FFF8E7",
        "light-navy": "#E8EEF4",
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

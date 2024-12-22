import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        textColor: "var(--textColor)",
        themePrimary: "var(--themePrimary)",
        themeSecondary: "var(--themeSecondary)",
        themeAccent: "var(--themeAccent)",
        themeBackground: "var(--themeBackground)",
        themeHoverBackground: "var(--themeHoverBackground)",
        themeText: "var(--themeText)",
        themePrimaryIcon: "var(--themePrimaryIcon)",
        themeSecGradientHeader: "var(--themeSecGradientHeader)",
        themePrimGradientHeader: "var(--themeSecGradientHeader)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "inner-custom": "inset -5px 0px 4px 0px rgba(255, 255, 255, 1)",
        "inner-custom-2": "inset -20px -5px 2px 0px rgba(255, 255, 255, 1)",
        "inner-custom-3": "inset 0px 5px 20px 0px rgba(0, 0, 0, 0.06)",
        "inner-custom-4": "inset -4px -4px 4px 0px rgba(255, 255, 255, 1)",
        "inner-custom-5": "inset 4px 4px 2px 0px rgba(0, 0, 0, 0.07)",
        "inner-custom-6": "inset 6px 6px 20px 0px rgba(16, 41, 54, 1)",
        "inner-custom-7": "inset -2px -2px 2px 0px rgba(253, 253, 255, 1)",
        "inner-custom-8": "inset 1px 1px 2px 0px rgba(0, 0, 0, 0.35)",
        "outer-custom": "-8px -8px 15px 0px rgba(255, 255, 255, 0.15)",
        "outer-custom-1": "9px 9px 19px -5px rgba(0, 0, 0, 0.15)",
        "outer-custom-2": "7px 7px 31.8px 0px rgba(64, 112, 138, 1)",
        "outer-custom-3": "4px 4px 10px 0px rgba(0, 0, 0, 0.1)",
        "outer-custom-4": "4px 4px 10px 0px rgba(32, 1, 14, 0.8)",
      }
    },
  },
  plugins: [],
} satisfies Config;

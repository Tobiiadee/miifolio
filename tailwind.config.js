/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{ts,js,tsx,jsx}"],
  theme: {
    screens: {
      smPhone: "320px",
      tablet: "481px",
      laptop: "769px",
      desktop: "1024px",
    },
    extend: {
      keyframes: {
        pulsing: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      colors: {
        tranparent: "transparent",
        white: "#FFF",
        black: "#040406",
        text: "#028c6a",
        bgcolor: "#F5FEFD",
        hover: "#9fd6c8",
        tip: "#00000080",
        toast: "#000000cc",
        offwhite: "#ECF3F9",
        choco: "#D2691E",
        golden: "#B8860B",
        ghostwhite: "#ADD8E6",
        error: "#ff4500",
      },
    },
    plugins: [],
  },
};

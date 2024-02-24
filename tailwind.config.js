/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        proxima: ["var(--font-proxima)"],
      },
      colors: {
        primary: "#9D72AF",
        primaryLight: "#BB9AD1",
        primaryLighter: "#F9E9F2",
        secondary: "#B9E0EF",
        grayDark: "#6F6F6F",
        grayLight: "#9B9B9B",
      },
    },
  },
  plugins: [],
};

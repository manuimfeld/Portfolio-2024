/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

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
    },
  },
  plugins: [animations],
};

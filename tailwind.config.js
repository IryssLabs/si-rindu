/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sirindu: {
          green: "#16583D",
          lightgreen: "#2D7A4B",
          orange: "#F7931E",
          dark: "#333333",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slateBlue: "#016CC8",
        softSkyCyan: "#016CC8",
        charcoalGray: "#2E2E2E",
        mistGray: "#D9DDE2",
        sunsetPeach: "#016CC8",
        vibrantBlue: "#016CC8",
        brightCyan: "#016CC8",
        warmPeach: "#016CC8",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slateBlue: "#3F50D0",
        softSkyCyan: "#2F9FCF",
        charcoalGray: "#2E2E2E",
        mistGray: "#D9DDE2",
        sunsetPeach: "#F0733F",
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

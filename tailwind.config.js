/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#046BC6",
        primaryDark: "#035a9e",
        primaryLight: "#1a7fd4",

        // Legacy colors (keeping for backward compatibility)
        slateBlue: "#046BC6",
        headingBlue: "#046BC6",

        // Accent Colors
        softSkyCyan: "#5EEAD4",
        sunsetPeach: "#FB923C",
        vibrantBlue: "#3B82F6",
        brightCyan: "#06B6D4",
        warmPeach: "#F97316",

        // Neutral Colors
        charcoalGray: "#2E2E2E",
        mistGray: "#D9DDE2",

        // Semantic Colors
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        info: "#046BC6",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.08)",
        "soft-dark": "0 18px 45px rgba(0,0,0,0.3)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

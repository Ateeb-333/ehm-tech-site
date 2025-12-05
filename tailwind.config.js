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
        primary: "#046BC6",           // Main brand color
        primaryDark: "#035a9e",       // Darker variant for hover
        primaryLight: "#1a7fd4",      // Lighter variant
        
        // Legacy colors (keeping for backward compatibility)
        slateBlue: "#046BC6",         // Updated to match primary
        headingBlue: "#046BC6",       // Heading color
        
        // Accent Colors
        softSkyCyan: "#5EEAD4",       // Cyan accent
        sunsetPeach: "#FB923C",       // Peach/orange accent
        vibrantBlue: "#3B82F6",       // Bright blue
        brightCyan: "#06B6D4",       // Bright cyan
        warmPeach: "#F97316",         // Warm orange
        
        // Neutral Colors
        charcoalGray: "#2E2E2E",      // Dark gray
        mistGray: "#D9DDE2",          // Light gray
        
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
        "gradient": "gradient 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
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

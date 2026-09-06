/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // LIGHT
        ivory: "#FAF6F0",
        beige: "#F2E9DE",
        card: "#FFFFFF",
        clay: "#8B5E4D",
        gold: "#B08D57",
        espresso: "#5D493C",
        ink: "#3B2A20",
        line: "#DCCFBB",

        // DARK
        "dark-bg": "#171311",
        "dark-section": "#1D1714",
        "dark-card": "#241C18",
        "dark-text": "#F5EDE4",
        "dark-muted": "#C7B8AA",
        "dark-line": "#493A30",
        "dark-gold": "#C6A66B",
      },

      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Manrope'", "sans-serif"],
      },

      keyframes: {
        drawStroke: {
          "0%": {
            strokeDashoffset: "1",
          },
          "100%": {
            strokeDashoffset: "0",
          },
        },

        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(14px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
      },
    },
  },

  plugins: [],
};
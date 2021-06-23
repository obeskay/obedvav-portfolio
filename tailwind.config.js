const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: "jit",
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        dark: "#121E23",
        light: "#FFFFFF",
        primary: "#01A7C2",
        secondary: "#EE372C",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
        },
      },
      fontSize: {
        "3xl": ["2.5rem", "3.125rem"],
        "2xl": ["1.5rem", "1.875rem"],
        xl: ["1.25rem", "1.875rem"],
        lg: ["1.125rem", "1.6875rem"],
        base: ["1rem", "1.5rem"],
        sm: ["0.75rem", "1.125rem"],
      },
      backgroundImage: (theme) => ({
        noise: "url('/public/img/img-noise-361x370.png')",
        movingGradient:
          "radial-gradient(103.95% 244.38% at 6.18% 0%, #FFBD98 0%, #FF5947 42.19%, #FFBD98 100%)",
      }),
      animation: {
        noiseMove: "noiseMove 8s steps(10) infinite",
        gardientMove:
          "gradientMove 10s cubic-bezier(0.03, 0.30, 0.79, 1) infinite",
      },
      keyframes: {
        noiseMove: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "20%": { transform: "translate(-15%, 5%)" },
          "30%": { transform: "translate(7%, -25%)" },
          "40%": { transform: "translate(-5%, 25%)" },
          "50%": { transform: "translate(-15%, 10%)" },
          "60%": { transform: "translate(15%, 0%)" },
          "70%": { transform: "translate(0%, 15%)" },
          "80%": { transform: "translate(3%, 35%)" },
          "90%": { transform: "translate(-10%, 10%)" },
        },
        gradientMove: {
          "0%": {
            "background-position": "0% 50%",
          },
          "30%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        h1: { "@apply text-3xl": {} },
        h2: { "@apply text-2xl": {} },
        h3: { "@apply text-xl": {} },
        ".spaced-text": { "@apply tracking-[0.5rem] uppercase": "" },
      });
    }),
  ],
};

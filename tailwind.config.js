/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#eff3f3",
          100: "#dfe9e9",
          200: "#c1d4d7",
          300: "#97b5bc",
          400: "#7195a2",
          500: "#50788c",
          600: "#315b71",
          700: "#284b60",
          800: "#203d50",
          900: "#172d3b",
          950: "#10212d",
        },
        gray: {
          50: "#f6f6f1",
          100: "#eeefe9",
          200: "#dddeda",
          300: "#c6cbc4",
          400: "#929b93",
          500: "#596762",
          600: "#596762",
          700: "#42534e",
          800: "#2c3e38",
          900: "#172d3b",
          950: "#10212d",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

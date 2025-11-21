/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EBF1FF',
          100: '#D6E4FF',
          200: '#ADC8FF',
          300: '#85ADFF',
          400: '#5C91FF',
          500: '#407BFF', // Primary blue from SVG
          600: '#3362CC',
          700: '#264A99',
          800: '#1A3166',
          900: '#0D1933',
        },
        navy: {
          50: '#E8EDF5',
          100: '#D1DBE8',
          200: '#A3B7D1',
          300: '#7593BA',
          400: '#476FA3',
          500: '#0A2540', // Primary navy
          600: '#081E35',
          700: '#06172A',
          800: '#051628',
          900: '#030E1A',
        },
        gold: {
          50: '#F9F6EE',
          100: '#F3EDDD',
          200: '#E5D5A8',
          300: '#D7BD73',
          400: '#C9A961', // Primary gold
          500: '#B8954A',
          600: '#9F8040',
          700: '#7A6231',
          800: '#554421',
          900: '#2F2612',
        },
      },
    },
  },
  plugins: [],
}

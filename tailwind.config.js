/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 576px) { ... } Mobile

      'md': '768px',
      // => @media (min-width: 960px) { ... } Tablet

      'lg': '1280px',
      // => @media (min-width: 1440px) { ... } Desktop
    },
  },
  plugins: [],
}
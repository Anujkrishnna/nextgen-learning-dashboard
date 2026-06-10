/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",       // App router ke liye 
    "./components/**/*.{js,ts,jsx,tsx,mdx}",// Hamare components ke liye 💡
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}
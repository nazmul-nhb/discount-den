/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#124e65',
        'bg-secondary': '#1f89b1',
        'morgul-primary': '#002631',
        'morgul-secondary': '#d4d9d5',
      },
      backgroundImage: {
        wave: 'url("/src/assets/wave.svg")',
      },
    },
  },
  plugins: [],
};
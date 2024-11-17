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
        'discount-primary': '#002631',
        'discount-secondary': '#d4d9d5',
      },
      backgroundImage: {
        wave: 'url("/src/assets/wave.svg")',
      },
      keyframes: {
        growShrink: {
          '0%, 100%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        growShrink: 'growShrink 3s ease-in-out infinite',
      }
    }
  },
  plugins: [],
};
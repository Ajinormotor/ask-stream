/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        lavenderGray: '#CAC4D0',
        deepIndigo: '#272464',
        brightIndigo: '#625AFA',
      },
      backgroundImage: {
        'gradient-indigo': 'linear-gradient(90deg, #625AFA 0.05%, #272464 22.24%)'
      },
      fontFamily: {
        bricolage: ['Bricolage', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};

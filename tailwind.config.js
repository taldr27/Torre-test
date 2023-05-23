/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#27292d',
        secondary: '#d2e139',
        tertiary: '#373b41',
      },
      backgroundImage: {
        'primary-background': "url('/src/assets/primary-background1.jpg')",
      },
    },
  },
  plugins: [],
};

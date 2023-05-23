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
        primary: '#030408',
        secondary: '#aaa6c3',
        tertiary: '#100f1c',
      },
      backgroundImage: {
        'primary-background': "url('/src/assets/primary-background1.jpg')",
      },
    },
  },
  plugins: [],
};

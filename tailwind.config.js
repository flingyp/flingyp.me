/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*',
    './layouts/**/*',
    './components/**/*',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1500px',
    },
    extend: {},
  },
}

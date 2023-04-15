/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*',
    './layouts/**/*',
    './components/**/*',
  ],
  plugins: [
    require('@tailwindcss/typography'),
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
    extend: {
      backgroundColor: {
        light: '#ffffff',
        dark: '#242424',
      },
      animation: {
        scale: 'scale 1s ease-in-out infinite',
      },
      keyframes: {
        scale: {
          '0%,100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
}

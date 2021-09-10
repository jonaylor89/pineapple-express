module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'itl-nav-bar': '#101418',
        'itl-accent': '#6200ee',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

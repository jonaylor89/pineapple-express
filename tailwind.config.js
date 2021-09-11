module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'itl-nav-bar': '#101418',
        'itl-accent': '#6200ee',
      }, backgroundImage: theme => ({
        'landing-comm-1': "url('/assets/community_pic_1.png')",
        'landing-comm-2': "url('/assets/community_pic_2.png')",
      }),

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

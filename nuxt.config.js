export default {
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  vite: { ssr: false },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pineapple-express',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    'nuxt-vite',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/firebase',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      }
    }
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyBIHwGYfS7MGREOR4nSTYJxZPLXNApTJ3M',
      authDomain: 'in-the-loop-306520.firebaseapp.com',
      projectId: 'in-the-loop-306520',
      storageBucket: 'in-the-loop-306520.appspot.com',
      messagingSenderId: '269420857313',
      appId: '1:269420857313:web:1ace984d27362ddcf7f4a0',
      measurementId: 'G-D8EFYQBB2Q'
    },
    // onFirebaseHosting: process.env.NODE_ENV === 'development' ? false : true,
    services: {
      auth: {
        persistence: 'local', // default
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChangedAction',
          subscribeManually: false
        },
        ssr: false,
      },
      firestore: true,
      functions: true,
      storage: true,
      messaging: true,
      remoteConfig: true,
    },
  },

  fontawesome: {
    component: 'fa',
    suffix: true,
    icons: {
      solid: ['faHome', 'faBars'],
      brands: ['faApple', 'faGoogle'],
    }
  },

  loadingIndicator: {
    name: 'cube-grid',
    color: '#6200ee',
    background: 'black'
  }
}

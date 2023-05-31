export default {
  server: {
    port: 9999,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TheVaper',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Интернет магазин вэйпов The Vaper' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  auth: {
    redirect: {
      login: '/',
      callback: '/',
      logout: '/',
      home: '/'
    },
    cookie: {
      prefix: 'auth.TheVaper.',
      options: {
        path: '/',
        sameSite: 'strict'
      }
    },
    localStorage: false,
    strategies: {
      'laravelJWT': {
        provider: 'laravel/jwt',
        url: '/api',
        endpoints: {
          login: { url: '/auth/login', method: 'post' },
          refresh: { url: '/auth/refresh', method: 'post'},
          user: false,
          logout: false
        },
        token: {
          property: 'access_token',
          maxAge: 60 * 60
        },
        refreshToken: {
          maxAge: 20160 * 60
        },
      },
    }
  },

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL || 'https://the-vaper-back.itwonder.ru/',
    headers: {
      common: {
        'Accept': 'application/json'
      },
    },
    progress: false,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles/main.scss',
    '@/assets/styles/subclasses.scss',
    '@/assets/styles/hoopers.scss',
    '@/assets/styles/swipers.scss',
    'hooper/dist/hooper.css',
    'vue2-datepicker/index.css',
    'swiper/swiper-bundle.css',
  ],

  styleResources: {
    scss: [
      '@/assets/styles/substyles.scss',
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/hooperPlugin.js', mode: 'client' },
    { src: '@/plugins/v-mask.js', mode: 'client' },
    { src: '@/plugins/multiRangeSlider.js', mode: 'client' },
    { src: '@/plugins/datepicker.js', mode: 'client' },
    { src: '@/plugins/swiperSlider.js', mode: 'client' },
    { src: '@/plugins/clickOutside.js', mode: 'client' },
    '@/plugins/services.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/svg"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/auth-next',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
}

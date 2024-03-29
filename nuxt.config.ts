// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/content'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  content: {
    highlight: {
      theme: {
        default: "solarized-dark",
      }
    }
  },
  googleFonts: {
    families: {
      'Barlow': true,
      'Courier Prime': true
    }
  },
  devtools: { enabled: true }
})

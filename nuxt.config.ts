// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
  ],
  css: ['~/assets/styles/global.scss'],
  content: {
    highlight: {
      theme: {
        default: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
    markdown: {
      toc: {
        depth: 3,
      },
      anchorLinks: true,
    },
    documentDriven: true,
  },
})

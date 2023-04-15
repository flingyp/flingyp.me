// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
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
        default: 'github-light',
        dark: 'github-dark-dimmed',
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

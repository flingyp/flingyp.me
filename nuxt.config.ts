// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
  ],
  css: ['~/assets/styles/global.scss'],
})

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@hypernym/nuxt-gsap',
  ],
  css: ['~/assets/styles/global.scss'],
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'author',
          content: 'flingyp',
        },
        {
          name: 'description',
          content: 'This is a website of flingyp for recording technology, growth, and life.',
        },
        {
          name: 'keywords',
          content: 'flingyp, flingyp.me, website, nuxt3',
        },
        {
          name: 'referrer',
          content: 'no-referrer',
        },
      ],
    },
  },
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

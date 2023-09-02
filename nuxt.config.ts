// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@hypernym/nuxt-gsap',
    '@vite-pwa/nuxt'
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
      link:[
        {
          rel:'manifest',
          href:'/manifest.webmanifest'
        }
      ]
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
  // Reference article: https://www.xiaolinboke.com/detail/374e236e-5f5a-4aae-914d-c07288d035a5#catalogue17
  // Manifest Logo Website: https://lp-pwa.gitee.io/pwa-genicon/
  pwa: {
    strategies: 'generateSW',
    manifest: {
      name: 'flingyp',  // 应用名称
      short_name: 'flingyp', // 这里是当name过长时会显示short_name的名称
      theme_color: '#ffffff',  // 应用主题颜色
      description: "Shows random fox pictures. Hey, at least it isn't cats.", // 描述
      display: "fullscreen", // 设置配置app图标 以下图片资源放在public
      icons: [
        {
          src: '/images/pwa-128x128.png',
          sizes: '128x128',
          type: 'image/png',
        },
        {
          src: '/images/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/images/pwa-256x256.png',
          sizes: '256x256',
          type: 'image/png',
        },
        {
          src: '/images/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
      start_url: "/"  // 设置应用打开的路由（路径） 必须是相对路径不能用绝对
    },
  }
})

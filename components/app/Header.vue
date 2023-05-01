<script setup lang="ts">
import { useRandomString } from '@flypeng/tool/browser'
import LightLogo from '~/assets/images/light_logo.png'
import DarkLogo from '~/assets/images/dark_logo.png'

const { isDark, toggle } = useTheme()

const logoSrc = computed(() => (isDark.value ? DarkLogo : LightLogo))
</script>
<template>
  <header
    class="
    sticky top-0 flex items-center justify-between mb-2 px-6 py-4 shadow-sm text-lg
    backdrop-filter backdrop-blur-lg
  "
  >
    <NuxtLink
      to="/"
      title="Home"
    >
      <!-- fix: solve image cache question -->
      <img
        alt="Logo"

        :src="`${logoSrc}?tempid=${useRandomString()}`"
        class="w-20 object-cover"
      >
    </NuxtLink>

    <nav
      class="space-x-6 cursor-pointer"
    >
      <NuxtLink to="/posts">
        <Icon name="carbon-notebook" />
      </NuxtLink>
      <NuxtLink to="/project">
        <Icon name="carbon-delivery-parcel" />
      </NuxtLink>
      <NuxtLink
        to="https://github.com/flingyp"
        target="_blank"
      >
        <Icon name="carbon:logo-github" />
      </NuxtLink>
      <Icon
        v-show="isDark"
        name="carbon:light-filled"
        @click="toggle(false)"
      />
      <Icon
        v-show="!isDark"
        name="akar-icons:moon-fill"
        @click="toggle(true)"
      />
    </nav>
  </header>
</template>

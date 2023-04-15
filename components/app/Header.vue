<template>
  <header
    class="
      flex items-center justify-between mb-2
      px-6 py-4 shadow-sm text-lg
    "
  >
    <NuxtLink
      to="/"
      title="Home"
    >
      LOGO
    </NuxtLink>

    <nav
      class="
        space-x-6 cursor-pointer
      "
    >
      <Icon
        name="carbon:blog"
      />
      <NuxtLink to="/project">
        <Icon name="carbon-delivery-parcel" />
      </NuxtLink>
      <Icon name="carbon:bookmark" />
      <Icon name="carbon-notebook" />
      <Icon name="carbon:logo-github" />
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

<script setup lang="ts">
const { isDark, toggle } = useTheme()
</script>

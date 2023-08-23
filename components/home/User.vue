<script setup lang="ts">
const { info } = useGithub()
const { $gsap } = useNuxtApp()

onMounted(() => {
  const tl = $gsap.timeline()
  tl.to('.user-avatar', {
    scale: 1.05, duration: 1, yoyo: true, repeat: -1,
  })
})
</script>

<template>
  <div class="flex flex-col md:flex-row md:items-center space-x-0 md:space-x-4">
    <div class="w-28 md:w-32 self-center object-cover">
      <img
        :src="info?.avatar"
        alt="User Avatar"
        class="user-avatar w-full h-full rounded-full object-cover"
      >
    </div>

    <div class="flex flex-col">
      <h2 class="user-name text-3xl font-semibold capitalize opacity-80 text-center md:text-start mt-4 md:mt-0">
        {{ info?.name }}
      </h2>
      <p class="my-2 font-extralight text-center md:text-start">
        {{ info?.bio }}
      </p>
      <div class="flex items-center justify-center md:justify-between space-x-2 md:space-x-0 font-extralight">
        <div class="space-x-1 flex items-center">
          <Icon name="carbon:workspace" />
          <span class="text-sm">{{ info?.company }}</span>
        </div>
        <div class="space-x-1 flex items-center">
          <Icon name="carbon:location" />
          <span class="text-sm">{{ info?.location }}</span>
        </div>
        <div class="space-x-1 flex items-center">
          <Icon name="carbon:link" />
          <span class="text-sm">{{ info?.blog }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

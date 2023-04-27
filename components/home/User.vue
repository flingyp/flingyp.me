<script setup lang="ts">
const { info } = useGithub()
</script>

<template>
  <div class="flex flex-col md:flex-row md:items-center space-x-0 md:space-x-4">
    <div class="w-32 h-32 md:w-36 md:h-36 self-center">
      <img
        :src="info?.avatar"
        alt="User Avatar"
        class="w-full h-full rounded-full object-cover"
      >
    </div>

    <div class="flex flex-col">
      <h2 class="text-3xl font-semibold capitalize opacity-80 text-center md:text-start mt-4 md:mt-0">
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

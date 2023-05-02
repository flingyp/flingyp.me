<script setup lang="ts">
import { GithubRepo } from '~/types'

interface ProjectIntroduction {
  project: GithubRepo
}

defineProps<ProjectIntroduction>()
</script>

<template>
  <div class="h-full flex flex-col space-y-2">
    <div class="flex items-center space-x-3">
      <div class="flex items-center space-x-2">
        <Icon
          name="ri:git-repository-line"
          size="14"
        />
        <NuxtLink
          class="text-base cursor-pointer"
          :to="project.url"
          target="_blank"
        >
          {{ project.name }}
        </NuxtLink>
      </div>
      <span class="px-1.5 py-0.5 rounded-xl text-xs text-green-700 bg-green-100">Public</span>
    </div>

    <span
      class="
        text-ellipsis
        flex-1 text-xs md:text-sm
      text-gray-600 dark:text-gray-400
      "
    >{{ project.description }}</span>
    <div class="text-xs dark:text-gray-200 flex items-center space-x-1">
      <p
        :style="{ backgroundColor: project.languageColor }"
        class="w-2 h-2 rounded-full"
      />
      <span>{{ project.language }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .text-ellipsis {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
</style>

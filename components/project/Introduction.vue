<script setup lang="ts">
import { Project } from '~/types'

interface ProjectIntroduction {
  project: Project
}

defineProps<ProjectIntroduction>()
</script>

<template>
  <div class="flex flex-col space-y-2">
    <div class="flex items-center space-x-2">
      <div class="flex items-center space-x-1">
        <Icon name="ri:git-repository-line" />
        <span class="text-base">{{ project.name }}</span>
      </div>
      <span class="px-1 py-0.5 rounded-xl text-xs text-green-700 bg-green-100">Public</span>
    </div>
    <span class="text-gray-600 dark:text-gray-400 text-xs">{{ project.description }}</span>
    <div class="text-xs dark:text-gray-200 flex items-center space-x-1">
      <p class="w-2 h-2 rounded-full bg-blue-400" />
      <span>{{ project.language }}</span>
    </div>
  </div>
</template>

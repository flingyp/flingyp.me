<script setup lang="ts">
import { ProjectCollection } from '~/types'

const projects = ref<ProjectCollection[]>([
  {
    name: 'Templates',
    description: 'Template starer for engineering projects',
    children: [
      {
        id: 1,
        name: 'vcom-starter',
        description: 'Template starter for Vue 3, Composition API, and Tailwind CSS',
        url: 'https://github.com/flingyp/vcom-starter',
        language: 'TypeScirpt',
      },
      {
        id: 2,
        name: 'vue-starter',
        description: 'Template starter for Vue 3, Composition API, and Tailwind CSS',
        url: 'https://github.com/flingyp/vue-starter',
        language: 'Vue',
      },
      {
        id: 3,
        name: 'nest-starter',
        description: 'Template starter for Vue 3, Composition API, and Tailwind CSS',
        url: 'https://github.com/flingyp/nest-starter',
        language: 'TypeScirpt',
      },
    ],
  },
  {
    name: 'Plugins',
    description: 'Plugins for Vue 3, Composition API, and Tailwind CSS',
    children: [
      {
        id: 4,
        name: 'vue-3-utilities',
        description: 'Vue 3 utilities',
        url: 'https://github.com/flingyp/vcom-starter',
        language: 'TypeScirpt',
      },
    ],
  },
  {
    name: 'Configs',
    description: 'Plugins for Vue 3, Composition API, and Tailwind CSS',
    children: [
      {
        id: 5,
        name: '@flingyp/eslint-config',
        description: 'Vue 3 utilities',
        url: 'https://github.com/flingyp/vcom-starter',
        language: 'TypeScirpt',
      },
    ],
  },
])
</script>

<template>
  <div class="sm:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 mx-6 sm:mx-auto mt-[2%]">
    <h2 class="text-2xl font-semibold mb-1 md:mb-2">
      Projects
    </h2>

    <p class="text-gray-600 dark:text-gray-400 mb-4">
      Personal related open source projects list
    </p>

    <div class="space-y-4">
      <div
        v-for="(item, index) in projects"
        :key="index"
      >
        <h3 class="mb-2">
          {{ item.name }}
        </h3>

        <ul class="grid gap-3 grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-5">
          <li
            v-for="(project) in item.children"
            :key="project.name"
            class="p-4 rounded border border-neutral-300 dark:border-neutral-700"
          >
            <ProjectIntroduction :project="project" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

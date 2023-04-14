<script setup lang="ts">
const projects = ref([
  {
    name: 'Templates',
    description: 'Template starer for engineering projects',
    children: [
      {
        name: 'vcom-starter',
        description: 'Template starter for Vue 3, Composition API, and Tailwind CSS',
        url: 'https://github.com/flingyp/vcom-starter',
        language: 'TypeScirpt',
      },
      {
        name: 'vue-starter',
        description: 'Template starter for Vue 3, Composition API, and Tailwind CSS',
        url: 'https://github.com/flingyp/vue-starter',
        language: 'Vue',
      },
      {
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
  <div
    class="
      sm:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 mx-6 sm:mx-auto mt-[2%]
    "
  >
    <h2
      class="
        text-2xl font-semibold
      "
    >
      Projects
    </h2>
    <p
      class="
        text-gray-600 dark:text-gray-400
      "
    >
      Personal related open source projects list
    </p>

    <div class="space-y-4 mt-4">
      <div
        v-for="(item, index) in projects"
        :key="index"
      >
        <h3 class="text-xl mb-2">
          {{ item.name }}
        </h3>

        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <li
            v-for="(project) in item.children"
            :key="project.name"
            class="
              border border-stone-200 dark:border-stone-700
              px-4 py-2 rounded-md flex flex-col space-y-2 cursor-pointer
              hover:bg-stone-100 dark:hover:bg-stone-800
              transition duration-700
            "
          >
            <div>
              <span
                class="
                  space-x-0.5 mr-2
                "
              >
                <Icon name="ri:git-repository-line" />
                <label>{{ project.name }}</label>
              </span>
              <span
                class="px-1 py-0.5 rounded-xl text-xs
               text-green-700 bg-green-100"
              >Public</span>
            </div>
            <span
              class="
              text-gray-600 dark:text-gray-400 text-xs
              "
            >{{ project.description }}</span>
            <span class="text-sm dark:text-gray-200">{{ project.language }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

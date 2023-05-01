<script setup lang="ts">
useHead({ title: 'Project | flingyp' })

const { repoCollection, getGithubRepos } = useGithub()
await getGithubRepos()
</script>

<template>
  <div class="sm:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 mx-6 sm:mx-auto mt-[2%]">
    <h2 class="text-2xl font-semibold mb-1 md:mb-2">
      Projects
    </h2>

    <p class="text-gray-600 dark:text-gray-400 mb-4">
      Personal related open source projects list
    </p>

    <div class="space-y-8">
      <div
        v-for="(item, index) in repoCollection"
        :key="index"
      >
        <h3 class="mb-2">
          {{ item.name }}
        </h3>

        <ul
          v-if="item.collection"
          class="grid gap-3 grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-5"
        >
          <li
            v-for="repo in item.collection"
            :key="repo.name"
            class="p-4 rounded border border-neutral-300 dark:border-neutral-700"
          >
            <ProjectIntroduction :project="repo" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getGithubInfo, getGithubRepos } = useGithub()
await getGithubInfo()
await getGithubRepos()
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

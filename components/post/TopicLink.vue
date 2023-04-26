<script setup lang="ts">
import { Topic } from '~/types'

interface TopicLink {
  topic: Topic
}

defineProps<TopicLink>()
</script>

<template>
  <li>
    <NuxtLink
      :to="`#${topic.id}`"
      class="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
    >
      {{ topic.text }}
    </NuxtLink>

    <div v-if="topic.children">
      <ul class="pl-6">
        <TopicLink
          v-for="(child,index) in topic.children"
          :key="index"
          :topic="child"
        />
      </ul>
    </div>
  </li>
</template>

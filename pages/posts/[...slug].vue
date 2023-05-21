<script setup lang="ts">
import { Topic } from '~/types'

const route = useRoute()
const path = computed(() => route.path)

const { post, getPostDetail } = usePost()
await getPostDetail(path.value)

const topicList = computed<Topic[]>(() => {
  if (post.topic) return post.topic
  return [{ id: '-1', depth: 0, text: 'Topic not found' }]
})
</script>

<template>
  <nav class="fixed right-1 p-4 rounded hidden md:block">
    <ul class="flex flex-col space-y-0.5">
      <li
        v-for="(topic,index) in topicList"
        :key="index"
      >
        <PostTopicLink :topic="topic" />
      </li>
    </ul>
  </nav>

  <main
    class="prose prose-violet prose-neutral dark:prose-invert mt-4 md:mt-8 mx-4 md:mx-auto
    prose-pre:bg-[#fafafa] dark:prose-pre:bg-[#18181a] prose-h1:mb-4 prose-h1:text-3xl"
  >
    <ContentDoc />
  </main>
</template>

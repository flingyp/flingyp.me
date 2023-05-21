<script setup lang="ts">
import dayjs from 'dayjs'
import relativeTimePlugin from 'dayjs/plugin/relativeTime'

import { Post } from '~/types'

dayjs.extend(relativeTimePlugin)

interface PostIntroduction {
  post: Post
}

defineProps<PostIntroduction>()
</script>

<template>
  <div class="sm:w-1/2 mx-auto">
    <div class="w-3/5 sm:min-w-fit sm:w-4/5  mx-auto flex flex-col">
      <NuxtLink :to="post.path">
        <h2 class="text-xl">
          {{ post.title }}
        </h2>
      </NuxtLink>
      <p class="text-sm my-0.5">
        {{ post.description }}
      </p>
      <p class="text-sm text-gray-700 dark:text-gray-300">
        {{ dayjs(post.createTime).fromNow() }}
      </p>
    </div>
  </div>
</template>

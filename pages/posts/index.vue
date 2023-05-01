<script setup lang="ts">
useHead({ title: 'Post | flingyp' })

const { postList, getPostList } = usePost()
await getPostList()
</script>

<template>
  <div class="sm:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 mx-6 sm:mx-auto mt-[2%]">
    <div
      v-if="postList && postList.length"
      class="space-y-8"
    >
      <PostIntroduction
        v-for="post in postList"
        :key="post.id"
        :post="post"
      />
    </div>
    <div v-else>
      Post not found
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDebounce } from '@flypeng/tool/browser'

useHead({ title: 'Post | flingyp' })

const curPage = ref(1)
const curSize = ref(10)
const postTotal = ref(0)
const { postList, getPostList } = usePost()
const { postListTotal } = await getPostList(curPage, curSize)
postTotal.value = postListTotal

// 触底加载
const loadingMore = async () => {
  curPage.value++
  if (postList.value!.length >= postTotal.value) return
  await getPostList(curPage, curSize)
}

const documentScroll = useDebounce(() => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement
  if (Math.ceil(scrollTop + clientHeight) >= scrollHeight) {
    loadingMore()
  }
}, 1000)

onMounted(() => {
  window.addEventListener('scroll', documentScroll)
})

</script>

<template>
  <div class="sm:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 mx-6 sm:mx-auto mt-[2%]">
    <div
      v-if="postList && postList.length"
      class="space-y-10"
    >
      <PostIntroduction
        v-for="(post, index) in postList"
        :key="index"
        :post="post"
      />
    </div>
    <div v-else>
      Post not found
    </div>
  </div>
</template>

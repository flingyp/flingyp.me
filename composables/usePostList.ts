import { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { Post } from '~/types'

export const usePostList = () => {
  const parsedContentList = ref<ParsedContent[]>()

  const postList = computed(() => parsedContentList.value?.map<Post>((item) => ({
    id: item.id,
    title: item.title || '',
    description: item.description,
    createTime: item.createTime,
    // eslint-disable-next-line no-underscore-dangle
    path: item._path || '/',
  })))

  const getPostList = async () => {
    parsedContentList.value = await queryContent('/').find()
    console.log('parsedContentList->>', parsedContentList)
  }

  return {
    postList,

    getPostList,
  }
}

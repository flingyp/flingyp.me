import { ParsedContent } from '@nuxt/content/dist/runtime/types'

import { Post } from '~/types'
import { convertPost } from './convert/post'

const postContentList = ref<ParsedContent[]>()
const post = reactive<Post>({
  id: -1,
})

export const usePost = () => {
  const postList = computed(() => postContentList.value?.map<Post>((item) => ({
    id: item.id,
    title: item.title || '',
    description: item.description,
    createTime: item.createTime,
    // eslint-disable-next-line no-underscore-dangle
    path: item._path || '/',
  })))

  const getPostList = async () => {
    postContentList.value = await queryContent('/').find()
  }

  const getPostDetail = async (_path: string) => {
    const responseContent = await queryContent().where({ _path }).findOne()
    Object.assign(post, convertPost(responseContent))
  }

  return {
    post,
    postList,

    getPostList,
    getPostDetail,
  }
}

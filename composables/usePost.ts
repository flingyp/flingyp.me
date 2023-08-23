import { ParsedContent } from '@nuxt/content/dist/runtime/types'

import { Post } from '~/types'
import { convertPost } from './convert/post'

const post = reactive<Post>({
  id: -1,
})
const postContentList = ref<ParsedContent[]>()

export const usePost = () => {
  const postList = computed(() => postContentList.value?.map<Post>((item) => ({
    id: item.id,
    title: item.title || '',
    description: item.description,
    createTime: item.createTime,
    updateTime: item.updateTime,
    // eslint-disable-next-line no-underscore-dangle
    path: item._path || '/',
  })))

  const getPostList = async (page: Ref<number>, size: Ref<number>) => {
    const fetchPostList = await queryContent().skip((page.value - 1) * size.value).limit(size.value).find()
    // const postListTotal = await queryContent().count()
    // TODO: 临时写死，count() API @nuxt/content 还没有发布到最新版本中
    // https://content.nuxtjs.org/api/composables/query-content#count
    const postListTotal = 20
    postContentList.value = postContentList.value?.length ? [...postContentList.value, ...fetchPostList] : fetchPostList
    return {
      fetchPostList,
      postListTotal,
    }
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

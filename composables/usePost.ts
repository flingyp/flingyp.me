import { Post } from '~/types'

export const usePost = async (path: string) => {
  const post = reactive<Post>({
    id: -1,
  })

  const getPostDetail = async (_path: string): Promise<Post> => {
    const responseContent = await queryContent().where({ _path }).findOne()
    return {
      id: responseContent.id,
      title: responseContent.title || '',
      description: responseContent.description,
      createTime: responseContent.createTime,
      // eslint-disable-next-line no-underscore-dangle
      path: responseContent._path || '/',
      topic: responseContent.body.toc.links,
    }
  }

  Object.assign(post, await getPostDetail(path))

  return {
    post,
  }
}

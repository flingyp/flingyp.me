import { Post } from '~/types'

export const convertPost = (data: any): Post => ({
  id: data.id,
  title: data.title || '',
  description: data.description,
  createTime: data.createTime,
  // eslint-disable-next-line no-underscore-dangle
  path: data._path || '/',
  topic: data.body.toc.links,
})

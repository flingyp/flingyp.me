import { GithubInfo } from '~/types'

export const convertGithubInfo = (data: any) => {
  const info: GithubInfo = {
    id: data.id,
    name: data.name,
    blog: data.blog,
    avatar: data.avatar_url,
    bio: data.bio,
    company: data.company ?? 'Undefined',
    followers: data.followers,
    following: data.following,
    location: data.location,
  }

  return info
}

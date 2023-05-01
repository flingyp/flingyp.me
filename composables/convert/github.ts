import { GithubInfo, GithubRepo } from '~/types'

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

export const convertGithubRepo = (data: any) => {
  const repoList: GithubRepo[] = data.map((item: any) => ({
    id: item.id,
    url: item.html_url,
    name: item.name,
    description: item.description || 'Undefined',
    language: item.language || 'Undefined',
    visibility: item.visibility || 'Private',
    topics: item.topics || [],
  }))

  return repoList
}

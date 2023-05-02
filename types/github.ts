export interface GithubInfo {
  id: number
  name?: string
  blog?: string
  avatar?: string
  bio?: string
  company?: string
  followers?: number
  following?: number
  location?: string
}

export interface GithubRepo {
  id: number
  url: string
  name: string
  description?: string
  language: string
  languageColor?: string
  visibility?: string
  topics?: string[]
}

export type GithubReposCollection = {
  name: string
  collection?: GithubRepo[]
}

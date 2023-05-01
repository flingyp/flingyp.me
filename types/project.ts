export interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  language: string;
}

export type ProjectCollection = {
  name: string
  description: string
  children: Project[]
}

export interface GithubRepo {
  id: number
  url: string
  name: string
  description?: string
  language?: string
  visibility?: string
  topics?: string[]
}

export type GithubRepoCollection = {
  name: string
  collection?: GithubRepo[]
}

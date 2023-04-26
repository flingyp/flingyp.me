export interface Topic {
  id: string
  depth: number
  text: string
  children?: Topic[]
}

export interface Post {
  id: number
  title?: string
  description?: string
  createTime?: string
  path?: string
  topic?: Topic[]
}

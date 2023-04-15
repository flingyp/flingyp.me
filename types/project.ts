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

export interface PortfolioData {
  home: HomeFirestoreData
  about: AboutFirestoreData
  projects: ProjectFirestoreData[]
}

export interface HomeFirestoreData {
  title: string
  text: string
}

export interface AboutFirestoreData {
  text: string[]
}

export interface ProjectFirestoreData {
  id: number
  name: string
  active: boolean
  description: string
  imageURL: string
  githubRepoUrl: string
  applicationUrl?: string
  stack: string[]
}

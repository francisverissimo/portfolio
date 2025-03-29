import { ApiModel } from './api'

interface RepoResponse {
  name: string
  html_url: string
  homepage: string
  description: string
  topics: string[]
}

interface Content {
  url: string
  download_url: string
}

export interface Project extends RepoResponse {
  screenshots: Content[] | undefined
}

export class ProjectService {
  static async getProjects() {
    const username: string = import.meta.env.VITE_GITHUB_USERNAME
    const envRepos: string[] = import.meta.env.VITE_GITHUB_REPOS.split(',') || []

    if (!username || !envRepos.length) {
      throw new Error('GitHub username or repositories not configured.')
    }

    try {
      const [reposResponse, contentsResponse] = await Promise.all([
        ApiModel.getRepos(username),
        Promise.all(envRepos.map((repo) => ApiModel.getContentsRepo(username, repo))),
      ])

      if (!reposResponse.ok || contentsResponse.some((res) => !res.ok)) {
        throw new Error('failed to fetch GitHub data.')
      }

      const [publicRepos, contents] = await Promise.all([
        reposResponse.json() as Promise<RepoResponse[]>,
        Promise.all(contentsResponse.map((repo) => repo.json())) as Promise<Content[][]>,
      ])

      const repos = publicRepos.filter((repo) => envRepos.includes(repo.name))

      return repos.map((repo) => {
        return {
          name: repo.name,
          html_url: repo.html_url,
          homepage: repo.homepage,
          description: repo.description,
          topics: repo.topics,
          screenshots: contents.find((cont) => cont[0].url.includes(repo.name)),
        }
      }) as Project[]
    } catch (err) {
      console.error('failed to load projects: ', err)
      return []
    }
  }
}


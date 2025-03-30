import { ApiModel } from './api'

interface Repo {
  name: string
  html_url: string
  homepage: string
  description: string
  topics: string[]
}

interface Content {
  name: string
  url: string
  download_url: string
}

export interface Project extends Repo {
  logo?: string
  screenshots: Content[] | []
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
        reposResponse.json() as Promise<Repo[]>,
        Promise.all(contentsResponse.map((repo) => repo.json())) as Promise<Content[][]>,
      ])

      const repos = publicRepos.filter((repo) => envRepos.includes(repo.name))

      return repos.map((repo) => {
        const repoContents = contents.find((cont) => cont[0].url.includes(repo.name))
        let logo = ''
        const screenshots: Content[] = []

        if (repoContents) {
          for (let repo of repoContents) {
            if (repo.name.startsWith('logo')) {
              logo = repo.download_url
            } else {
              screenshots.push(repo)
            }
          }
        }

        return {
          name: repo.name,
          html_url: repo.html_url,
          homepage: repo.homepage,
          description: repo.description,
          topics: repo.topics,
          logo,
          screenshots,
        }
      }) as Project[]
    } catch (err) {
      console.error('failed to load projects: ', err)
      return []
    }
  }
}

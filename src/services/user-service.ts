export interface GithubUser {
  avatar_url: string
  name: string
  bio: string
}

export class UserService {
  static async getUser() {
    const username = import.meta.env.VITE_GITHUB_USERNAME as string

    try {
      const response = await fetch(`https://api.github.com/users/${username}`)

      if (!response.ok) {
        throw Error('Error on request user.')
      }

      return (await response.json()) as GithubUser
    } catch (error) {
      return null
    }
  }
}


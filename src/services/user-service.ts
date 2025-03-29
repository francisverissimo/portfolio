import { ApiModel } from './api'

export interface GithubUser {
  avatar_url: string
  name: string
  bio: string
}

export class UserService {
  static async getUser() {
    const username = import.meta.env.VITE_GITHUB_USERNAME as string

    try {
      const response = await ApiModel.getUser(username)

      if (!response.ok) {
        throw Error('Error on request user.')
      }

      const user = await response.json()
      return user as GithubUser
    } catch (err) {
      console.error(err)
      return null
    }
  }
}

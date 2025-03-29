export class ApiModel {
  static async getUser(username: string): Promise<Response> {
    return await fetch(`https://api.github.com/users/${username}`)
  }

  static async getRepos(username: string): Promise<Response> {
    return await fetch(`https://api.github.com/users/${username}/repos`)
  }

  static async getRepo(username: string, repo_name: string): Promise<Response> {
    return await fetch(`https://api.github.com/repos/${username}/${repo_name}`)
  }

  static async getContentsRepo(username: string, repo_name: string) {
    return await fetch(`https://api.github.com/repos/${username}/${repo_name}/contents/.github/`)
  }
}
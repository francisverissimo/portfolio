export interface HomeFirestoreData {
  title: string;
  text: string;
}

export interface AboutFirestoreData {
  text: string[];
}

export interface ProjectFirestoreData {
  id: number;
  name: string;
  description: string;
  imageURL: string;
  githubRepoUrl: string;
  applicationUrl?: string;
  stack: string[];
}

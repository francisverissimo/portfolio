import { useEffect, useState } from 'react'
import { Project, ProjectService } from '../services/project-service'
import { ProjectCard } from './project-card'
import { Loading } from './loading'

export function Projects() {
  const [projects, setProjects] = useState<Project[]>()

  async function getProjects() {
    const projects = await ProjectService.getProjects()
    if (projects) setProjects(projects)
  }

  useEffect(() => {
    getProjects()
  }, [])

  if (!projects) return <Loading />

  return (
    <div id="projects" className="min-h-screen w-full bg-zinc-800 py-20 text-zinc-50">
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center">
        <div className="flex flex-col items-center px-4">
          <p className="text-lg italic">Alguns dos meus últimos</p>
          <p className="text-4xl font-bold uppercase">projetos</p>
        </div>

        <div className="flex flex-col gap-x-5 gap-y-14 pt-8">
          {projects
            .map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
        </div>
      </div>
    </div>
  )
}

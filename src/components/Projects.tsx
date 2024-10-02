import { ProjectFirestoreData } from '../types'
import { CardProject } from './CardProject'

interface ProjectsProps {
  projectsData: ProjectFirestoreData[]
}

export function Projects({ projectsData }: ProjectsProps) {
  return (
    <div id="projects" className="min-h-screen w-full bg-zinc-800 py-20 text-zinc-50">
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center">
        <div className="flex flex-col items-center px-4">
          <p className="text-lg italic">Alguns dos meus últimos</p>

          <p className="text-4xl font-bold uppercase">projetos</p>
        </div>

        <div className="flex flex-col gap-x-5 gap-y-14 pt-8">
          {projectsData
            .filter((project) => project.active)
            .map((project, index) => (
              <CardProject key={project.id} index={index} project={project} />
            ))}
        </div>
      </div>
    </div>
  )
}

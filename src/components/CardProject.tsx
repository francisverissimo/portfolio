import { ProjectFirestoreData } from '../types'
import { GithubLogo, Globe } from 'phosphor-react'

type CardProjectProps = {
  project: ProjectFirestoreData
  index: number
}

export function CardProject({ project, index }: CardProjectProps) {
  const { name, description, stack, applicationUrl, githubRepoUrl, imageURL } = project

  const classNamesCard = 'flex flex-col items-start '.concat(
    index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'
  )

  const descriptionSplitted = description.split('.').filter((item) => item.trim() !== '')

  return (
    <div className={classNamesCard}>
      <img
        src={imageURL}
        className="aspect-video w-full object-cover md:max-w-[60%] md:rounded-lg"
      />

      <div className="flex h-full w-full flex-col items-center justify-center gap-y-4 p-4">
        <strong className="text-xl font-medium">{name}</strong>

        {descriptionSplitted.map((item, index) => {
          return (
            <p key={index} className="text-justify indent-10 text-lg">
              {item.trim().concat('.')}
            </p>
          )
        })}

        <div className="flex flex-wrap justify-center gap-2">
          {stack.map((tech, i) => (
            <span key={i} className="text-sm text-orange-500">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {applicationUrl && (
            <a
              href={applicationUrl}
              target="_blank"
              className="flex w-fit items-center font-medium duration-200 hover:cursor-pointer hover:text-sky-500"
            >
              <Globe size={20} className="mr-1" weight="fill" />

              <span>VER DEMONSTRAÇÃO</span>
            </a>
          )}

          <a
            href={githubRepoUrl}
            target="_blank"
            className="flex w-fit items-center text-zinc-200 duration-200 hover:cursor-pointer hover:text-sky-500"
          >
            <GithubLogo size={20} className="mr-1" weight="fill" />
            <span>VER NO GITHUB</span>
          </a>
        </div>
      </div>
    </div>
  )
}

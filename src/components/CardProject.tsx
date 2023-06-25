import { ProjectFirestoreData } from "../types";
import { Code, Globe } from "phosphor-react";

type CardProjectProps = {
  project: ProjectFirestoreData;
  index: number;
};

export function CardProject({ project, index }: CardProjectProps) {
  const { name, description, stack, applicationUrl, githubRepoUrl } = project;

  return (
    <div className={`flex flex-col items-start ${index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"} `}>
      <img src={project.imageURL} className="aspect-video w-full md:max-w-[60%] md:rounded-lg" />

      <div className="flex h-full w-full flex-col items-center justify-center gap-y-4 p-4">
        <strong className="text-xl font-medium">{name}</strong>

        <p className="text-lg">{description}</p>

        <div className="flex flex-wrap justify-center gap-2">
          {stack.map((tech, i) => (
            <span key={i} className="text-sm text-orange-500">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          {applicationUrl && (
            <a
              href={applicationUrl}
              target="_blank"
              className="flex w-fit items-center font-medium duration-200 hover:cursor-pointer hover:text-orange-500"
            >
              <Globe size={20} className="mr-1" />

              <span>VER AO VIVO</span>
            </a>
          )}

          <a
            href={githubRepoUrl}
            target="_blank"
            className="flex w-fit items-center duration-200 hover:cursor-pointer hover:text-orange-500"
          >
            <Code size={20} className="mr-1" />
            <span>CÓDIGO FONTE</span>
          </a>
        </div>
      </div>
    </div>
  );
}

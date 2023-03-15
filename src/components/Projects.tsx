import { useState } from "react";
import { ProjectFirestoreData } from "../types";
import { ProjectDialog } from "./ProjectModal";
import { GithubLogo, Globe } from "phosphor-react";

interface ProjectsProps {
  projectsData: ProjectFirestoreData[];
}

export function Projects({ projectsData }: ProjectsProps) {
  return (
    <div
      id="projects"
      className={`bg-gradient-to-b from-zinc-900 to-zinc-600 w-full min-h-screen py-20 text-white`}
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projetos
          </p>

          <p className="py-6 font-medium text-lg">Alguns dos meus trabalhos</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-5 gap-y-8 sm:px-0">
          {projectsData &&
            projectsData.map((project) => (
              <CardProject key={project.id} project={project} />
            ))}
        </div>

        <a
          className="flex items-center text-md bg-zinc-800 rounded-lg p-2 mt-16 mx-auto duration-200 hover:text-orange-500"
          href="https://github.com/francissverissimo?tab=repositories"
          target="_blank"
        >
          <GithubLogo size={25} className="mr-2" />
          Repositórios Github
        </a>
      </div>
    </div>
  );
}

type CardProjectProps = {
  project: ProjectFirestoreData;
};

function CardProject({ project }: CardProjectProps) {
  const [showProjectModal, setShowProjectModal] = useState(false);

  return (
    <>
      <div
        key={project.id}
        className="flex flex-col shadow-xl rounded overflow-hidden"
      >
        <img
          src={project.imageURL}
          className="duration-200 mx-auto hover:scale-105 cursor-pointer"
          onClick={() => setShowProjectModal(true)}
        />

        <div className="flex flex-col justify-start h-full py-3 bg-gradient-to-br from-zinc-900 to-zinc-600">
          <button
            className="font-sans font-medium w-fit mx-auto duration-100 hover:text-orange-500"
            onClick={() => setShowProjectModal(true)}
          >
            {project.name}
          </button>

          {project.applicationUrl && (
            <a
              href={project.applicationUrl}
              target="_blank"
              className="flex items-center w-fit py-2 font-medium px-4 duration-200 hover:text-orange-500 hover:cursor-pointer"
            >
              <Globe className="mr-1" />
              Aplicação Online
            </a>
          )}

          <a
            href={project.githubRepoUrl}
            target="_blank"
            className="flex items-center w-fit py-2 px-4 duration-200 hover:text-orange-500 hover:cursor-pointer"
          >
            <GithubLogo className="mr-1" />
            Repositório GitHub
          </a>
        </div>
      </div>

      {showProjectModal && (
        <ProjectDialog
          handleClose={() => setShowProjectModal(false)}
          project={project}
        />
      )}
    </>
  );
}

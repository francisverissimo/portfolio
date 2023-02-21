import { useState } from "react";
import { ProjectFirestoreData } from "../types";
import { ProjectModal } from "./ProjectModal";
import { GithubLogo, Globe } from "phosphor-react";

interface ProjectsProps {
  projectsData: ProjectFirestoreData[];
}

export function Projects({ projectsData }: ProjectsProps) {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [projectToBeShownInTheModal, setprojectToBeShownInTheModal] =
    useState<ProjectFirestoreData>();

  const projects = projectsData;

  function toggleScrollbarY() {
    document.body.style.overflowY =
      document.body.style.overflowY == "" ? "hidden" : "";
  }

  function handleCloseModal() {
    setShowProjectModal((e) => !e);
    toggleScrollbarY();
  }

  function handleToggleModalProject(name: string) {
    const filteredProject = projects.filter((project) => project.name === name);
    setprojectToBeShownInTheModal(filteredProject[0]);
    document.body.style.overflowY = "hidden";
    setShowProjectModal(true);
  }

  return (
    <div
      id="projects"
      className={`bg-gradient-to-b from-zinc-900 to-zinc-600 w-full min-h-screen ${
        showProjectModal ? "pt-0 pb-20" : "py-20"
      } text-white`}
    >
      {showProjectModal && (
        <ProjectModal
          closeModal={() => handleCloseModal()}
          projectToBeShown={projectToBeShownInTheModal}
        />
      )}

      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projetos
          </p>

          <p className="py-6 font-medium text-lg">Alguns dos meus trabalhos</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-x-5 gap-y-8 sm:px-0">
          {projects &&
            projects.map(
              ({ id, name, imageURL, applicationUrl, githubRepoUrl }) => (
                <div
                  key={id}
                  className="flex flex-col shadow-md shadow-zinc-500 rounded-md overflow-hidden"
                >
                  <img
                    src={imageURL}
                    className="duration-200 mx-auto hover:scale-105 cursor-pointer"
                    onClick={() => handleToggleModalProject(name)}
                  />

                  <div className="flex flex-col justify-start h-full py-3 bg-gradient-to-br from-zinc-900 to-zinc-600">
                    <button
                      className="font-sans font-medium w-fit mx-auto duration-100 hover:text-orange-500 hover:scale-105"
                      onClick={() => handleToggleModalProject(name)}
                    >
                      {name}
                    </button>

                    {applicationUrl && (
                      <a
                        href={applicationUrl}
                        target="_blank"
                        className="flex items-center w-fit py-2 font-medium px-4 duration-200 hover:text-orange-500 hover:cursor-pointer"
                      >
                        <Globe className="mr-1" />
                        Aplicação Online
                      </a>
                    )}

                    <a
                      href={githubRepoUrl}
                      target="_blank"
                      className="flex items-center w-fit py-2 px-4 duration-200 hover:text-orange-500 hover:cursor-pointer"
                    >
                      <GithubLogo className="mr-1" />
                      Repositório GitHub
                    </a>
                  </div>
                </div>
              )
            )}
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

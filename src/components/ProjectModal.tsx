import { ProjectFirestoreData } from "../types";
import { X, Globe, GithubLogo } from "phosphor-react";

interface ProjectModalProps {
  projectToBeShown: ProjectFirestoreData | undefined;
  closeModal: () => void;
}

export function ProjectModal({
  projectToBeShown,
  closeModal,
}: ProjectModalProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-10 bg-zinc-800 overflow-y-auto">
      {projectToBeShown && (
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center pb-10">
          <img src={projectToBeShown.imageURL} className="w-full" />
          <div className="mx-4 mt-4 flex flex-col gap-4">
            <p className="text-xl font-medium font-sans">
              {projectToBeShown.name}
            </p>

            <p className="flex gap-y-2 gap-x-2 items-center flex-wrap border-b-2 border-zinc-500 pb-4">
              <span className="font-sans font-medium text-sm">{"STACK: "}</span>
              {projectToBeShown.stack.map((item, index) => (
                <span
                  key={index}
                  className="font-sans text-sm font-medium bg-pink-900 px-1 rounded cursor-default duration-75 hover:scale-110 border-x-2 border-zinc-600"
                >
                  {item}
                </span>
              ))}
            </p>

            <div className="flex gap-4 flex-wrap">
              {projectToBeShown.applicationUrl && (
                <div className="flex items-center gap-2 bg-zinc-900 px-2 rounded duration-200 hover:text-orange-500 overflow-hidden">
                  <Globe />
                  <a
                    className="truncate font-sans"
                    target="_blank"
                    href={projectToBeShown.applicationUrl}
                  >
                    {projectToBeShown.applicationUrl.substring(8)}
                  </a>
                </div>
              )}

              <div className="flex items-center gap-2 bg-zinc-900 px-2 rounded duration-200 hover:text-orange-500 overflow-hidden">
                <GithubLogo />
                <a
                  className="truncate font-sans"
                  target="_blank"
                  href={projectToBeShown.githubRepoUrl}
                >
                  {projectToBeShown.githubRepoUrl.substring(8)}
                </a>
              </div>
            </div>

            <div>{projectToBeShown.description}</div>
          </div>
        </div>
      )}

      <button
        onClick={closeModal}
        className="fixed right-5 top-2 cursor-pointer bg-zinc-900 p-1 rounded-full"
      >
        <X size={32} className="text-red-600" />
      </button>
    </div>
  );
}

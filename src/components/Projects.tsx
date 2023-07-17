import { ProjectFirestoreData } from "../types";
import { CardProject } from "./CardProject";

interface ProjectsProps {
  projectsData: ProjectFirestoreData[];
}

export function Projects({ projectsData }: ProjectsProps) {
  return (
    <div id="projects" className="min-h-screen w-full bg-zinc-800 py-20 text-white">
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center">
        <div className="px-4">
          <p className="inline border-b-4 border-orange-500 text-4xl font-bold">Projetos</p>

          <p className="py-6 text-lg font-medium">Alguns dos meus trabalhos</p>
        </div>

        <div className="flex flex-col gap-x-5 gap-y-14">
          {projectsData &&
            projectsData.map(
              (project, index) =>
                project.active && <CardProject key={project.id} index={index} project={project} />
            )}
        </div>
      </div>
    </div>
  );
}

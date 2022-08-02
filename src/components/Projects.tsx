import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { FaGlobe, FaGithub } from "react-icons/fa";
import { Loading } from "./Loading";

interface ProjectsType {
  id: number;
  name: string;
  imageURL: string;
  githubRepoUrl: string;
  applicationUrl?: string;
  stack: string[];
}

export const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjets] = useState<ProjectsType[]>([]);

  useEffect(() => {
    const subscriber = () => {
      async function getProjectsDoc() {
        try {
          const docRef = doc(db, "data-page", "projects");
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            setProjets(data.projects);
          }
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      }

      getProjectsDoc().finally(() => {
        setTimeout(() => setIsLoading(false), 700);
      });
    };

    return subscriber();
  }, []);

  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-zinc-900 to-zinc-600 w-full h-auto py-28 text-white md:px-12"
    >
      {isLoading && <Loading />}

      <div
        className={`max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ${
          isLoading ? "hidden" : "visible"
        }`}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projetos
          </p>
          <p className="py-6 font-medium text-lg">Alguns dos meus trabalhos</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 sm:px-0">
          {projects &&
            projects.map(({ id, imageURL, applicationUrl, githubRepoUrl }) => (
              <div key={id} className="flex flex-col shadow-lg shadow-zinc-500">
                <img
                  src={imageURL}
                  alt=""
                  className="duration-200 mx-auto hover:scale-105"
                />

                <div className="flex flex-col justify-start h-full py-3 bg-gradient-to-br from-zinc-900 to-zinc-600">
                  {applicationUrl && (
                    <a
                      href={applicationUrl}
                      target="_blank"
                      className="flex items-center w-fit py-2 font-medium px-4 duration-200 hover:text-orange-500 hover:cursor-pointer"
                    >
                      <FaGlobe className="mr-1" />
                      Demonstração
                    </a>
                  )}

                  <a
                    href={githubRepoUrl}
                    target="_blank"
                    className="flex items-center w-fit py-2 px-4 duration-200 hover:text-orange-500 hover:cursor-pointer"
                  >
                    <FaGithub className="mr-1" />
                    Repositório GitHub
                  </a>
                </div>
              </div>
            ))}
        </div>

        <a
          className="flex items-center text-md bg-zinc-800 rounded-lg p-2 mt-16 mx-auto duration-200 hover:text-orange-500"
          href="https://github.com/francissverissimo"
          target="_blank"
        >
          <FaGithub size={25} className="mr-2" />
          Repositórios Github
        </a>
      </div>
    </div>
  );
};

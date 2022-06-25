import { FaGlobe, FaCode, FaGithub } from "react-icons/fa";
import doctorCare from "../assets/projects/doctorCare.jpg";
import feedbackWidget from "../assets/projects/feedbackWidget.jpg";
import letMeAsk from "../assets/projects/letMeAsk.jpg";
import devFinance from "../assets/projects/devFinance.jpg";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      src: feedbackWidget,
      githubRepoUrl: "https://github.com/francissverissimo/feedback-widget",
      applicationUrl: "https://feedback-widget-opal.vercel.app",
    },
    {
      id: 2,
      src: letMeAsk,
      githubRepoUrl: "https://github.com/francissverissimo/letmeask",
      applicationUrl: "https://letmeask-3b93b.firebaseapp.com",
    },
    {
      id: 3,
      src: doctorCare,
      githubRepoUrl: "https://github.com/francissverissimo/doctorCare",
      applicationUrl: "https://francissverissimo.github.io/doctorCare",
    },
    {
      id: 4,
      src: devFinance,
      githubRepoUrl: "https://github.com/francissverissimo/dev-finances",
      applicationUrl: "https://francissverissimo.github.io/dev-finances",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-zinc-900 to-zinc-600 w-full h-auto py-28 text-white md:px-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projetos
          </p>
          <p className="py-6">Confira alguns dos meus trabalhos</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:px-0">
          {projects.map(({ id, src, applicationUrl, githubRepoUrl }) => (
            <div
              key={id}
              className="flex flex-col shadow-md shadow-zinc-500 rounded-lg bg-zinc-800"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 mx-auto hover:scale-105 h-3/4"
              />

              <div className="flex flex-col justify-start py-3">
                <a
                  href={applicationUrl}
                  target="_blank"
                  className="flex items-center w-full py-2 mx-4 duration-200 hover:text-orange-500 hover:cursor-pointer"
                >
                  <FaGlobe className="mr-1" />
                  Aplicação
                </a>

                <a
                  href={githubRepoUrl}
                  target="_blank"
                  className="flex items-center w-full py-2 mx-4 duration-200 hover:text-orange-500 hover:cursor-pointer"
                >
                  <FaCode className="mr-1" />
                  Repositório GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <a
          className="flex items-center text-md bg-zinc-800 rounded-lg p-2 mt-16 mx-auto duration-200 hover:scale-105 hover:text-orange-500"
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

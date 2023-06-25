import { Link } from "react-scroll";
import { HomeFirestoreData } from "../types";
import { CaretRight, GithubLogo, LinkedinLogo } from "phosphor-react";
import { knowledge } from "../assets/knowledge";
import Lottie from "lottie-react";
import devWorking from "../assets/animations/dev-working.json";

interface HomeProps {
  homeData: HomeFirestoreData;
}

export function Home({ homeData }: HomeProps) {
  const { title, text } = homeData;

  return (
    <div
      id="home"
      className="h-auto w-full bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-600 py-20 text-white"
    >
      <div className="mx-auto flex h-full max-w-screen-lg flex-col items-center justify-center gap-2 px-4 pt-5 md:flex-row">
        {homeData && (
          <div className="flex max-w-lg flex-col justify-center">
            <h2 className="text-4xl font-bold text-white md:p-0 md:text-5xl">{title}</h2>

            <p className="py-4 text-justify text-lg text-zinc-300">{text}</p>

            <div className="flex items-center gap-4 place-self-end">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/francissverissimo/"
                className="rounded-full bg-zinc-400 p-2 duration-100 hover:bg-zinc-100"
              >
                <LinkedinLogo weight="bold" size={26} className="text-zinc-900" />
              </a>

              <a
                target="_blank"
                href="https://github.com/francissverissimo/"
                className="rounded-full bg-zinc-400 p-2 duration-100 hover:bg-zinc-100"
              >
                <GithubLogo weight="bold" size={26} className="text-zinc-900" />
              </a>
            </div>

            <div>
              <Link
                to="projects"
                smooth
                duration={500}
                className="group my-2 flex w-fit cursor-pointer items-center gap-1 rounded-lg bg-gradient-to-r from-amber-500 via-orange-600 to-orange-700 px-6 py-3 font-medium text-white"
              >
                Projetos
                <span className="duration-200 group-hover:rotate-90">
                  <CaretRight weight="bold" size={22} />
                </span>
              </Link>
            </div>
          </div>
        )}

        <div>
          <Lottie animationData={devWorking} loop={true} />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <strong className="font-medium">Tech Stack</strong>

        <div className="flex gap-2">
          {knowledge.map((k) => (
            <div key={k.id} className="flex h-14 w-14 justify-center rounded-full bg-zinc-50">
              <img src={k.image} alt={k.name} className="w-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

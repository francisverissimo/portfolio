import { Link } from "react-scroll";
import { HomeFirestoreData } from "../types";
import { CaretRight } from "phosphor-react";
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
      className="bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-500 w-full h-auto py-20 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 pt-5 h-full gap-2 md:flex-row">
        {homeData && (
          <div className="flex flex-col justify-center max-w-lg">
            <h2 className="text-4xl font-bold text-white md:text-5xl md:p-0">
              {title}
            </h2>

            <p className="text-zinc-300 py-4 text-lg text-justify">{text}</p>

            <div>
              <Link
                to="projects"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex gap-1 items-center rounded-md bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-600 cursor-pointer"
              >
                Projetos
                <span className="group-hover:rotate-90 duration-200">
                  <CaretRight size={22} />
                </span>
              </Link>
            </div>
          </div>
        )}

        <div>
          <Lottie animationData={devWorking} loop={true} />
        </div>
      </div>
    </div>
  );
}

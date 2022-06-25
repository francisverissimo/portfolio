import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import HeroImage from "../assets/hero-image.png";

export const Home = () => {
  return (
    <div
      id="home"
      className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-600 w-full h-auto py-28 text-white md:px-12"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full p-5 gap-2 md:flex-row">
        <div className="flex flex-col justify-center flex-1">
          <h2 className="text-4xl pt-5 font-bold text-white md:text-5xl md:p-0">
            Desenvolvedor Web Front-End
          </h2>
          <p className="text-zinc-400 py-4 max-w-md">
            Tenho 3 anos de experiência em desenvolvimento web. Atualmente,
            adoro trabalhar utilizando tecnologias como React, TailwindCSS e
            Vite JS.
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-600 cursor-pointer"
            >
              Projetos
              <span className="group-hover:rotate-90 duration-200">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my personal picture"
            className="mx-auto w-60 md:w-96"
          />
        </div>
      </div>
    </div>
  );
};

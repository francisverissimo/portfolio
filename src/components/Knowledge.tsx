import html from "../assets/knowledge/html.png";
import css from "../assets/knowledge/css.png";
import typescript from "../assets/knowledge/typescript.svg";
import reactImage from "../assets/knowledge/react.png";
import sass from "../assets/knowledge/sass.svg";
import tailwind from "../assets/knowledge/tailwind.png";
import styledComponents from "../assets/knowledge/styled-components.png";
import node from "../assets/knowledge/node.png";
import github from "../assets/knowledge/github.png";
import linuxMint from "../assets/knowledge/linux-mint.svg";

export const Knowledge = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-600",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 5,
      src: sass,
      title: "Sass",
      style: "shadow-pink-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "TailwindCSS",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: styledComponents,
      title: "Styled Components",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      src: node,
      title: "NodeJS",
      style: "shadow-lime-300",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      style: "shadow-white",
    },
    {
      id: 10,
      src: linuxMint,
      title: "Linux Mint",
      style: "shadow-lime-300",
    },
  ];

  return (
    <div
      id="knowledge"
      className="bg-gradient-to-b from-zinc-600 to-zinc-900 w-full h-auto py-28 md:px-12"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-12">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Conhecimentos
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-5 text-center md:px-0 md:gap-8">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 ">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

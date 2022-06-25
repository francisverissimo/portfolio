import aboutImage from "../assets/about-img.png";
export const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-b from-zinc-600 to-zinc-900 w-full h-auto py-28 text-white md:px-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre
          </p>
        </div>

        <div className="flex flex-col-reverse justify-center items-center gap-10 pt-20 md:flex-row">
          <div className="">
            <img src={aboutImage} alt="" className="mx-auto w-60 md:w-full" />
          </div>

          <div className="">
            <p className="text-xl">
              Olá, tudo bem contigo? Meu nome é Francis de Souza Verissimo,
              tenho 21 anos, sou apaixonado por programação e pelo seu
              aprendizado constante.
            </p>

            <br />

            <p className="text-xl">
              Almejo trilhar um caminho com a programação visando trazer
              soluções para as pessoas, estudando, praticando, melhorando, para
              cada dia subir um degrau na escada dev.
            </p>

            <br />

            <p className="text-xl">
              Busco me dedicar mais para o back-end no futuro. Atualmente estou
              estudando, além de React, GraphQL e TailwindCSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

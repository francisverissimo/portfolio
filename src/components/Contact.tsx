import { Envelope, GithubLogo, LinkedinLogo, Phone, WhatsappLogo } from "phosphor-react";

export function Contact() {
  return (
    <div id="contact" className="flex h-auto w-full flex-col bg-zinc-900 py-20 text-white md:flex-row">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col justify-center overflow-hidden px-4">
        <div className="pb-4 sm:pb-8">
          <p className="inline border-b-4 border-orange-500 text-2xl font-bold sm:text-4xl">Contato</p>
        </div>

        <div className="flex flex-col">
          <a
            href="http://github.com/francissverissimo"
            target="_blank"
            className="my-4 flex w-fit items-center gap-2 duration-200 hover:text-orange-500 sm:text-lg"
          >
            <GithubLogo size={26} />

            {"Meu GitHub"}
          </a>

          <a
            href="http://linkedin.com/in/francissverissimo"
            target="_blank"
            className="my-4 flex w-fit items-center gap-2 whitespace-nowrap duration-200 hover:text-orange-500 sm:text-lg"
          >
            <LinkedinLogo size={26} />
            {"Meu LinkedIn"}
          </a>

          <p className="my-4 flex w-fit items-center gap-2 sm:text-lg">
            <Envelope size={26} />
            {"francissv97@gmail.com"}
          </p>

          <p className="my-4 flex w-fit items-center gap-2 font-[sans] sm:text-lg">
            <Phone size={26} />
            {"+55 67 9 8484-6194"}
          </p>

          <a
            href="https://wa.me/5567984846194"
            target="_blank"
            className="text-md my-2 flex w-fit cursor-pointer items-center gap-2 rounded-lg bg-green-600 px-4 py-2 font-bold text-white duration-200 hover:bg-green-700 sm:text-lg"
          >
            Entrar em contato
            <WhatsappLogo size={26} />
          </a>
        </div>
      </div>
    </div>
  );
}

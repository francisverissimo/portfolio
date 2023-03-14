import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  Phone,
  WhatsappLogo,
} from "phosphor-react";

export function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row bg-gradient-to-b from-zinc-900 via-zinc-700 to-zinc-600 w-full h-auto py-20 text-white"
    >
      <div className="flex flex-col px-4 justify-center max-w-screen-lg overflow-hidden">
        <div className="pb-4 sm:pb-8">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Contato
          </p>
        </div>

        <div className="flex flex-col">
          <a
            href="http://github.com/francissverissimo"
            target="_blank"
            className="flex gap-2 items-center w-fit my-4 sm:text-lg duration-200 hover:text-orange-500"
          >
            <GithubLogo size={26} />

            {"Meu GitHub"}
          </a>

          <a
            href="http://linkedin.com/in/francissverissimo"
            target="_blank"
            className="flex gap-2 items-center w-fit whitespace-nowrap my-4 sm:text-lg duration-200 hover:text-orange-500"
          >
            <LinkedinLogo size={26} />
            {"Meu LinkedIn"}
          </a>

          <p className="flex gap-2 items-center w-fit my-4 sm:text-lg">
            <Envelope size={26} />
            {"francissv97@gmail.com"}
          </p>

          <p className="flex gap-2 items-center w-fit my-4 sm:text-lg font-[sans]">
            <Phone size={26} />
            {"+55 67 9 8484-6194"}
          </p>

          <a
            href="https://wa.me/5567984846194"
            target="_blank"
            className="flex gap-2 items-center text-white text-md sm:text-lg font-bold w-fit px-4 py-2 my-2 rounded-lg bg-green-600 cursor-pointer duration-200 hover:bg-green-700"
          >
            Entrar em contato
            <WhatsappLogo size={26} />
          </a>
        </div>
      </div>
    </div>
  );
}

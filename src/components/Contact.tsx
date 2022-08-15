import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsTelephone } from "react-icons/bs";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-600 w-full h-auto py-20 text-white"
    >
      <div className="flex flex-col px-4 justify-center max-w-screen-lg mx-auto h-full overflow-hidden">
        <div className="pb-4 sm:pb-8">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Contato
          </p>
        </div>

        <div className="flex flex-col">
          <a
            href="http://github.com/francissverissimo"
            target="_blank"
            className="flex items-center w-fit my-4 sm:text-lg duration-200 hover:text-orange-500"
          >
            <FaGithub size={25} className="mr-2" />
            {"Perfil GitHub"}
          </a>

          <a
            href="http://linkedin.com/in/francissverissimo"
            target="_blank"
            className="flex items-center w-fit whitespace-nowrap my-4 sm:text-lg duration-200 hover:text-orange-500"
          >
            <FaLinkedin size={25} className="mr-2" />
            {"Perfil LinkedIn"}
          </a>

          <p className="flex items-center w-fit my-4 sm:text-lg">
            <FiMail size={25} className="mr-2" />
            {"francissv97@gmail.com"}
          </p>

          <p className="flex items-center w-fit my-4 sm:text-lg font-[sans]">
            <BsTelephone size={25} className="mr-2" />
            {"+55 67 9 8484-6194"}
          </p>

          <a
            href="https://wa.me/5567984846194"
            target="_blank"
            className="text-white text-md sm:text-lg font-bold w-fit px-4 py-2 my-2 flex items-center rounded-lg bg-green-600 cursor-pointer duration-200 hover:bg-green-700"
          >
            Entrar em contato
            <FaWhatsapp size={25} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

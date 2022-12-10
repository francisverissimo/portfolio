import { Envelope, GithubLogo, LinkedinLogo } from "phosphor-react";

export const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <LinkedinLogo size={30} />
        </>
      ),
      href: "https://linkedin.com/in/francissverissimo",
      style: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          GitHub <GithubLogo size={30} />
        </>
      ),
      href: "https://github.com/francissverissimo",
    },

    {
      id: 3,
      child: (
        <>
          Mail <Envelope size={30} />
        </>
      ),
      href: "mailto:francissv97@gmail.com",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden :flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-3 ml-[-110px] hover:ml-[-10px] hover:rounded-md duration-300 bg-zinc-600 cursor-pointer
              ${style}`}
          >
            <a
              href={href}
              target="_blank"
              className="flex justify-between items-center w-full text-white pl-3"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

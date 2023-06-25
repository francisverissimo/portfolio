import { useState } from "react";
import { List, X } from "phosphor-react";
import { Link } from "react-scroll";

export function NavBar() {
  const [showNav, setShowNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "home",
      link: "home",
    },
    {
      id: 2,
      link: "about",
      name: "sobre",
    },
    {
      id: 3,
      link: "projects",
      name: "projetos",
    },
    // {
    //   id: 4,
    //   link: "knowledge",
    //   name: "conhecimentos",
    // },
    {
      id: 5,
      link: "contact",
      name: "contato",
    },
  ];

  return (
    <div className="fixed z-10 h-20 w-full bg-zinc-900">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-between px-4 text-white">
        <h1 className="font-signature text-2xl md:text-2xl">Francis S. Verissimo</h1>

        <ul className="hidden md:flex">
          {links.map(({ id, name, link }) => {
            return (
              <Link
                to={link}
                key={id}
                smooth
                duration={500}
                className="cursor-pointer px-4 py-4 font-medium capitalize text-zinc-400 duration-75 first:pl-0 last:pr-0 hover:scale-110"
              >
                {name}
              </Link>
            );
          })}
        </ul>

        <div
          onClick={() => setShowNav(!showNav)}
          className="z-10 cursor-pointer py-4 pl-4 pr-0 text-zinc-400 md:hidden"
        >
          {showNav ? <X size={32} /> : <List size={32} />}
        </div>

        {showNav && (
          <ul className="absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-zinc-900 to-zinc-600 text-zinc-400">
            {links.map(({ id, name, link }) => {
              return (
                <Link
                  key={id}
                  onClick={() => setShowNav(!showNav)}
                  to={link}
                  smooth
                  duration={500}
                  className="cursor-pointer px-4 py-6 text-4xl capitalize"
                >
                  {name}
                </Link>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

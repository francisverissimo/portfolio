import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const NavBar = () => {
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
    {
      id: 4,
      link: "knowledge",
      name: "conhecimentos",
    },
    {
      id: 5,
      link: "contact",
      name: "contato",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-10">
      <h1 className="font-signature text-2xl ml-2 md:text-3xl">
        Francis S. Verissimo
      </h1>

      <ul className="hidden md:flex">
        {links.map(({ id, name, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-zinc-400 hover:scale-110 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setShowNav(!showNav)}
        className="text-zinc-400 cursor-pointer pr-4 z-10 md:hidden"
      >
        {showNav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {showNav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-zinc-900 to-zinc-600 text-zinc-400">
          {links.map(({ id, name, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setShowNav(!showNav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

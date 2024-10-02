import { useState } from 'react'
import { List, X } from 'phosphor-react'
import { Link } from 'react-scroll'

export function NavBar() {
  const [showNav, setShowNav] = useState(false)

  const links = [
    {
      id: 1,
      name: 'home',
      link: 'home',
    },
    {
      id: 3,
      link: 'projects',
      name: 'projetos',
    },
    {
      id: 2,
      link: 'about',
      name: 'sobre',
    },
    {
      id: 5,
      link: 'contact',
      name: 'contato',
    },
  ]

  function handleClickMenuButton() {
    if (!showNav) {
      setShowNav(true)
      document.body.style.overflow = 'hidden'
      return
    }

    setShowNav(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="fixed z-[21] h-20 w-full">
      <div className="relative mx-auto flex h-full max-w-screen-lg items-center justify-between text-zinc-50 backdrop-blur-md">
        <strong className="p-4 text-2xl font-light italic">Francis Verissimo</strong>

        <ul className="hidden md:flex">
          {links.map(({ id, name, link }) => {
            return (
              <Link
                to={link}
                key={id}
                smooth
                duration={500}
                className="cursor-pointer p-4 font-medium uppercase text-zinc-400 duration-75 hover:text-orange-500"
              >
                {name}
              </Link>
            )
          })}
        </ul>

        <div
          onClick={handleClickMenuButton}
          className="absolute right-0 z-[24] cursor-pointer p-4 text-zinc-400 hover:text-orange-500 md:hidden"
        >
          <List size={32} />
        </div>
      </div>

      {showNav && (
        <ul
          style={{ backdropFilter: 'blur(10px)' }}
          className="fixed left-0 top-0 z-[22] flex h-screen w-full flex-col items-center justify-center bg-zinc-950/50"
        >
          <div
            onClick={handleClickMenuButton}
            className="absolute right-0 top-0 z-[24] flex h-20 cursor-pointer items-center p-4 text-zinc-400 hover:text-orange-500"
          >
            <X size={32} />
          </div>

          {links.map(({ id, name, link }) => {
            return (
              <Link
                key={id}
                onClick={handleClickMenuButton}
                to={link}
                smooth
                duration={500}
                className="cursor-pointer p-4 text-4xl font-light uppercase text-zinc-50 transition hover:text-orange-500"
              >
                {name}
              </Link>
            )
          })}
        </ul>
      )}
    </div>
  )
}

import { useState } from 'react'
import { List, X } from 'phosphor-react'

export function NavBar() {
  const [showNav, setShowNav] = useState(false)

  const links = [
    {
      name: 'início',
      link: 'home',
    },
    {
      link: 'projects',
      name: 'projetos',
    },
    {
      link: 'about',
      name: 'sobre',
    },
    {
      link: 'contact',
      name: 'contato',
    },
  ]

  function handleNavButton(elementId: string) {
    const element = document.getElementById(`${elementId}`)

    if (element) {
      const rect = element.getBoundingClientRect()
      console.log(rect)
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  function handleToggleMenu() {
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
          {links.map(({ name, link }, idx) => {
            return (
              <button
                key={idx}
                onClick={() => handleNavButton(link)}
                className="cursor-pointer capitalize p-4 font-medium text-zinc-400 duration-75 hover:text-orange-500"
              >
                {name}
              </button>
            )
          })}
        </ul>

        <div
          onClick={handleToggleMenu}
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
            onClick={handleToggleMenu}
            className="absolute right-0 top-0 z-[24] flex h-20 cursor-pointer items-center p-4 text-zinc-400 hover:text-orange-500"
          >
            <X size={32} />
          </div>

          {links.map(({ name, link }, idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  console.log('ckic')
                  handleNavButton(link)
                  if (showNav) handleToggleMenu()
                }}
                className="cursor-pointer capitalize p-4 text-4xl font-light text-zinc-50 transition hover:text-orange-500"
              >
                {name}
              </button>
            )
          })}
        </ul>
      )}
    </div>
  )
}

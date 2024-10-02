import { HomeFirestoreData } from '../types'
import { GithubLogo, LinkedinLogo } from 'phosphor-react'
import { knowledge } from '../assets/knowledge'
import Lottie from 'lottie-react'
import devWorking from '../assets/animations/dev-working.json'

interface HomeProps {
  homeData: HomeFirestoreData
}

export function Home({ homeData }: HomeProps) {
  const { text, title } = homeData

  const myNameIndex = text.indexOf('Francis')

  const greeting = text.slice(0, myNameIndex)
  const name = text.slice(myNameIndex)

  return (
    <div id="home" className="h-auto w-full bg-zinc-800 py-20 text-zinc-50">
      <div className="mx-auto flex h-full max-w-screen-lg flex-col items-center justify-center gap-2 px-4 pt-5 md:flex-row">
        <div className="flex w-full flex-col items-center justify-center md:w-fit">
          <p className="text-xl font-medium text-zinc-100">{greeting}</p>
          <p className="py-2 text-2xl font-bold text-zinc-100 md:text-3xl">{name}</p>
          <p className="text-xl font-light uppercase italic text-zinc-100 md:text-2xl">{title}</p>
        </div>

        <div className="max-w-xs">
          <Lottie animationData={devWorking} loop />
        </div>
      </div>

      <div className="pointer-events-none flex flex-col items-center gap-2 py-4">
        <div className="flex gap-4">
          {knowledge.map((k) => {
            if (!['HTML', 'CSS'].includes(k.name)) {
              return (
                <div key={k.id}>
                  <img src={k.image} alt={k.name} className="w-8" />
                </div>
              )
            }
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/francissverissimo/"
          className="group p-2 duration-100"
        >
          <LinkedinLogo
            weight="fill"
            size={26}
            className="text-zinc-50 transition group-hover:text-sky-500"
          />
        </a>

        <a
          target="_blank"
          href="https://github.com/francissverissimo/"
          className="group p-2 duration-100"
        >
          <GithubLogo
            weight="fill"
            size={26}
            className="text-zinc-50 transition group-hover:text-zinc-400"
          />
        </a>
      </div>
    </div>
  )
}

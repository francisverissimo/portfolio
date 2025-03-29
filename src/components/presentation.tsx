import { useEffect, useState } from 'react'
import { GithubUser, UserService } from '../services/user-service'
import { Loading } from './Loading'
import { GithubLogo, LinkedinLogo } from 'phosphor-react'
import { knowledges } from '../assets/knowledge'
import node_orange from '../assets/knowledge/images/node-line-orange.svg'

export function Presentation() {
  const [user, setUser] = useState<GithubUser>()

  async function getUser() {
    const user = await UserService.getUser()
    if (user) setUser(user)
  }

  useEffect(() => {
    getUser()
  }, [])

  if (!user) return <Loading />

  return (
    <div id="home" className="flex min-h-screen w-full flex-col justify-center gap-8 pt-20">
      <div className="mx-auto flex h-full w-full max-w-screen-xl flex-col items-center justify-center gap-8 px-4 pt-5 md:flex-row">
        <div className="flex w-full flex-col items-center justify-center md:w-fit">
          <p className="text-xl font-medium text-zinc-100">Olá, eu sou</p>
          <p className="py-2 text-2xl font-bold text-zinc-100 md:text-3xl">{user.name}</p>
          <p className="text-xl font-light uppercase italic text-zinc-100 md:text-2xl">
            {user.bio}
          </p>
        </div>

        <div className="flex w-full max-w-72 items-center justify-center">
          <img
            src={node_orange}
            alt="node js in lines orange"
            className="fixed z-[-1] w-full max-w-xl animate-low-spin opacity-40 blur-[1px]"
          />

          <img
            src={user.avatar_url}
            alt="My profile photo"
            className="h-52 w-52 self-center rounded-full shadow-2xl md:h-64 md:w-64 md:self-auto"
            loading="lazy"
            style={{
              opacity: 0,
              transitionDuration: '200ms',
            }}
            onLoad={(t) => {
              t.currentTarget.style.opacity = '1'
              t.currentTarget.style.transform = 'initial'
            }}
          />
        </div>
      </div>

      <div className="pointer-events-none flex flex-col items-center gap-2 py-4">
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {knowledges.map((k, idx) => {
            if (!['html', 'css'].includes(k.name)) {
              return <img key={idx} src={k.image} alt={k.name} className="w-12" />
            }
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/francisverissimo/"
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
          href="https://github.com/francisverissimo/"
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

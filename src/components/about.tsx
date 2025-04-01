import Lottie from 'lottie-react'
import { GraduationCap, Medal } from 'phosphor-react'
import devWorking from '../assets/animations/dev-working.json'

export function About() {
  const aboutTextEnv = import.meta.env.VITE_ABOUT_TEXT as string
  const aboutContent = aboutTextEnv.split('.')

  return (
    <div id="about" className="h-auto w-full bg-zinc-800 py-20 text-zinc-50">
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center px-4">
        <div className="flex flex-col items-center">
          <p className="text-lg italic">Um pouco</p>
          <p className="text-4xl font-bold uppercase">Sobre mim</p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-10 pt-8 md:flex-row">
          <div className="w-full max-w-md">
            <Lottie animationData={devWorking} loop />
          </div>

          <div className="flex-2 space-y-4 text-lg">
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <div className="flex flex-col items-center rounded-xl bg-zinc-700/60 px-2 py-6">
                <div className="flex gap-1">
                  <Medal size={32} weight="fill" />
                  <strong className="text-xl font-semibold uppercase italic">experiência</strong>
                </div>
                <p className="font-light">+ de 2 anos</p>
                <p className="text-center font-semibold">Desenvolvedor Full Stack</p>
              </div>

              <div className="flex flex-col items-center rounded-xl bg-zinc-700/60 px-2 py-6">
                <div className="flex gap-1">
                  <GraduationCap size={32} weight="fill" />
                  <strong className="text-xl uppercase italic">formação</strong>
                </div>
                <p className="text-center font-light">Sistemas para Internet</p>
                <p className="text-center font-bold">IFMS</p>
              </div>
            </div>

            {aboutContent.map((paragraph, index) => {
              if (paragraph) {
                return (
                  <p key={index} className="text-justify leading-tight">
                    {paragraph.concat('.')}
                  </p>
                )
              }
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

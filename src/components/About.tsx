import { useEffect, useState } from 'react'
import { AboutFirestoreData } from '../types'
import { getAboutImageFromStorage } from '../services/storage'
import { GraduationCap, Medal } from 'phosphor-react'

interface AboutProps {
  aboutData: AboutFirestoreData
}

export function About({ aboutData }: AboutProps) {
  const [aboutImageURL, setAboutImageURL] = useState('')

  async function getAboutImage() {
    const imageURL = await getAboutImageFromStorage()

    if (imageURL) {
      setAboutImageURL(imageURL)
    }
  }

  useEffect(() => {
    getAboutImage()
  }, [])

  return (
    <div id="about" className="h-auto w-full bg-zinc-800 py-20 text-zinc-50">
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center px-4">
        <div className="flex flex-col items-center">
          <p className="text-lg italic">Um pouco</p>
          <p className="text-4xl font-bold uppercase">Sobre mim</p>
        </div>

        <div className="flex w-full flex-col justify-center gap-10 pt-8 md:flex-row">
          <img
            src={aboutImageURL}
            alt="My profile photo"
            className="h-52 w-52 self-center rounded-3xl md:h-64 md:w-64 md:self-auto"
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

          <div className="space-y-4 text-lg">
            <div className="mb-8 grid gap-4 md:grid-cols-2">
              <div className="flex flex-col items-center rounded-xl border-2 border-zinc-600 p-2">
                <Medal size={32} weight="fill" />
                <strong className="text-xl uppercase italic">experiência</strong>
                <p className="font-light">+ de 2 anos</p>
                <p className="text-center font-bold">Desenvolvedor Frontend</p>
              </div>

              <div className="flex flex-col items-center rounded-xl border-2 border-zinc-600 p-2">
                <GraduationCap size={32} weight="fill" />
                <strong className="text-xl uppercase italic">formação</strong>
                <p className="text-center font-light">Tecnologia em Sistemas para Internet</p>
                <p className="text-center font-bold">Instituto Federal de Mato Grosso do Sul</p>
              </div>
            </div>

            {aboutData.text.map((paragraph, index) => (
              <p key={index} className="text-justify indent-10 leading-tight">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

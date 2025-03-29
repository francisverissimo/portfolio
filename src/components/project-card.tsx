import { CSSProperties } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { GithubLogo, Globe } from 'phosphor-react'
import { Project } from '../services/project-service'
import { knowledges } from '../assets/knowledge'
import 'swiper/css/navigation'
import 'swiper/css'

interface SwiperStyle extends CSSProperties {
  '--swiper-navigation-color': string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { name, description, topics, screenshots, homepage, html_url } = project

  const descriptionSplitted = description.split('.').filter((item) => item.trim() !== '')

  return (
    <div className="flex flex-col items-center space-y-4 border-t-2 border-zinc-600 pt-4">
      {/* {logo && <img src={logo} alt="logo" className="w-12 md:w-14" />} */}

      <strong className="text-3xl font-medium capitalize">{name.replaceAll('-', ' ')}</strong>

      {screenshots ? (
        <Swiper
          style={
            {
              '--swiper-navigation-color': '#f97316',
              width: '100%',
            } as SwiperStyle
          }
          effect="coverflow"
          grabCursor
          navigation
          centeredSlides
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 260,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Navigation]}
        >
          {screenshots.map((sc, idx) => {
            return (
              <SwiperSlide key={idx} className="w-full max-w-screen-sm shadow-2xl">
                <img src={sc.download_url} className="h-full w-full rounded-lg" />
              </SwiperSlide>
            )
          })}
        </Swiper>
      ) : null}

      <div className="flex flex-wrap items-center justify-center gap-4 p-4">
        {homepage && (
          <a
            href={homepage}
            target="_blank"
            className="flex w-fit items-center font-medium text-sky-500 underline underline-offset-8 hover:cursor-pointer hover:brightness-125"
          >
            <Globe size={20} className="mr-1" weight="fill" />

            <span className="uppercase italic">acessar aplicação</span>
          </a>
        )}

        <a
          href={html_url}
          target="_blank"
          className="flex w-fit items-center text-sky-500 underline underline-offset-8 hover:cursor-pointer hover:brightness-125"
        >
          <GithubLogo size={20} className="mr-1" weight="fill" />
          <span className="uppercase italic">código fonte</span>
        </a>
      </div>

      <div className="flex h-full w-full max-w-2xl flex-col justify-center divide-y divide-zinc-600">
        <div className="p-4">
          {descriptionSplitted.map((item, index) => {
            return (
              <p key={index} className="text-justify indent-10 text-lg">
                {item.trim().concat('.')}
              </p>
            )
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-4 p-4">
          {topics.map((tech, i) => {
            const icon = knowledges.find((knowledge) => knowledge.name == tech)

            if (!icon) {
              return (
                <span key={i} className="text-lg capitalize italic text-orange-500">
                  {tech}
                </span>
              )
            }

            return <img key={i} src={icon.image} alt={icon.displayName} className="w-12" />
          })}
        </div>
      </div>
    </div>
  )
}

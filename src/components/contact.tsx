import { Envelope, GithubLogo, LinkedinLogo, Phone, WhatsappLogo } from 'phosphor-react'

export function Contact() {
  return (
    <div
      id="contact"
      className="flex h-auto w-full flex-col bg-zinc-800 py-20 text-zinc-50 md:flex-row"
    >
      <div className="mx-auto flex w-full max-w-screen-lg flex-col justify-center overflow-hidden px-4">
        <div className="pb-4 text-center sm:pb-8">
          <strong className="text-4xl font-bold uppercase">Contato</strong>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex gap-4">
            <a
              href="http://github.com/francissverissimo"
              target="_blank"
              className="my-4 flex w-fit items-center gap-2 duration-200 hover:text-zinc-400 sm:text-lg"
            >
              <GithubLogo size={26} weight="fill" />

              {'Meu GitHub'}
            </a>

            <a
              href="http://linkedin.com/in/francissverissimo"
              target="_blank"
              className="my-4 flex w-fit items-center gap-2 whitespace-nowrap duration-200 hover:text-sky-500 sm:text-lg"
            >
              <LinkedinLogo size={26} weight="fill" />
              {'Meu LinkedIn'}
            </a>
          </div>

          <p className="my-4 flex w-fit items-center gap-2 sm:text-lg">
            <Envelope size={26} weight="fill" />
            {'francissv97@gmail.com'}
          </p>

          <div className="flex flex-col gap-4 md:flex-row">
            <p className="flex items-center justify-center gap-2 sm:text-lg">
              +55 (67) 9 8484-6194
            </p>

            <a
              href="https://wa.me/5567984846194"
              target="_blank"
              className="text-md my-1 flex w-fit cursor-pointer items-center gap-2 rounded-lg px-4 py-2 font-bold text-green-500 ring-1 ring-green-500 duration-200 hover:bg-green-500/5 sm:text-lg"
            >
              Entrar em contato
              <WhatsappLogo size={26} weight="fill" className="text-green-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

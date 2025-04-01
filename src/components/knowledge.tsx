import * as HoverCard from '@radix-ui/react-hover-card'
import { knowledges } from '../assets/knowledge'

export function Knowledge() {
  return (
    <div id="knowledge" className="h-auto w-full bg-gradient-to-t from-zinc-500 to-zinc-900 py-20">
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center px-4 text-zinc-50">
        <div className="pb-6 sm:pb-12">
          <p className="inline border-b-4 border-gray-500 text-2xl font-bold sm:text-4xl">
            Conhecimentos
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 md:px-0">
          {knowledges && knowledges.map((item, idx) => <KnowledgeCard key={idx} item={item} />)}
        </div>
      </div>
    </div>
  )
}

type KnowledgeCardProp = {
  item: {
    image: string
    name: string
    style: string
  }
}

function KnowledgeCard({ item }: KnowledgeCardProp) {
  return (
    <HoverCard.Root openDelay={0} closeDelay={0}>
      <HoverCard.Trigger className="bg-gradient-to-b from-zinc-600 to-zinc-900 p-4 shadow-xl">
        <img src={item.image} alt={item.name} className="mx-auto h-28 w-32 rounded" />
      </HoverCard.Trigger>

      <HoverCard.Portal>
        <HoverCard.Content side="top" align="center">
          <div className={`mb-2 rounded px-4 py-1 text-sm font-semibold ${item.style}`}>
            {item.name}
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}

import { Grow } from "@mui/material";
import { knowledge } from "../assets/knowledge";
import * as HoverCard from "@radix-ui/react-hover-card";

export function Knowledge() {
  return (
    <div id="knowledge" className="h-auto w-full bg-gradient-to-t from-zinc-500 to-zinc-900 py-20">
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center px-4 text-white">
        <div className="pb-6 sm:pb-12">
          <p className="inline border-b-4 border-gray-500 text-2xl font-bold sm:text-4xl">
            Conhecimentos
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8 md:px-0">
          {knowledge && knowledge.map((item) => <KnowledgeCard key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
}

type KnowledgeCardProp = {
  item: {
    id: number;
    image: string;
    name: string;
    style: string;
  };
};

function KnowledgeCard({ item }: KnowledgeCardProp) {
  return (
    <HoverCard.Root openDelay={0} closeDelay={0}>
      <HoverCard.Trigger className="bg-gradient-to-b from-zinc-600 to-zinc-900 p-4 shadow-xl">
        <img src={item.image} alt={item.name} className="mx-auto h-28 w-32 rounded" />
      </HoverCard.Trigger>

      <HoverCard.Portal>
        <HoverCard.Content side="top" align="center">
          <Grow in>
            <div className={`mb-2 rounded px-4 py-1 text-sm font-semibold ${item.style}`}>
              {item.name}
            </div>
          </Grow>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}

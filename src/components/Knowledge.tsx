import { Grow } from "@mui/material";
import * as HoverCard from "@radix-ui/react-hover-card";
import { knowledge } from "../assets/knowledge";

export function Knowledge() {
  return (
    <div
      id="knowledge"
      className="bg-gradient-to-t from-zinc-500 to-zinc-900 w-full h-auto py-20"
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-6 sm:pb-12">
          <p className="text-2xl sm:text-4xl font-bold border-b-4 border-gray-500 inline">
            Conhecimentos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:px-0 md:gap-8">
          {knowledge &&
            knowledge.map((item) => (
              <KnowledgeCard key={item.id} item={item} />
            ))}
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
      <HoverCard.Trigger className="bg-gradient-to-b from-zinc-600 to-zinc-900 shadow-xl p-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-32 h-28 mx-auto rounded"
        />
      </HoverCard.Trigger>

      <HoverCard.Portal>
        <HoverCard.Content side="top" align="center">
          <Grow in>
            <div
              className={`min-w-[100%] text-sm font-semibold px-4 py-1 rounded ${item.style}`}
            >
              {item.name}
            </div>
          </Grow>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}

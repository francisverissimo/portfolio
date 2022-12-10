import { knowledge } from "../assets/knowledge";

export const Knowledge = () => {
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 text-center md:px-0 md:gap-8">
          {knowledge &&
            knowledge.map(({ id, image, name, style }) => (
              <div
                key={id}
                className={`bg-gradient-to-b from-zinc-600 to-zinc-900 shadow-md hover:scale-105 duration-100 py-2 rounded-md ${style}`}
              >
                <img src={image} alt="" className="w-20 mx-auto" />
                <p className="mt-4 text-xs sm:text-sm font-semibold">{name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

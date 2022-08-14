export const Knowledge = () => {
  const knowledges = [
    {
      id: 1,
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/francis-s-portfolio.appspot.com/o/knowledge%2Fhtml.png?alt=media&token=fee7a5db-55ca-4b8f-9221-83cdcd7b54c7",
      name: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/francis-s-portfolio.appspot.com/o/knowledge%2Fcss.png?alt=media&token=fed2ba0a-3c47-4c0a-8947-9aa7cee4c734",
      name: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/francis-s-portfolio.appspot.com/o/knowledge%2Ftypescript.svg?alt=media&token=cd9604b8-5b4f-45d0-903e-0ad6eff8adb6",
      name: "Typescript",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/francis-s-portfolio.appspot.com/o/knowledge%2Freact.png?alt=media&token=c1acde26-fd70-492a-8db1-26f52809ed14",
      name: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 5,
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/francis-s-portfolio.appspot.com/o/knowledge%2Fsass.svg?alt=media&token=9d016426-9f33-4af9-bba9-2d1c84f0572a",
      name: "Sass",
      style: "shadow-pink-400",
    },
    {
      id: 6,
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/francis-s-portfolio.appspot.com/o/knowledge%2Ftailwind.png?alt=media&token=b0108a85-e5ba-455e-8814-92da8d0fc676",
      name: "TailwindCSS",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/francis-s-portfolio.appspot.com/o/knowledge%2Fstyled-components.png?alt=media&token=9263ddd0-6878-4af2-8a7a-6e114bd060ea",
      name: "Styled Components",
      style: "shadow-purple-500",
    },
    {
      id: 8,
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/francis-s-portfolio.appspot.com/o/knowledge%2Fnode.png?alt=media&token=ff691a09-ada2-493a-9c8a-f0735cb7b488",
      name: "NodeJS",
      style: "shadow-lime-300",
    },
    {
      id: 9,
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/francis-s-portfolio.appspot.com/o/knowledge%2Fgithub.png?alt=media&token=00afbfbe-ab8b-43ed-b0b7-51b34cbc34cd",
      name: "Github",
      style: "shadow-white",
    },
    {
      id: 10,
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/francis-s-portfolio.appspot.com/o/knowledge%2Fgraphql.svg?alt=media&token=1c24ae98-aa93-4c89-b5fa-b82a3e94b3a4",
      name: "GraphQL",
      style: "shadow-pink-500",
    },
    {
      id: 11,
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/francis-s-portfolio.appspot.com/o/knowledge%2Ffirebase.svg?alt=media&token=ee30dadb-6883-4b57-9945-1c61a75c2dd4",
      name: "Firebase",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div
      id="knowledge"
      className="bg-gradient-to-b from-zinc-600 to-zinc-900 w-full h-auto py-28 md:px-12"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-6 sm:pb-12">
          <p className="text-2xl sm:text-4xl font-bold border-b-4 border-gray-500 inline">
            Conhecimentos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 text-center md:px-0 md:gap-8">
          {knowledges &&
            knowledges.map(({ id, imageURL, name, style }) => (
              <div
                key={id}
                className={`bg-gradient-to-b from-zinc-600 to-zinc-900 shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}
              >
                <img src={imageURL} alt="" className="w-20 mx-auto" />
                <p className="mt-4 text-xs sm:text-sm font-semibold">{name}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

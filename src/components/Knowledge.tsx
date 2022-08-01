import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";

interface KnowledgeType {
  id: number;
  name: string;
  imageURL: string;
  style: string;
}

export const Knowledge = () => {
  const [knowledges, setKnowledges] = useState<KnowledgeType[]>([]);

  useEffect(() => {
    const subscriber = () => {
      async function getKnowledgesDoc() {
        try {
          const docRef = doc(db, "data-page", "knowledge");
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();

            setKnowledges(data.knowledge);
          }
        } catch (error) {
          console.log(error);
        }
      }

      getKnowledgesDoc();
    };

    return subscriber();
  }, []);

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

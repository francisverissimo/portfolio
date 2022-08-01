import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../services/firebase";

interface AboutFirebaseQuery {
  text: string[];
}

export const About = () => {
  const [aboutImageURL, setAboutImageURL] = useState("");
  const [aboutData, setAboutData] = useState<AboutFirebaseQuery>();

  useEffect(() => {
    const subscriber = () => {
      const docRef = doc(db, "data-page/about");
      const imageAboutRef = ref(storage, "about-image.png");

      getDoc(docRef)
        .then((result) => {
          if (result.exists()) {
            const { text } = result.data() as AboutFirebaseQuery;
            setAboutData({ text });
          }
        })
        .catch((error) => console.log(error));

      getDownloadURL(imageAboutRef)
        .then((result) => {
          setAboutImageURL(result);
        })
        .catch((error) => console.log(error));
    };

    return subscriber();
  }, []);

  return (
    <div
      id="about"
      className="bg-gradient-to-b from-zinc-600 to-zinc-900 w-full h-auto py-28 text-white md:px-12"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre
          </p>
        </div>

        <div className="flex flex-col-reverse justify-center items-center gap-10 pt-20 md:flex-row">
          <div>
            <img src={aboutImageURL} alt="" className="mx-auto w-60 md:w-full" />
          </div>

          <div>
            <p className="text-xl">{aboutData?.text[0]}</p>

            <br />

            <p className="text-xl">{aboutData?.text[1]}</p>

            <br />

            <p className="text-xl">{aboutData?.text[2]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

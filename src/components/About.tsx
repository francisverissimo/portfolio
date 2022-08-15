import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../services/firebase";
import { Loading } from "./Loading";
import { AboutFirestoreData } from "../types/handleComponentTypes";

export const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [aboutImageURL, setAboutImageURL] = useState("");
  const [aboutData, setAboutData] = useState<AboutFirestoreData>();

  useEffect(() => {
    const subscriber = () => {
      async function getAboutFirebaseData() {
        const docAboutRef = doc(db, "data-page/about");
        const imageAboutRef = ref(storage, "about-image.png");

        try {
          const docAbout = await getDoc(docAboutRef);
          const imageAboutURL = await getDownloadURL(imageAboutRef);

          if (docAbout.exists()) {
            const { text } = docAbout.data() as AboutFirestoreData;

            setAboutData({ text });
          }

          setAboutImageURL(imageAboutURL);
        } catch (error) {
          console.log(error);
        }
      }

      getAboutFirebaseData().finally(() => {
        setTimeout(() => setIsLoading(false), 700);
      });
    };

    return subscriber();
  }, []);

  return (
    <div
      id="about"
      className="bg-gradient-to-b from-zinc-600 to-zinc-900 w-full h-auto py-20 text-white"
    >
      {isLoading && <Loading />}

      <div
        className={`max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full ${
          isLoading ? "hidden" : "visible"
        }`}
      >
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre
          </p>
        </div>

        <div className="flex flex-col-reverse justify-center items-center gap-10 pt-20 md:flex-row">
          <div>
            <img
              src={aboutImageURL}
              alt=""
              className="mx-auto w-60 md:w-full"
            />
          </div>

          {aboutData && (
            <div>
              <p className="text-xl">{aboutData.text[0]}</p>

              <br />

              <p className="text-xl">{aboutData.text[1]}</p>

              <br />

              <p className="text-xl">{aboutData.text[2]}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

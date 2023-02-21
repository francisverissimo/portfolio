import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../services/firebase";
import { AboutFirestoreData } from "../types";
import { CircleNotch } from "phosphor-react";

interface AboutProps {
  aboutData: AboutFirestoreData;
}

export function About({ aboutData }: AboutProps) {
  const [aboutImageURL, setAboutImageURL] = useState("");
  const [imgIsLoading, setImgIsLoading] = useState(true);

  useEffect(() => {
    const subscriber = () => {
      async function getAboutFirebaseData() {
        const imageAboutRef = ref(storage, "home-image.png");

        try {
          const imageAboutURL = await getDownloadURL(imageAboutRef);
          setAboutImageURL(imageAboutURL);
        } catch (error) {
          console.error(error);
        }

        setImgIsLoading(false);
      }

      getAboutFirebaseData();
    };

    return subscriber();
  }, []);

  return (
    <div
      id="about"
      className="bg-gradient-to-b from-zinc-600 to-zinc-800 w-full h-auto py-20 text-white"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Sobre
          </p>
        </div>

        <div className="flex flex-col-reverse justify-center items-center gap-10 pt-20 md:flex-row">
          <div>
            {imgIsLoading ? (
              <CircleNotch size={150} className="animate-spin text-zinc-500" />
            ) : (
              <img
                src={aboutImageURL}
                alt="My profile photo"
                className="mx-auto w-60 md:w-full"
              />
            )}
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
}

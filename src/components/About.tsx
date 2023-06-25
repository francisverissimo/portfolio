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
    async function getAboutFirebaseData() {
      const imageAboutRef = ref(storage, "me.png");

      try {
        const imageAboutURL = await getDownloadURL(imageAboutRef);
        setAboutImageURL(imageAboutURL);
      } catch (error) {
        console.error(error);
      }

      setImgIsLoading(false);
    }

    getAboutFirebaseData();
  }, []);

  return (
    <div id="about" className="h-auto w-full bg-zinc-700 py-20 text-white">
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center px-4">
        <div className="pb-2">
          <p className="inline border-b-4 border-orange-500 text-4xl font-bold">Sobre</p>
        </div>

        <div className="flex flex-col-reverse items-center justify-center gap-10 pt-14 md:flex-row">
          <div>
            {imgIsLoading ? (
              <CircleNotch size={150} className="animate-spin text-zinc-500" />
            ) : (
              <img
                src={aboutImageURL}
                alt="My profile photo"
                className="mx-auto w-52 rounded-full md:w-full"
                loading="lazy"
                style={{
                  opacity: 0,
                  transform: "scale(0.86)",
                  transitionDuration: "200ms",
                }}
                onLoad={(t) => {
                  t.currentTarget.style.opacity = "1";
                  t.currentTarget.style.transform = "initial";
                }}
              />
            )}
          </div>

          {aboutData && (
            <div className="text-justify text-lg">
              {aboutData.text.map((paragraph, index, array) => (
                <span key={index}>
                  {paragraph}

                  {index != array.length -1 && <div className="mx-2 inline-flex h-3 w-3 rounded-full bg-orange-500/60" />}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

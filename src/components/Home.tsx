import { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../services/firebase";
import { Link } from "react-scroll";
import { HomeFirestoreData } from "../types";
import { CaretRight, CircleNotch } from "phosphor-react";

interface HomeProps {
  homeData: HomeFirestoreData;
}

export const Home = ({ homeData }: HomeProps) => {
  const [homeImageURL, setHomeImageURL] = useState("");
  const [imgIsLoading, setImgIsLoading] = useState(true);

  useEffect(() => {
    const subscriber = () => {
      async function getHomeFirebaseData() {
        const imageHomeRef = ref(storage, "home-image.png");

        try {
          const imageHomeURL = await getDownloadURL(imageHomeRef);
          setHomeImageURL(imageHomeURL);
        } catch (error) {
          console.error(error);
        }

        setImgIsLoading(false);
      }

      getHomeFirebaseData();
    };

    return subscriber();
  }, []);

  return (
    <div
      id="home"
      className="bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-500 w-full h-auto py-20 text-white"
    >
      <div
        className={`max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 pt-5 h-full gap-2 md:flex-row         `}
      >
        {homeData && (
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl md:p-0">
              {homeData.title}
            </h2>
            <p className="text-zinc-300 py-4 max-w-md text-lg">
              {homeData.text}
            </p>

            <div>
              <Link
                to="projects"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex gap-1 items-center rounded-md bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-600 cursor-pointer"
              >
                Projetos
                <span className="group-hover:rotate-90 duration-200">
                  <CaretRight size={22} />
                </span>
              </Link>
            </div>
          </div>
        )}

        <div>
          {imgIsLoading ? (
            <CircleNotch size={32} className="animate-spin" />
          ) : (
            <img
              src={homeImageURL}
              alt="my personal picture"
              className="mx-auto w-60 md:w-96"
            />
          )}
        </div>
      </div>
    </div>
  );
};

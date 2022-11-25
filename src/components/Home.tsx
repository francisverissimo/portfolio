import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { db, storage } from "../services/firebase";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { Loading } from "./Loading";
import { HomeFirestoreData } from "../types";

interface HomeProps {
  homeData: HomeFirestoreData;
}

export const Home = ({ homeData }: HomeProps) => {
  const [homeImageURL, setHomeImageURL] = useState("");

  useEffect(() => {
    const subscriber = () => {
      async function getHomeFirebaseData() {
        const imageHomeRef = ref(storage, "home-image.png");

        try {
          const imageHomeURL = await getDownloadURL(imageHomeRef);
          setHomeImageURL(imageHomeURL);
        } catch (error) {
          console.log(error);
        }
      }

      getHomeFirebaseData();
    };

    return subscriber();
  }, []);

  return (
    <div
      id="home"
      className="bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-600 w-full h-auto py-20 text-white"
    >
      <div
        className={`max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 pt-5 h-full gap-2 md:flex-row         `}
      >
        {homeData && (
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white md:text-5xl md:p-0">
              {homeData.title}
            </h2>
            <p className="text-zinc-400 py-4 max-w-md">{homeData.text}</p>

            <div>
              <Link
                to="projects"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-600 cursor-pointer"
              >
                Projetos
                <span className="group-hover:rotate-90 duration-200">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
        )}

        <div>
          <img
            src={homeImageURL}
            alt="my personal picture"
            className="mx-auto w-60 md:w-96"
          />
        </div>
      </div>
    </div>
  );
};

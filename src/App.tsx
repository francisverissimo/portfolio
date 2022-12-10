import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./services/firebase";
import {
  AboutFirestoreData,
  HomeFirestoreData,
  ProjectFirestoreData,
} from "./types";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Knowledge } from "./components/Knowledge";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Loading } from "./components/Loading";
import { SocialLinks } from "./components/SocialLinks";

interface FrancisData {
  home: HomeFirestoreData;
  about: AboutFirestoreData;
  projects: ProjectFirestoreData[];
}

export function App() {
  const [francisData, setFrancisData] = useState<FrancisData>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getFirestoreFrancisDocument() {
      try {
        const docRef = doc(db, "data-page", "francissverissimo");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data() as FrancisData;
          setFrancisData(data);
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }

    getFirestoreFrancisDocument();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        francisData && (
          <>
            <NavBar />
            <Home homeData={francisData.home} />
            <About aboutData={francisData.about} />
            <Projects projectsData={francisData.projects} />
            <Knowledge />
            <Contact />
            <SocialLinks />
          </>
        )
      )}
    </>
  );
}

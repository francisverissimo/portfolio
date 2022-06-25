import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Knowledge } from "./components/Knowledge";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { SocialLinks } from "./components/SocialLinks";

export function App() {
  return (
    <>
      <NavBar />;
      <Home />
      <About />
      <Projects />
      <Knowledge />
      <Contact />
      <SocialLinks />
    </>
  );
}
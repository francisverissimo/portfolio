import { About } from './components/About'
import { Contact } from './components/Contact'
import { Presentation } from './components/presentation'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'

export function App() {
  return (
    <>
      <NavBar />
      <Presentation />
      {/* <Projects projectsData={projects} /> */}
      {/* <About aboutData={about} /> */}
      {/* <Contact /> */}
    </>
  )
}

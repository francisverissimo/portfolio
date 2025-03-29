import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { About } from './components/About'
import { NavBar } from './components/NavBar'
import { Contact } from './components/Contact'
import { Projects } from './components/projects'
import { Presentation } from './components/presentation'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <Presentation />
      <Projects />
      {/* <About aboutData={about} /> */}
      {/* <Contact /> */}
    </QueryClientProvider>
  )
}

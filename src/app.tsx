import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { About } from './components/about'
import { NavBar } from './components/nav-bar'
import { Contact } from './components/contact'
import { Projects } from './components/projects'
import { Presentation } from './components/presentation'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <Presentation />
      <Projects />
      <About />
      <Contact />
    </QueryClientProvider>
  )
}

import { useEffect, useState } from 'react'
import { PortfolioData } from './types'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'
import { Loading } from './components/Loading'
import { getPortfolioData } from './services/firestore'

export function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData>()

  async function getPortfolio() {
    const portfolio = await getPortfolioData()

    if (portfolio) {
      setPortfolioData(portfolio)
    }
  }

  useEffect(() => {
    getPortfolio()
  }, [])

  if (!portfolioData) {
    return <Loading />
  }

  const { home, about, projects } = portfolioData

  return (
    <>
      <NavBar />
      <Home homeData={home} />
      {/* <Projects projectsData={projects} /> */}
      {/* <About aboutData={about} /> */}
      {/* <Contact /> */}
    </>
  )
}

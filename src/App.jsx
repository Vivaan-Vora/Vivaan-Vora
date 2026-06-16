import About from './components/About.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'

function App() {
  return (
    <main className="min-h-screen bg-portfolio-bg text-portfolio-primary">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </main>
  )
}

export default App

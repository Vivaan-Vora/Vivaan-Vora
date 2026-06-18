import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import SiteEffects from './components/SiteEffects.jsx'

function App() {
  return (
    <main className="min-h-screen bg-portfolio-bg text-portfolio-primary">
      <SiteEffects />
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App

import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Stamp from './components/Stamp'
import ScrollToTop from './components/ScrollToTop'
import ParticleBackground from './components/ParticleBackground'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleStampClick = () => {
    if (heroRef.current && heroRef.current.handleProfileImageChange) {
      heroRef.current.handleProfileImageChange()
    }
  }

  return (
    <div className="App">
      <ParticleBackground />
      <Navbar activeSection={activeSection} />
      <Hero ref={heroRef} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Stamp onStampClick={handleStampClick} />
    </div>
  )
}

export default App


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
import ParticleBackground from './components/ParticleBackground'
import CursorGlow from './components/CursorGlow'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const heroRef = useRef(null)

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact']
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    // Track which section occupies the middle band of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most-visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      {
        // a horizontal band around the viewport middle
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleStampClick = () => {
    if (heroRef.current && heroRef.current.handleProfileImageChange) {
      heroRef.current.handleProfileImageChange()
    }
  }

  return (
    <div className="App">
      <ParticleBackground />
      <CursorGlow />
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


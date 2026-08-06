import { useState, forwardRef, useImperativeHandle } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import './Hero.css'

import profileImage from '../assets/profile.jpg'
import profileImage4 from '../assets/profile4.jpg'

// Skill "particles" that orbit the planet. Split across two rings for depth.
const DEV_WORDS = ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'SQL', 'DSA']
const CREATIVE_WORDS = ['LLM', 'RAG', 'Vector Search', 'React', 'Storyteller', 'Designer']

const splitRings = (words) => ({
  outer: words.slice(0, Math.ceil(words.length / 2)),
  inner: words.slice(Math.ceil(words.length / 2)),
})

const Hero = forwardRef((props, ref) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  const [currentProfileImage, setCurrentProfileImage] = useState(profileImage)
  const [isFlipping, setIsFlipping] = useState(false)
  const [words, setWords] = useState(DEV_WORDS)

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleResumeDownload = (e) => {
    e.preventDefault()
    window.open(`${import.meta.env.BASE_URL}resume.pdf`, '_blank', 'noopener,noreferrer')
  }

  const handleProfileImageChange = () => {
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentProfileImage((prev) => {
        const isDev = prev === profileImage
        const newImage = isDev ? profileImage4 : profileImage
        setWords(isDev ? CREATIVE_WORDS : DEV_WORDS)
        return newImage
      })
    }, 300)
    setTimeout(() => setIsFlipping(false), 600)
  }

  useImperativeHandle(ref, () => ({ handleProfileImageChange }))

  const rings = splitRings(words)
  const isDev = currentProfileImage === profileImage

  const renderRing = (ringWords, ringClass) => (
    <div className={`orbit-ring ${ringClass}`}>
      {ringWords.map((word, index) => {
        const angle = (360 / ringWords.length) * index
        return (
          <div
            key={`${word}-${index}`}
            className="orbit-slot"
            style={{ '--angle': `${angle}deg` }}
          >
            <span className="orbit-word">{word}</span>
          </div>
        )
      })}
    </div>
  )

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
          >
            <motion.p className="hero-greeting" variants={itemVariants}>
              Hello, I'm
            </motion.p>
            <motion.h1 className="hero-name" variants={itemVariants}>
              <span className="name-first">Vishvajit</span>
              <span className="name-last">Jadhav</span>
            </motion.h1>
            <motion.div className="hero-title" variants={itemVariants}>
              <span className="title-text">Software Engineer</span>
              <span className="title-cursor">|</span>
            </motion.div>
            <motion.div className="hero-specialty" variants={itemVariants}>
              <span className="spec-pill">Java Backend</span>
              <span className="spec-dot">·</span>
              <span className="spec-pill">Spring Boot</span>
              <span className="spec-dot">·</span>
              <span className="spec-pill">React</span>
              <span className="spec-dot">·</span>
              <span className="spec-pill">LLM / RAG</span>
            </motion.div>
            <motion.p className="hero-description" variants={itemVariants}>
              I build Java/Spring Boot backend systems and production LLM/RAG features —
              concurrency-safe transactional workflows, REST microservices, and end-to-end
              AI experiences with React frontends and vector search.
            </motion.p>
            <motion.div className="hero-buttons" variants={itemVariants}>
              <button className="btn-primary" onClick={scrollToContact}>
                <span>Get In Touch</span>
              </button>
              <a href="#projects" className="btn-secondary">
                View My Work
              </a>
              <button onClick={handleResumeDownload} className="btn-resume">
                <FaDownload /> Resume
              </button>
            </motion.div>
            <motion.div className="hero-social" variants={itemVariants}>
              <a href="https://linkedin.com/in/vishvajit09" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Vishvajitjadhav" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://x.com/Vishvajit1009" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <FaXTwitter />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-planet"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="planet-system">
              <div className="planet-halo" />
              <div className="planet-glow" />
              <button
                className={`planet-core ${isFlipping ? 'flipping' : ''}`}
                onClick={handleProfileImageChange}
                aria-label="Switch persona"
                title="Tap to switch persona"
              >
                <img src={currentProfileImage} alt="Vishvajit Jadhav" className="planet-image" />
              </button>

              {/* orbiting skill particles */}
              <div className="orbit-layer">
                {renderRing(rings.outer, 'ring-outer')}
                {renderRing(rings.inner, 'ring-inner')}
              </div>
            </div>
            <p className="planet-hint">{isDev ? 'Engineer' : 'Creator'} · tap to flip</p>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
})

export default Hero

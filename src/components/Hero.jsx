import { useState, forwardRef, useImperativeHandle } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import './Hero.css'

import profileImage from '../assets/profile.jpg'
import profileImage4 from '../assets/profile4.jpg'

const Hero = forwardRef((props, ref) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const [currentProfileImage, setCurrentProfileImage] = useState(profileImage)
  const [isFlipping, setIsFlipping] = useState(false)
  
  // Words for different profile images
  const profile1Words = ['Java', 'SpringBoot', 'API', 'React', 'DSA', 'SQL']
  const profile4Words = ['Storyteller', 'Writer', 'Developer', 'Coder', 'Traveller', 'Designer']
  
  const [floatingWords, setFloatingWords] = useState(profile1Words)
  const [isRotating, setIsRotating] = useState(false)

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleResumeDownload = (e) => {
    e.preventDefault()
    window.open('https://drive.google.com/file/d/1nw25GasBZ7TGAmtb_7T4HHMaL3SfXRoN/view?usp=sharing', '_blank')
  }

  const handleProfileImageChange = () => {
    setIsFlipping(true)
    setIsRotating(true)
    
    // Start rotation animation
    setTimeout(() => {
      setCurrentProfileImage(prev => {
        const newImage = prev === profileImage ? profileImage4 : profileImage
        // Update floating words based on new image
        setFloatingWords(newImage === profileImage ? profile1Words : profile4Words)
        return newImage
      })
    }, 300) // Half of flip duration
    
    // End animations
    setTimeout(() => {
      setIsFlipping(false)
      setIsRotating(false)
    }, 600) // Full flip duration
  }

  useImperativeHandle(ref, () => ({
    handleProfileImageChange
  }))

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.div
            className="hero-text"
            variants={itemVariants}
          >
            <motion.p
              className="hero-greeting"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              className="hero-name"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="name-first">Vishvajit</span>
              <span className="name-last">Jadhav</span>
            </motion.h1>
            <motion.div
              className="hero-title"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="title-text">Software Engineer</span>
              <span className="title-cursor">|</span>
            </motion.div>
            <motion.p
              className="hero-description"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Passionate about building secure, scalable, and high-performance backend systems
              using Java, Spring Boot, and microservices architecture.
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <button className="btn-primary" onClick={scrollToContact}>
                <span>Get In Touch</span>
              </button>
              <a
                href="#projects"
                className="btn-secondary"
              >
                View My Work
              </a>
              <button
                onClick={handleResumeDownload}
                className="btn-resume"
              >
                <FaDownload /> Resume
              </button>
            </motion.div>
            <motion.div
              className="hero-social"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <a
                href="https://linkedin.com/in/vishvajit09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Vishvajitjadhav"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/Vishvajit1009"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <FaXTwitter />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image-container"
            variants={itemVariants}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="hero-image-wrapper">
              <div className="image-glow"></div>
              <div className={`hero-image-container-flip ${isFlipping ? 'flipping' : ''}`}>
                {currentProfileImage ? (
                  <img
                    src={currentProfileImage}
                    alt="Vishvajit Jadhav"
                    className="hero-image"
                  />
                ) : (
                  <div className="image-placeholder">
                    <span>VAJ</span>
                  </div>
                )}
              </div>
            </div>
            <div className={`floating-elements ${isRotating ? 'rotating' : ''}`}>
              {floatingWords.map((word, index) => {
                const totalWords = floatingWords.length
                const angle = (360 / totalWords) * index
                const radius = 220 // Increased distance from center
                
                return (
                  <motion.div
                    key={`${word}-${currentProfileImage === profileImage ? '1' : '4'}-${index}`}
                    className="float-element"
                    style={{
                      '--angle': `${angle}deg`,
                      '--radius': `${radius}px`,
                      '--index': index,
                      '--total': totalWords,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {word}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
})

export default Hero


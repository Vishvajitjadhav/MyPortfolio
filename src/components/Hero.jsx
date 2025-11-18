import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import './Hero.css'

// Profile image - replace with your actual image path
// Place your image at: src/assets/profile.jpg
// Then uncomment the line below and comment out the profileImage = null line
import profileImage from '../assets/profile.jpg'
//const profileImage = null // Set to null to use placeholder, or import your image above

const Hero = () => {
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

  const [isDownloading, setIsDownloading] = useState(false)

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleResumeDownload = async (e) => {
    e.preventDefault()
    setIsDownloading(true)

    try {
      const response = await fetch('/resume.pdf', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/pdf',
        },
      })
      
      if (!response.ok) {
        throw new Error(`Failed to fetch resume: ${response.status} ${response.statusText}`)
      }
      
      const blob = await response.blob()
      
      // Verify it's actually a PDF
      if (blob.type !== 'application/pdf' && blob.size > 0) {
        // Force PDF type if not set correctly
        const pdfBlob = new Blob([blob], { type: 'application/pdf' })
        const url = window.URL.createObjectURL(pdfBlob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'Vishvajit_Jadhav_Resume.pdf'
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        
        // Clean up after a delay
        setTimeout(() => {
          document.body.removeChild(link)
          window.URL.revokeObjectURL(url)
        }, 100)
      } else {
        // Use the blob as-is
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = 'Vishvajit_Jadhav_Resume.pdf'
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        
        setTimeout(() => {
          document.body.removeChild(link)
          window.URL.revokeObjectURL(url)
        }, 100)
      }
    } catch (error) {
      console.error('Error downloading resume:', error)
      alert('Failed to download resume. Please check if the file exists at public/resume.pdf')
    } finally {
      setIsDownloading(false)
    }
  }

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
                disabled={isDownloading}
              >
                <FaDownload /> {isDownloading ? 'Downloading...' : 'Resume'}
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
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Vishvajit Jadhav"
                  className="hero-image"
                />
              ) : (
                <div className="image-placeholder">
                  <span>VAJ</span>
                </div>
              )}
            </div>
            <div className="floating-elements">
              <div className="float-element float-1">Java</div>
              <div className="float-element float-2">Spring</div>
              <div className="float-element float-3">React</div>
              <div className="float-element float-4">API</div>
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
}

export default Hero


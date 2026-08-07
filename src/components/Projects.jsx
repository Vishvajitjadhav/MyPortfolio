import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaPlay, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const sliderRef = useRef(null)

  const slide = (dir) => {
    const el = sliderRef.current
    if (!el) return
    const card = el.querySelector('.project-card')
    const gap = 24
    const amount = card ? card.offsetWidth + gap : el.clientWidth * 0.8
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  const projects = [
    {
      title: 'Yatrik Hotel Booking Platform',
      period: 'Jan 2026',
      summary: 'A scalable, Airbnb style booking backend with concurrency safe availability, a dynamic pricing engine, and Stripe payments.',
      tech: ['Java', 'Spring Boot', 'PostgreSQL'],
      github: 'https://github.com/Vishvajitjadhav/Yatrik-backend',
      demo: '',
      color: '#E11D48',
      image: `${import.meta.env.BASE_URL}yatrik.jpg`,
      videoId: '1ij9CAPaNIpBysmKZljSAbhinGGyZXwuD',
    },
    {
      title: 'AI Interview Copilot',
      period: 'Mar 2026',
      summary: 'A full stack app that generates personalized interview prep roadmaps using structured LLM workflows, with JWT auth. Deployed live.',
      tech: ['React', 'Spring Boot', 'Java', 'Groq LLM'],
      github: 'https://github.com/Vishvajitjadhav/ai-interview-copilot',
      demo: 'https://ai-interview-copilot-sooty.vercel.app',
      color: '#3b82f6',
      image: `${import.meta.env.BASE_URL}ai-copilot.jpg`,
      videoId: '11gO18mUmLRy-MPVTTWdJ_ef22SEtP7Ts',
    },
    {
      title: 'RAG File Search System',
      period: 'Dec 2025',
      summary: 'An offline system for local semantic search across files. Chunking, embeddings, and vector search feed an LLM for grounded answers.',
      tech: ['Python', 'Embeddings', 'Vector Search', 'LLM'],
      github: 'https://github.com/Vishvajitjadhav/RAG-File-Search-System',
      demo: '',
      color: '#22d3ee',
      image: null,
      videoId: '',
    },
    {
      title: 'Smart Meeting Summary Generator',
      period: 'Feb 2026',
      summary: 'An LLM based meeting summarizer with schema validated structured output and a modular, multi provider architecture.',
      tech: ['Python', 'Streamlit', 'LLM'],
      github: 'https://github.com/Vishvajitjadhav/Smart-Meeting-Summary-Generator',
      demo: '',
      color: '#8b5cf6',
      image: `${import.meta.env.BASE_URL}smart-meeting.jpg`,
      videoId: '1oR49mSGh14Pw9WiO8HKk94mN1JtoJ0oj',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  // Handle Video Modal Open
  const openVideo = (videoId, e) => {
    e.stopPropagation();
    setSelectedVideo(videoId);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  // Handle Video Modal Close
  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  }

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">04.</span>
          <h2 className="section-title">
            <span className="title-normal">Featured </span>
            <span className="title-accent">Projects</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="projects-slider-wrap">
          <button className="slider-arrow left" onClick={() => slide(-1)} aria-label="Previous projects">
            <FaChevronLeft />
          </button>
          <button className="slider-arrow right" onClick={() => slide(1)} aria-label="Next projects">
            <FaChevronRight />
          </button>
          <div className="projects-slider" ref={sliderRef}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
            >
              <div
                className={`project-image-wrapper ${project.videoId ? 'has-video' : ''}`}
                onClick={project.videoId ? (e) => openVideo(project.videoId, e) : undefined}
                style={{ '--project-color': project.color }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="project-image-placeholder">
                    <FaGithub className="placeholder-icon" />
                  </div>
                )}
                {project.videoId && (
                  <div className="project-video-overlay">
                    <div className="play-button">
                      <FaPlay className="play-icon" />
                    </div>
                  </div>
                )}
              </div>

              <div className="project-content">
                <div className="project-meta-top">
                  <span className="project-period">{project.period}</span>
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub">
                        <FaGithub />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.summary}</p>

                {project.videoId ? (
                  <div
                    className="demo-trigger"
                    onClick={(e) => openVideo(project.videoId, e)}
                  >
                    <FaPlay size={12} /> Watch Demo
                  </div>
                ) : (
                  <a
                    className="demo-trigger"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={13} /> View Code
                  </a>
                )}

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            className="video-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div 
              className="video-modal-content"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="video-close-btn" onClick={closeVideo}>
                <FaTimes />
              </button>
              
              <div className="video-wrapper">
                {selectedVideo && !selectedVideo.includes('sample_video_id') ? (
                  <iframe 
                    src={`https://drive.google.com/file/d/${selectedVideo}/preview`} 
                    width="100%" 
                    height="100%" 
                    allow="autoplay"
                    title="Project Demo Video"
                  ></iframe>
                ) : (
                  <div className="placeholder-video">
                    <FaPlay size={48} color="rgba(255,255,255,0.2)" />
                    <p>Video Player Placeholder<br/>(Video to be added soon!)</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects


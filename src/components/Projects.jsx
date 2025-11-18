import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'AI Interview & Resume Mentor',
      period: 'Sep 2025 – Nov 2025',
      description: 'A full-stack Java application using Spring Boot, React, MySQL, and Gemini AI for mock interview generation and resume analysis.',
      features: [
        'Voice-based interaction with Web Speech API for real-time interview simulation',
        'Resume Analyzer using Apache PDFBox and AI text analysis for feedback',
        'Mock interview generation with AI-powered questions',
      ],
      tech: ['Java', 'Spring Boot', 'React', 'MySQL', 'Gemini AI', 'Web Speech API', 'Apache PDFBox'],
      github: '#',
      demo: '#',
      color: '#dc2626',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'Zaminwala - The Real Estate Listing Platform',
      period: 'Mar 2025 – May 2025',
      description: 'A comprehensive real estate platform with RESTful microservices architecture for listings and user management.',
      features: [
        'RESTful microservices using Java, Spring Boot, and JPA/Hibernate',
        'MySQL database schemas with optimized queries',
        'JWT authentication for secure and scalable performance',
      ],
      tech: ['Java', 'Spring Boot', 'JPA/Hibernate', 'MySQL', 'JWT', 'Microservices'],
      github: '#',
      demo: '#',
      color: '#3b82f6',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'AI Storyteller - A Story Generation App',
      period: 'June 2025 – Aug 2025',
      description: 'An AI-powered storytelling application that generates stories from images and genres using Google Gemini API.',
      features: [
        'Story generation from images and selected genres',
        'Text-to-speech (TTS) for real-time AI voice narration',
        'Interactive story playback with user controls',
      ],
      tech: ['Python', 'Streamlit', 'Google Gemini API', 'Text-to-Speech'],
      github: '#',
      demo: '#',
      color: '#8b5cf6',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">04.</span>
          <h2 className="section-title">
            <span className="title-normal">Featured </span>
            <span className="title-accent">Projects</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-image-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="GitHub"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-period">{project.period}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects


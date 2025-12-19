import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Yatrik - Hotel Booking & Management System',
      period: 'Personal Project | 2025',
      description: 'Designed a scalable backend architecture inspired by Airbnb using Spring Boot, JPA, and PostgreSQL. Implemented booking workflows including availability checks, inventory control, and transaction safety.',
      features: [
        'Scalable backend architecture using Spring Boot, JPA, and PostgreSQL',
        'Booking workflows with availability checks and inventory control',
        'Transaction safety to prevent double bookings',
        'Role-based access control (USER / HOST) with booking status lifecycle',
        'Comprehensive exception handling and error management',
      ],
      tech: ['Java', 'Spring Boot', 'JPA', 'PostgreSQL', 'RESTful APIs', 'Microservices'],
      github: 'https://github.com/Vishvajitjadhav/Yatrik-backend',
      color: '#dc2626',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'Zaminwala - Real Estate Listing Platform',
      period: 'Mar 2025 – May 2025',
      description: 'A comprehensive real estate platform with RESTful microservices architecture for property listings and user management.',
      features: [
        'RESTful microservices for property listings and user management using Java and Spring Boot',
        'Relational MySQL schemas with optimized queries',
        'JWT-based authentication for secure and scalable performance',
        'Property search and filtering capabilities',
      ],
      tech: ['Java', 'Spring Boot', 'JPA/Hibernate', 'MySQL', 'JWT', 'Microservices'],
      github: 'https://github.com/Vishvajitjadhav/Zaminwala',
      color: '#3b82f6',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80',
    },
    {
      title: 'AI-ML Vehicle Anomaly Detection',
      period: 'Personal Project | 2025',
      description: 'End-to-end Vehicle Sensor Anomaly Detection system using Python, Scikit-Learn, FastAPI, and Docker. Built ML models to detect abnormal automotive sensor behavior for predictive maintenance.',
      features: [
        'ML models (Random Forest, SVM) to detect abnormal automotive sensor behavior',
        'Data preprocessing, train/validation/test split with high recall optimization',
        'Containerized workflow using Docker for Linux/on-prem deployment',
        'FastAPI microservice for real-time anomaly detection',
        'Safety-critical detection optimized for automotive predictive maintenance',
      ],
      tech: ['Python', 'Scikit-Learn', 'FastAPI', 'Docker', 'Machine Learning', 'Data Preprocessing'],
      github: 'https://github.com/Vishvajitjadhav/AI-ML-Vehicle-Anomaly-Detection',
      color: '#8b5cf6',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80',
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

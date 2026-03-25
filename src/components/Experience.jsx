import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'Consultadd Inc.',
      position: 'Software Engineer', // Updated from "Software Engineer (Trainee)"
      period: 'May 2025 – Oct 2025',
      location: 'Pune, Maharashtra',
      achievements: [
        'Built and enhanced REST APIs using Spring Boot, supporting multiple backend workflows across applications',
        'Designed transaction-safe service logic ensuring data consistency during concurrent database operations',
        'Automated backend data processing pipelines, reducing manual effort by approximately 60% and improving reliability',
        'Optimized SQL queries for faster data retrieval, improving response time in reporting workflows',
        'Debugged and resolved production issues, improving system stability and reducing failure cases'
      ],
      tech: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'Microservices', 'Agile'],
    },
    {
      company: 'Elite Software Pvt. Ltd.',
      position: 'Software Engineer Intern',
      period: 'Jan 2023 – Jun 2023',
      location: 'Pune, Maharashtra',
      achievements: [
        'Developed backend APIs and designed relational database schemas for internal applications',
        'Wrote optimized SQL queries to support high-frequency CRUD operations and validations',
        'Integrated frontend with backend services ensuring smooth data flow and API reliability',
        'Improved application performance by debugging issues in client-server architecture'
      ],
      tech: ['Python', 'Django', 'RESTful APIs', 'HTML', 'CSS', 'JavaScript'],
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="experience" className="experience">
      <motion.div
        className="experience-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">03.</span>
          <h2 className="section-title">
            <span className="title-normal">Professional </span>
            <span className="title-accent">Experience</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-marker">
                <FaBriefcase className="marker-icon" />
                {index < experiences.length - 1 && <div className="timeline-line" />}
              </div>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-position">{exp.position}</h3>
                      <h4 className="experience-company">{exp.company}</h4>
                    </div>
                    <div className="experience-meta">
                      <span className="experience-period">{exp.period}</span>
                      <span className="experience-location">{exp.location}</span>
                    </div>
                  </div>
                  <ul className="experience-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  <div className="experience-tech">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience


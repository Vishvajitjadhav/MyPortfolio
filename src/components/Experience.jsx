import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'Speed IT Innovations',
      position: 'AI Developer',
      period: 'May 2026 to Present',
      location: 'Pune, Maharashtra',
      achievements: [
        'Building production AI applications across a React, Node.js, and .NET Core stack, integrating Claude for LLM powered features',
        'Implemented RAG pipelines and LLM guardrails (input/output validation, topic restriction, fallback flows) for reliable, grounded responses',
        'Containerized services with Docker and reduced end to end LLM latency through prompt optimization, response streaming, and caching',
      ],
      tech: ['React', 'Node.js', '.NET Core', 'Docker', 'Claude', 'LLM', 'RAG'],
    },
    {
      company: 'Consultadd Inc.',
      position: 'Software Engineer (Trainee)',
      period: 'May 2025 to Oct 2025',
      location: 'Pune, Maharashtra',
      achievements: [
        'Built concurrency safe, transactional backend services in Java/Spring Boot for US based SMB clients',
        'Optimized SQL queries and database access paths, improving API response times on large datasets',
        'Resolved production issues via structured debugging and logging, improving system stability',
        'Translated client requirements into working demos and business aligned APIs with cross functional teams',
      ],
      tech: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'Microservices', 'Agile'],
    },
    {
      company: 'Independent AI Engineering',
      position: 'Self Directed',
      period: 'Nov 2025 to Apr 2026',
      location: 'Remote',
      achievements: [
        'Specialization sprint in GenAI and full stack Java; built and shipped three applications',
        'Covered RAG pipelines, LLM integration, payment flows, and concurrency safe backend design',
      ],
      tech: ['Java', 'Spring Boot', 'Python', 'RAG', 'LLM', 'Stripe'],
    },
    {
      company: 'Elite Softwares Pvt. Ltd.',
      position: 'Software Engineer Intern',
      period: 'Jan 2023 to Dec 2023',
      location: 'Pune, Maharashtra',
      achievements: [
        'Developed RESTful APIs in Java/Spring Boot and designed relational schemas for internal applications',
        'Wrote optimized SQL for CRUD operations, backend validations, and application performance',
      ],
      tech: ['Java', 'Spring Boot', 'REST APIs', 'SQL'],
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


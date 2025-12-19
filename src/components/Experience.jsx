import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      company: 'Consultadd Inc.',
      position: 'Software Engineer (Trainee)',
      period: 'May 2025 – Oct 2025',
      location: 'Pune, Maharashtra',
      achievements: [
        'Developed and maintained REST APIs using Java, Spring Boot, and Hibernate for a finance-domain client.',
        'Implemented service-layer business logic, validations, and database interactions following layered architecture.',
        'Reduced manual spreadsheet-driven workflows by automating backend data processing pipelines.'
      ],
      tech: ['Java', 'Spring Boot', 'Hibernate', 'REST APIs', 'Microservices', 'Agile'],
    },
    {
      company: 'FUEL - Friends Union for Energising Lives',
      position: 'Java Intern',
      period: 'June 2024 – Dec 2024',
      location: 'Pune, Maharashtra',
      achievements: [
        'Developed Spring Boot-based backend APIs for a real estate project, improving data flow and system performance',
        'Applied Java, SQL, and OOP concepts in a live project, gaining hands-on experience in database management',
      ],
      tech: ['Java', 'Spring Boot', 'SQL', 'OOP', 'MySQL'],
    },
    {
      company: 'Elite Software Pvt. Ltd.',
      position: 'Software Engineer Intern',
      period: 'Jan 2023 – Jun 2023',
      location: 'Pune, Maharashtra',
      achievements: [
        'Contributed to backend development of web applications by designing APIs and database schemas.',
        'Worked on SQL queries, backend validations, and client-server data flow.',
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


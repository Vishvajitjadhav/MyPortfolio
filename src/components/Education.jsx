import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      institution: 'Savitribai Phule Pune University',
      degree: 'B.E. in Computer Engineering',
      location: 'Pune, Maharashtra',
      period: 'Jul 2020 – May 2024',
      grade: 'CGPA: 8.49/10',
      description: 'Focused on software engineering, data structures, algorithms, and system design.',
    },
    {
      institution: 'Saint Dnyaneshwar Mahavidhyalaya (SPPU)',
      degree: 'HSC (Science)',
      location: 'Newasa, Maharashtra',
      period: 'Aug 2018 – May 2020',
      grade: '64.46%',
      description: 'Completed higher secondary education with focus on science and mathematics.',
    },
    {
      institution: 'Seventh-Day Adventist School',
      degree: 'SSC',
      location: 'Newasa, Maharashtra',
      period: 'Aug 2017 – May 2018',
      grade: '83.40%',
      description: 'Completed secondary school education with excellent academic performance.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="education" className="education">
      <motion.div
        className="education-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">05.</span>
          <h2 className="section-title">
            <span className="title-normal">My </span>
            <span className="title-accent">Education</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>
              <div className="education-content">
                <div className="education-period">{edu.period}</div>
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <div className="education-location">{edu.location}</div>
                <div className="education-grade">
                  <span className="grade-label">Grade:</span>
                  <span className="grade-value">{edu.grade}</span>
                </div>
                <p className="education-description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Education


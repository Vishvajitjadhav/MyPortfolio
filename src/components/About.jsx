import { motion } from 'framer-motion'
import { FaGraduationCap, FaTrophy } from 'react-icons/fa'
import './About.css'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" className="about">
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">01.</span>
          <h2 className="section-title">
            <span className="title-normal">About </span>
            <span className="title-accent">Me</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <p className="about-description">
              I'm a passionate Software Engineer from <span className="highlight">Pune, Maharashtra</span>, with a strong foundation in backend development and a keen interest in building robust, scalable applications. My journey in software engineering has equipped me with expertise in <span className="highlight">Java</span>, <span className="highlight">Spring Boot</span>, and modern <span className="highlight">microservices architecture</span>.
            </p>
            <p className="about-description">
              I believe in writing clean, maintainable code and following best practices to deliver high-quality software solutions. My experience spans across developing <span className="highlight">RESTful APIs</span>, implementing business logic, and working with various databases and frameworks.
            </p>
            <p className="about-description">
              Beyond coding, I'm deeply involved in theater arts as a Writer, Director, and Actor, which has taught me valuable lessons in creativity, collaboration, and leadership that I bring to every project.
            </p>
          </motion.div>

          <motion.div className="about-cards" variants={itemVariants}>
            <motion.div
              className="about-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="card-icon-wrapper">
                <FaGraduationCap className="card-icon" />
              </div>
              <h3 className="card-title">Education</h3>
              <div className="card-content">
                <div className="card-degree">B.E. in Computer Engineering</div>
                <div className="card-institution">Savitribai Phule Pune University</div>
                <div className="card-meta">CGPA: 8.49/10 | 2020 - 2024</div>
              </div>
            </motion.div>

            <motion.div
              className="about-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="card-icon-wrapper">
                <FaTrophy className="card-icon" />
              </div>
              <h3 className="card-title">Achievements</h3>
              <div className="card-content">
                <ul className="achievements-list">
                  <li>Led theater teams for state-level competitions</li>
                  <li>Developed scalable backend systems in Agile environments</li>
                  <li>Built AI-powered full-stack applications</li>
                  <li>Organized workshops fostering creativity and expression</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

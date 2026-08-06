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
              I'm a Software Engineer based in <span className="highlight">Pune, India</span>, working at the intersection of <span className="highlight">Java/Spring Boot backend systems</span> and <span className="highlight">production AI</span>. Right now I'm an <span className="highlight">AI Developer at Speed IT Innovations</span>, building LLM-powered features and RAG pipelines for real users.
            </p>
            <p className="about-description">
              What I care about is correctness under load — <span className="highlight">concurrency-safe, transactional</span> services, clean architecture, and APIs that hold up in production. I've shipped end-to-end applications that pair solid backends with <span className="highlight">LLM integration</span>, <span className="highlight">vector search</span>, and React frontends.
            </p>
            <p className="about-description">
              Away from the editor, I'm a storyteller — writing and performing in theater — which is where I sharpened the collaboration, clarity, and calm-under-pressure I bring to every team I join.
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
                  <li>Shipped 3 full-stack GenAI applications end to end</li>
                  <li>Built a concurrency-safe hotel-booking backend (Yatrik)</li>
                  <li>Certified in Generative AI with LLMs (DeepLearning.AI)</li>
                  <li>Led theater teams at state-level competitions</li>
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

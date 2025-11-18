import { motion } from 'framer-motion'
import { FaCode, FaWrench, FaDatabase, FaCog } from 'react-icons/fa'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: FaCode,
      skills: ['Java', 'Python', 'JavaScript', 'SQL'],
    },
    {
      title: 'Frameworks',
      icon: FaWrench,
      skills: ['Spring Boot', 'Hibernate', 'React', 'Angular', 'JUnit', 'RESTful APIs', 'Microservices'],
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      skills: ['MySQL', 'PostgreSQL', 'SQL'],
    },
    {
      title: 'Tools & DevOps',
      icon: FaCog,
      skills: ['Git', 'Docker', 'Jenkins', 'Postman', 'IntelliJ IDEA', 'VS Code'],
    },
  ]

  const coreConcepts = [
    'OOP',
    'Data Structures',
    'Algorithms',
    'Agile/Scrum',
    'JPA',
    'OS',
    'DBMS',
  ]

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
    <section id="skills" className="skills">
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">02.</span>
          <h2 className="section-title">
            <span className="title-normal">Technical </span>
            <span className="title-accent">Skills</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                className="skill-category"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="category-icon-wrapper">
                  <IconComponent className="category-icon" />
                </div>
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-tags">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div className="core-concepts" variants={itemVariants}>
          <div className="core-concepts-bar">
            <h3 className="core-concepts-title">
              <span className="title-normal">Core </span>
              <span className="title-accent">Concepts</span>
            </h3>
            <div className="concepts-tags">
              {coreConcepts.map((concept) => (
                <motion.span
                  key={concept}
                  className="concept-tag"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {concept}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills

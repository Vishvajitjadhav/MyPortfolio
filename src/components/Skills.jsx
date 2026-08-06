import { motion } from 'framer-motion'
import {
  SiJavascript, SiTypescript, SiPython, SiCsharp, SiReact, SiHtml5, SiCss3,
  SiSpringboot, SiDotnet, SiNodedotjs, SiExpress, SiFastapi, SiHibernate,
  SiPostgresql, SiMysql, SiRedis, SiGit, SiDocker, SiJenkins, SiPostman, SiAmazonaws,
} from 'react-icons/si'
import { FaJava, FaDatabase, FaRobot, FaBrain, FaNetworkWired, FaMagic } from 'react-icons/fa'
import './Skills.css'

const techGroups = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', icon: FaJava, color: '#E76F00' },
      { name: 'C#', icon: SiCsharp, color: '#68217A' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'SQL', icon: FaDatabase, color: '#38BDF8' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: '.NET Core', icon: SiDotnet, color: '#8A63D2' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#cbd5e1' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Hibernate', icon: SiHibernate, color: '#BCAE79' },
    ],
  },
  {
    category: 'AI Engineering',
    items: [
      { name: 'Claude', icon: FaRobot, color: '#D97757' },
      { name: 'LLM', icon: FaBrain, color: '#22d3ee' },
      { name: 'RAG', icon: FaNetworkWired, color: '#a855f7' },
      { name: 'Prompting', icon: FaMagic, color: '#6366f1' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
]

const coreConcepts = ['OOP', 'Data Structures', 'Algorithms', 'System Design', 'Design Patterns', 'Agile/Scrum', 'Multithreading']

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.45 } },
}

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">02.</span>
          <h2 className="section-title">
            <span className="title-normal">Technologies I </span>
            <span className="title-accent">Work With</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="tech-groups">
          {techGroups.map((group) => (
            <motion.div key={group.category} className="tech-group" variants={itemVariants}>
              <h3 className="tech-group-title">{group.category}</h3>
              <div className="tech-tiles">
                {group.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.name}
                      className="tech-tile"
                      whileHover={{ y: -5 }}
                      style={{ '--brand': item.color }}
                    >
                      <span className="tech-icon">
                        <Icon />
                      </span>
                      <span className="tech-label">{item.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="core-concepts" variants={itemVariants}>
          <span className="core-concepts-label">Core Concepts</span>
          <div className="concepts-tags">
            {coreConcepts.map((concept) => (
              <span key={concept} className="concept-tag">{concept}</span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills

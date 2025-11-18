import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    purpose: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Pune, Maharashtra',
      link: null,
      color: '#3b82f6',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vishvajit09',
      link: 'https://linkedin.com/in/vishvajit09',
      color: '#0077b5',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/vishvajit09',
      link: 'https://github.com/Vishvajitjadhav',
      color: '#ffffff',
    },
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Using Formspree or EmailJS - for now using mailto as fallback
    // You can integrate EmailJS or Formspree here
    const subject = encodeURIComponent(`Contact from ${formData.name} - ${formData.purpose}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPurpose: ${formData.purpose}\n\nMessage:\n${formData.message}`
    )
    
    // For production, use EmailJS or Formspree
    // For now, using mailto as a simple solution
    window.location.href = `mailto:vishvajitjadhav01@gmail.com?subject=${subject}&body=${body}`
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', purpose: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 1000)
  }

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
    <section id="contact" className="contact">
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="section-header" variants={itemVariants}>
          <span className="section-number">06.</span>
          <h2 className="section-title">
            <span className="title-normal">Get In </span>
            <span className="title-accent">Touch</span>
          </h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div className="contact-content" variants={itemVariants}>
          <div className="contact-text">
            <h3 className="contact-heading">Let's Connect</h3>
            <p className="contact-description">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              Fill out the form below or connect with me on social media!
            </p>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="purpose">Purpose</label>
                <input
                  type="text"
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Job Opportunity, Collaboration, Question"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  className="submit-success"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </div>

          <div className="contact-cards">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              const CardComponent = info.link ? 'a' : 'div'
              const props = info.link
                ? { href: info.link, target: '_blank', rel: 'noopener noreferrer' }
                : {}

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <CardComponent
                    className="contact-card"
                    {...props}
                    style={{ cursor: info.link ? 'pointer' : 'default' }}
                  >
                    <div className="contact-icon-wrapper" style={{ backgroundColor: `${info.color}20` }}>
                      <IconComponent className="contact-icon" style={{ color: info.color }} />
                    </div>
                    <div className="contact-info">
                      <div className="contact-label">{info.label}</div>
                      <div className="contact-value">{info.value}</div>
                    </div>
                  </CardComponent>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div className="contact-footer" variants={itemVariants}>
          <p className="footer-text">
            Designed & Built by <span className="footer-name">Vishvajit Ajit Jadhav</span>
          </p>
          <p className="footer-year">© 2025</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact


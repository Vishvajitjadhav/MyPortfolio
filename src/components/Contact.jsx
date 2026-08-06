import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane, FaEnvelope, FaPhone } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reason: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const reasonOptions = ['Freelance', 'Collaboration', 'Enquiry', 'Hire']

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleReasonSelect = (reason) => {
    setFormData({
      ...formData,
      reason: reason,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formPayload = {
      access_key: "c93028c6-355d-4df9-8d14-5953986b8058", 
      subject: `Portfolio Contact: ${formData.reason || 'General Inquiry'}`,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      message: `Reason: ${formData.reason}\n\nMessage:\n${formData.message}`
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formPayload)
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ firstName: '', lastName: '', email: '', reason: '', message: '' })
      } else {
        // Fallback for missing access key showing success for demo logic
        if (formPayload.access_key.includes("YOUR_WEB3FORMS")) {
           console.warn("Web3Forms access key is missing! Simulating success.")
           setSubmitStatus('success')
           setFormData({ firstName: '', lastName: '', email: '', reason: '', message: '' })
        } else {
           setSubmitStatus('error')
        }
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 4000)
    }
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

  const contactLinks = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'vishvajitjadhav01@gmail.com',
      link: 'mailto:vishvajitjadhav01@gmail.com',
      color: '#3b82f6', // Blue
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9767875421',
      link: 'tel:+919767875421',
      color: '#10b981', // Green
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Pune, Maharashtra',
      link: null,
      color: '#f59e0b', // Amber/Orange
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vishvajit09',
      link: 'https://linkedin.com/in/vishvajit09',
      color: '#0077b5', // LinkedIn Blue
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/Vishvajitjadhav',
      link: 'https://github.com/Vishvajitjadhav',
      color: '#ffffff', // GitHub White
    },
    {
      icon: FaXTwitter,
      label: 'X',
      value: 'x.com/Vishvajit1009',
      link: 'https://x.com/Vishvajit1009',
      color: '#ffffff', // X White (for dark background)
    },
  ]

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
          <div className="contact-links-section">
            <h3 className="contact-links-title">Connect With Me</h3>
            <div className="contact-links-row">
              {contactLinks.map((link, index) => {
                const IconComponent = link.icon
                const LinkComponent = link.link ? 'a' : 'div'
                const props = link.link
                  ? { href: link.link, target: '_blank', rel: 'noopener noreferrer' }
                  : {}

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <LinkComponent
                      className="contact-link-item"
                      {...props}
                      style={{ cursor: link.link ? 'pointer' : 'default' }}
                    >
                      <IconComponent 
                        className="contact-link-icon" 
                        style={{ color: link.color }}
                      />
                      <span className="contact-link-label">{link.label}</span>
                      <span className="contact-link-value">{link.value}</span>
                    </LinkComponent>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3 className="contact-form-title">Let's Talk</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="reason">Reason for Contact</label>
                <div className="reason-options">
                  {reasonOptions.map((reason) => (
                    <button
                      key={reason}
                      type="button"
                      className={`reason-btn ${formData.reason === reason ? 'active' : ''}`}
                      onClick={() => handleReasonSelect(reason)}
                    >
                      {reason}
                    </button>
                  ))}
                </div>
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
                  placeholder="Your message"
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <FaPaperPlane />
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

              {submitStatus === 'error' && (
                <motion.div
                  className="submit-error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>

        <motion.div className="contact-footer" variants={itemVariants}>
          <p className="footer-text">
            Designed & Built by <span className="footer-name">Vishvajit Ajit Jadhav</span>
          </p>
          <p className="footer-year">© 2026</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact

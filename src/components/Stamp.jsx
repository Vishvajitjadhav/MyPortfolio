import { motion, AnimatePresence } from 'framer-motion'
import { useCallback, useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import './Stamp.css'

const Stamp = ({ onStampClick }) => {
  const [rotation, setRotation] = useState(0)
  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = scrollPosition / maxScroll
      setRotation(scrollPercentage * 360)
      
      // Show arrow when scrolled down
      if (window.pageYOffset > 300) {
        setShowArrow(true)
      } else {
        setShowArrow(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = useCallback(() => {
    if (showArrow) {
      // Scroll to top when arrow is visible
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else if (onStampClick) {
      // Change image when arrow is not visible
      onStampClick()
    }
  }, [onStampClick, showArrow])

  return (
    <motion.div
      className="stamp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onClick={handleClick}
      style={{ rotate: rotation, transition: 'rotate 0.1s ease-out' }}
    >
      <div className="stamp-container">
        <AnimatePresence>
          {showArrow && (
            <motion.div
              className="stamp-arrow"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaArrowUp />
            </motion.div>
          )}
        </AnimatePresence>
        <svg className="stamp-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          <defs>
            {/* Text path positioned between two circles - radius 71 (between outer 80 and middle 62) */}
            <path
              id="textPathOuter"
              d="M 100, 100 m -71, 0 a 71,71 0 1,1 142,0 a 71,71 0 1,1 -142,0"
            />
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="distress">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5"/>
            </filter>
          </defs>
          
          {/* Outer thick ring */}
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="var(--primary-red)"
            strokeWidth="4"
            opacity="0.9"
            filter="url(#glow)"
          />
          
          {/* Text positioned between outer and middle ring - clearly visible */}
          <text 
            className="stamp-text-outer" 
            fill="var(--primary-red)"
            fontSize="11"
            fontWeight="700"
            fontFamily="'Courier New', monospace"
            letterSpacing="3"
            textTransform="uppercase"
            filter="url(#glow)"
          >
            <textPath href="#textPathOuter" startOffset="5%" textAnchor="start">
              Vishvajit Ajit Jadhav
            </textPath>
          </text>
          
          {/* Dotted ring - middle circle (below text) */}
          <circle
            cx="100"
            cy="100"
            r="62"
            fill="none"
            stroke="var(--primary-red)"
            strokeWidth="1.5"
            opacity="0.6"
            strokeDasharray="2,3"
            filter="url(#glow)"
          />
          
          {/* Inner solid ring */}
          <circle
            cx="100"
            cy="100"
            r="55"
            fill="none"
            stroke="var(--primary-red)"
            strokeWidth="2"
            opacity="0.7"
            filter="url(#glow)"
          />
          
          {/* Second inner ring */}
          <circle
            cx="100"
            cy="100"
            r="45"
            fill="none"
            stroke="var(--primary-red)"
            strokeWidth="1.5"
            opacity="0.5"
          />
          
          {/* Center solid disk */}
          <circle
            cx="100"
            cy="100"
            r="35"
            fill="var(--primary-red)"
            opacity="0.2"
            filter="url(#distress)"
          />
          
          {/* Innermost decorative ring */}
          <circle
            cx="100"
            cy="100"
            r="28"
            fill="none"
            stroke="var(--primary-red)"
            strokeWidth="1.5"
            opacity="0.5"
          />
        </svg>
      </div>
    </motion.div>
  )
}

export default Stamp

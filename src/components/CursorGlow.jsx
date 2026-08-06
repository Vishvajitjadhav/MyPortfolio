import { useEffect, useRef } from 'react'
import './CursorGlow.css'

// Soft aurora spotlight that follows the pointer on desktop only.
// Disabled on touch devices and when the user prefers reduced motion.
const CursorGlow = () => {
  const glowRef = useRef(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduced) return

    const el = glowRef.current
    if (!el) return

    let raf = 0
    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let curX = targetX
    let curY = targetY

    const onMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
      if (!raf) raf = requestAnimationFrame(render)
    }

    const render = () => {
      // ease toward the pointer for a smooth trailing feel
      curX += (targetX - curX) * 0.18
      curY += (targetY - curY) * 0.18
      el.style.setProperty('--mx', `${curX}px`)
      el.style.setProperty('--my', `${curY}px`)
      if (Math.abs(targetX - curX) > 0.5 || Math.abs(targetY - curY) > 0.5) {
        raf = requestAnimationFrame(render)
      } else {
        raf = 0
      }
    }

    el.classList.add('active')
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
}

export default CursorGlow

import { useEffect, useRef } from 'react'
import './ParticleBackground.css'

const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let stars = []
    let shootingStars = []
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Regular Stars
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.2
        // Subtly move upwards for a parallax feel
        this.speedY = -(Math.random() * 0.15 + 0.05) 
        this.opacity = Math.random()
        this.twinkleSpeed = Math.random() * 0.02 + 0.005
      }

      update() {
        this.y += this.speedY
        this.opacity += this.twinkleSpeed
        
        // Twinkle effect bounds
        if (this.opacity <= 0.2 || this.opacity >= 1) {
          this.twinkleSpeed = -this.twinkleSpeed
        }

        if (this.y < 0) {
          this.y = canvas.height
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Shooting Stars
    class ShootingStar {
      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width * 1.5
        this.y = 0
        this.len = Math.random() * 80 + 20
        this.speedX = -(Math.random() * 8 + 4)
        this.speedY = Math.random() * 8 + 4
        this.size = Math.random() * 1.5 + 0.5
        this.active = false
        // Random timeout to spawn
        this.waitTime = Math.random() * 3000 + 1000
        this.timer = 0
      }

      update(deltaTime) {
        if (!this.active) {
          this.timer += deltaTime
          if (this.timer >= this.waitTime) {
            this.active = true
            this.timer = 0
          }
          return
        }

        this.x += this.speedX
        this.y += this.speedY

        if (this.x < -this.len || this.y > canvas.height + this.len) {
          this.reset()
        }
      }

      draw() {
        if (!this.active) return
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(this.x - this.speedX * 2, this.y - this.speedY * 2)
        ctx.strokeStyle = `rgba(255, 255, 255, 0.4)`
        ctx.lineWidth = this.size
        ctx.stroke()
      }
    }

    const init = () => {
      stars = []
      shootingStars = []
      // Fewer stars on small screens to keep it light on mobile.
      const isSmall = window.innerWidth < 768
      const divisor = isSmall ? 8000 : 4200
      const numStars = Math.floor((canvas.width * canvas.height) / divisor)
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star())
      }
      const numShooting = reducedMotion ? 0 : isSmall ? 2 : 3
      for (let i = 0; i < numShooting; i++) {
        shootingStars.push(new ShootingStar())
      }
    }

    init()

    const paintBackground = () => {
      // Deep space gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#05060a')
      gradient.addColorStop(0.6, '#080a12')
      gradient.addColorStop(1, '#0b0d16')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    // Reduced motion: paint one static starfield and stop.
    if (reducedMotion) {
      paintBackground()
      stars.forEach((star) => star.draw())
      return () => window.removeEventListener('resize', resizeCanvas)
    }

    let lastTime = 0
    const animate = (time) => {
      const deltaTime = time - lastTime
      lastTime = time

      paintBackground()

      stars.forEach((star) => {
        star.update()
        star.draw()
      })

      shootingStars.forEach((sStar) => {
        sStar.update(deltaTime)
        sStar.draw()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Pause the loop when the tab is hidden to save battery/CPU.
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId)
      } else {
        lastTime = performance.now()
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      document.removeEventListener('visibilitychange', handleVisibility)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="particle-container">
      <canvas ref={canvasRef} className="particle-background" />
      <div className="space-arc"></div>
    </div>
  )
}

export default ParticleBackground


import { useEffect, useRef, useState } from 'react'
import './Home.css'

const ROLES = [
  'Fullstack Developer',
  'Penetration Tester',
  'Cybersecurity Analyst',
  'TypeScript · React · Express',
]

function useTyping(lines: string[], speed = 60, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [lineIndex, setLineIndex]  = useState(0)
  const [charIndex, setCharIndex]  = useState(0)
  const [deleting,  setDeleting]   = useState(false)

  useEffect(() => {
    const current = lines[lineIndex]

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex(i => i + 1), speed)
      return () => clearTimeout(t)
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex(i => i - 1), speed / 2)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setLineIndex(i => (i + 1) % lines.length)
    }
  }, [charIndex, deleting, lineIndex, lines, pause, speed])

  useEffect(() => {
    setDisplayed(lines[lineIndex].slice(0, charIndex))
  }, [charIndex, lineIndex, lines])

  return displayed
}

function MatrixCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const fontSize  = 13
    const cols      = Math.floor(canvas.width / fontSize)
    const drops     = Array(cols).fill(1)
    const chars     = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF'

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font      = `${fontSize}px 'Fira Code', monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x    = i * fontSize
        const y    = drops[i] * fontSize

        // primeiro char mais brilhante (branco)
        ctx.fillStyle = drops[i] * fontSize < 30 ? '#ffffff' : '#00aaff'
        ctx.globalAlpha = drops[i] * fontSize < 30 ? 0.9 : 0.25
        ctx.fillText(char, x, y)
        ctx.globalAlpha = 1

        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }

    const interval = setInterval(draw, 40)
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="hero__matrix" />
}

function Home() {
  const role = useTyping(ROLES)

  return (
    <section className="hero" id="home">
      <MatrixCanvas />

      <div className="hero__content">
        {/* Janela terminal */}
        <div className="hero__terminal">
          <div className="hero__terminal-bar">
            <span className="hero__dot hero__dot--red"   />
            <span className="hero__dot hero__dot--yellow"/>
            <span className="hero__dot hero__dot--green" />
            <span className="hero__terminal-title">~/portfolio — bash</span>
          </div>

          <div className="hero__terminal-body">
            <p className="hero__line">
              <span className="hero__prompt">$</span> whoami
            </p>

            <h1
              className="hero__name glitch"
              data-text="Marlon De Sá"
            >
              Marlon De Sá
            </h1>

            <p className="hero__line">
              <span className="hero__prompt">$</span> role
            </p>

            <p className="hero__role">
              {role}
              <span className="hero__blink">|</span>
            </p>

            <p className="hero__line">
              <span className="hero__prompt">$</span> status
            </p>

            <p className="hero__status">
              <span className="hero__status-dot" />
              Available for work
            </p>
          </div>
        </div>

        {/* Botões */}
        <div className="hero__cta">
          <a href="#projetos" className="btn-primary">
            <span>{'>'}</span> Ver Projetos
          </a>
          <a href="#contato" className="hero__btn-outline">
            Contato
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="hero__scroll">
        <span className="hero__scroll-label">scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}

export default Home

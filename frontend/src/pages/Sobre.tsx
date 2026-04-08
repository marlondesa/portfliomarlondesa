import { useEffect, useRef, useState } from 'react'
import './Sobre.css'

const PHOTO_URL = '/eu.jfif'

const SKILLS = [
  {
    category: 'Languages',
    items: [
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'Python',     level: 70 },
      { name: 'HTML / CSS', level: 92 },
    ],
  },
  {
    category: 'Frameworks & Tools',
    items: [
      { name: 'React',    level: 88 },
      { name: 'Express',  level: 80 },
      { name: 'Node.js',  level: 82 },
      { name: 'Git',      level: 85 },
    ],
  },
  {
    category: 'Cybersecurity',
    items: [
      { name: 'Penetration Testing', level: 75 },
      { name: 'Linux / Kali',        level: 80 },
      { name: 'OWASP / Web Sec',     level: 72 },
      { name: 'Network Analysis',    level: 68 },
    ],
  },
]

const BADGES = [
  'React', 'TypeScript', 'Node.js', 'Express',
  'Python', 'Linux', 'Kali Linux', 'Git',
  'Pentest', 'OWASP', 'REST API', 'PostgreSQL',
]

function SkillBar({ name, level, visible }: { name: string; level: number; visible: boolean }) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

function Sobre() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="sobre" id="sobre" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Sobre</h2>

        <div className="sobre__grid">
          {/* Coluna esquerda — foto + bio */}
          <div className={`sobre__left fade-in ${visible ? 'visible' : ''}`}>
            <div className="sobre__photo-wrap">
              <img src={PHOTO_URL} alt="Marlon De Sá" className="sobre__photo" />
              <div className="sobre__scan" />
            </div>

            <div className="sobre__bio">
              <p>
                Programo por <span className="neon-text">amor</span>. Sou dedicado e esforçado —
                cada dia de estudo é um diamante a ser descoberto.
              </p>
              <p>
                Não vejo programação como algo cansativo; sinto uma{' '}
                <span className="neon-text">imensa liberdade</span> quando começo a codar.
              </p>
              <p>
                Atuo como <span className="neon-text">Fullstack Developer</span> com foco em
                TypeScript, React e Express, e aprofundo meus conhecimentos em{' '}
                <span className="neon-text">Cybersecurity</span> e Penetration Testing.
              </p>
            </div>

            <div className="sobre__badges">
              {BADGES.map(badge => (
                <span key={badge} className="sobre__badge">{badge}</span>
              ))}
            </div>
          </div>

          {/* Coluna direita — skills */}
          <div className={`sobre__right fade-in ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            {SKILLS.map(group => (
              <div key={group.category} className="skill-group">
                <h3 className="skill-category">
                  <span className="skill-category-prefix">{'>'}</span>
                  {group.category}
                </h3>
                {group.items.map(skill => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    visible={visible}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre

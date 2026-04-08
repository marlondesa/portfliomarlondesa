import { useEffect, useRef, useState } from 'react'
import './Projetos.css'

interface Project {
  title:       string
  description: string
  stack:       string[]
  github:      string
  demo:        string
  highlight:   boolean
}

const PROJECTS: Project[] = [
  {
    title: 'CyberScan Tool',
    description:
      'Ferramenta de reconhecimento e análise de vulnerabilidades web. Realiza enumeração de subdomínios, varredura de portas e detecção de CVEs comuns.',
    stack: ['Python', 'Linux', 'OWASP', 'Pentest'],
    github: '#',
    demo:   '#',
    highlight: true,
  },
  {
    title: 'DevLink API',
    description:
      'API REST fullstack para gerenciamento de perfis de desenvolvedores. Autenticação JWT, CRUD completo e documentação Swagger.',
    stack: ['TypeScript', 'Express', 'Node.js', 'PostgreSQL'],
    github: '#',
    demo:   '#',
    highlight: false,
  },
  {
    title: 'Portfolio v2',
    description:
      'Este portfólio — construído com React, TypeScript e efeitos visuais customizados. Canvas matrix, glitch effect e cursor neon.',
    stack: ['React', 'TypeScript', 'CSS', 'Vite'],
    github: '#',
    demo:   '#',
    highlight: false,
  },
  {
    title: 'Auth Shield',
    description:
      'Sistema de autenticação seguro com rate limiting, proteção contra brute force, 2FA e logs de auditoria em tempo real.',
    stack: ['TypeScript', 'Express', 'Redis', 'JWT'],
    github: '#',
    demo:   '#',
    highlight: false,
  },
  {
    title: 'NetWatcher',
    description:
      'Dashboard para monitoramento de rede em tempo real. Detecta anomalias, exibe tráfego e alerta sobre comportamentos suspeitos.',
    stack: ['Python', 'React', 'WebSocket', 'Linux'],
    github: '#',
    demo:   '#',
    highlight: false,
  },
  {
    title: 'SecureVault',
    description:
      'Gerenciador de senhas com criptografia AES-256, gerador de senhas seguras e sincronização local.',
    stack: ['TypeScript', 'React', 'Crypto', 'Node.js'],
    github: '#',
    demo:   '#',
    highlight: false,
  },
]

function ProjectCard({ project, index, visible }: { project: Project; index: number; visible: boolean }) {
  return (
    <div
      className={`project-card ${project.highlight ? 'project-card--highlight' : ''} fade-in ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {project.highlight && (
        <span className="project-card__featured">destaque</span>
      )}

      <div className="project-card__top">
        <svg className="project-card__folder" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 7C3 5.9 3.9 5 5 5H10L12 7H19C20.1 7 21 7.9 21 9V17C21 18.1 20.1 19 19 19H5C3.9 19 3 18.1 3 17V7Z"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
          />
        </svg>

        <div className="project-card__links">
          <a href={project.github} target="_blank" rel="noreferrer" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          <a href={project.demo} target="_blank" rel="noreferrer" title="Demo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15,3 21,3 21,9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__stack">
        {project.stack.map(tech => (
          <span key={tech} className="project-card__tech">{tech}</span>
        ))}
      </div>
    </div>
  )
}

function Projetos() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="projetos" id="projetos" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <div className="projetos__grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projetos

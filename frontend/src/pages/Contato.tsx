import { useEffect, useRef, useState } from 'react'
import './Contato.css'

const CONTACT_INFO = [
  {
    label: 'WhatsApp',
    value: '+55 (16) 99339-8466',
    href:  'https://wa.me/5516993398466',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'munizdesa1994i@gmail.com',
    href:  'mailto:munizdesa1994i@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <polyline points="2,4 12,13 22,4"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/marlondesa',
    href:  'https://github.com/marlondesa',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/marlon-de-sá',
    href:  'https://www.linkedin.com/in/marlon-de-s%C3%A1-1168173bb/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

function Contato() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [form, setForm]       = useState({ nome: '', email: '', mensagem: '' })
  const [sent, setSent]       = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { nome, email, mensagem } = form
    const text = `Olá Marlon!%0ANome: ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`
    window.open(`https://wa.me/5516993398466?text=${text}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="contato" id="contato" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Contato</h2>

        <p className={`contato__headline fade-in ${visible ? 'visible' : ''}`}>
          Vamos construir algo <span className="neon-text">juntos?</span>
        </p>

        <div className="contato__grid">
          {/* Info */}
          <div className={`contato__info fade-in ${visible ? 'visible' : ''}`}>
            {CONTACT_INFO.map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href !== '#' ? '_blank' : undefined}
                rel="noreferrer"
                className="contato__item"
              >
                <span className="contato__item-icon">{item.icon}</span>
                <div className="contato__item-text">
                  <span className="contato__item-label">{item.label}</span>
                  <span className="contato__item-value">{item.value}</span>
                </div>
                <svg className="contato__item-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            ))}
          </div>

          {/* Formulário */}
          <form
            className={`contato__form fade-in ${visible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.2s' }}
            onSubmit={handleSubmit}
          >
            <div className="contato__field">
              <label className="contato__label" htmlFor="nome">Nome</label>
              <input
                id="nome"
                name="nome"
                type="text"
                className="contato__input"
                placeholder="Seu nome"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contato__field">
              <label className="contato__label" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="contato__input"
                placeholder="seu@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contato__field">
              <label className="contato__label" htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                className="contato__input contato__textarea"
                placeholder="Descreva seu projeto ou proposta..."
                value={form.mensagem}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>

            <button type="submit" className={`btn-primary contato__btn ${sent ? 'contato__btn--sent' : ''}`}>
              {sent ? (
                <><span>✓</span> Redirecionando para WhatsApp</>
              ) : (
                <><span>{'>'}</span> Enviar Mensagem</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contato

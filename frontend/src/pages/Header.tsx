import { useEffect, useRef, useState } from 'react'
import './Header.css'

const NAV_LINKS = [
  { label: 'Home',     href: '#home'     },
  { label: 'Sobre',    href: '#sobre'    },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato',  href: '#contato'  },
]

const PHOTO_URL = '/eu.jfif'

function Header() {
  const [scrolled,  setScrolled]  = useState(false)
  const [progress,  setProgress]  = useState(0)
  const [activeLink, setActiveLink] = useState('#home')
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const scrollY   = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      setScrolled(scrollY > 50)
      setProgress(maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0)

      // detecta seção ativa
      NAV_LINKS.forEach(({ href }) => {
        const el = document.querySelector(href)
        if (el) {
          const { top, bottom } = el.getBoundingClientRect()
          if (top <= 100 && bottom > 100) setActiveLink(href)
        }
      })
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      {/* Barra de progresso */}
      <div className="header__progress" ref={progressRef}>
        <div className="header__progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <nav className="header__nav container">
        {/* Logo */}
        <a href="#home" className="header__logo">
          <div className="header__avatar">
            <img src={PHOTO_URL} alt="Marlon De Sá" />
          </div>
          <span className="header__logo-text">
            <span className="header__logo-prefix">&gt;&nbsp;</span>
            Marlon De Sá
            <span className="header__cursor">_</span>
          </span>
        </a>

        {/* Links */}
        <ul className="header__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`header__link ${activeLink === href ? 'header__link--active' : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header

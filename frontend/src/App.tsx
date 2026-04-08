import { useEffect, useRef } from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'
import Footer from './pages/Footer'

function App() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 5}px`
        cursorRef.current.style.top  = `${e.clientY - 5}px`
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX - 18}px`
        ringRef.current.style.top  = `${e.clientY - 18}px`
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
      <Header />
      <Home />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </>
  )
}

export default App

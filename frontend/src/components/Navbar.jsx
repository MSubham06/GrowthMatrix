import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const LINKS = ['Services', 'Process', 'About', 'Testimonials']

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Growth<span>Matrix</span>
        </div>

        <ul className="nav-links">
          {LINKS.map(link => (
            <li key={link}>
              <button onClick={() => scrollTo(link)}>{link}</button>
            </li>
          ))}
        </ul>

        <button className="nav-cta" onClick={() => scrollTo('contact')}>
          Book a Call
        </button>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {LINKS.map(link => (
          <button key={link} onClick={() => scrollTo(link)}>{link}</button>
        ))}
        <button className="mobile-cta" onClick={() => scrollTo('contact')}>
          Book a Call
        </button>
      </div>
    </>
  )
}

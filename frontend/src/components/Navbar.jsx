import { useState, useEffect } from 'react'
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

        {/* Desktop links */}
        <ul className="nav-links">
          {LINKS.map(link => (
            <li key={link}>
              <button onClick={() => scrollTo(link)}>{link}</button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className="btn-primary nav-cta" onClick={() => scrollTo('contact')}>
          Book a Call
        </button>

        {/* Mobile hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {LINKS.map(link => (
          <button key={link} onClick={() => scrollTo(link)}>{link}</button>
        ))}
        <button className="btn-primary mobile-cta" onClick={() => scrollTo('contact')}>
          Book a Call
        </button>
      </div>
    </>
  )
}
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from './Icons'
import './Navbar.css'

const LINKS = ['Services', 'Process', 'About', 'Testimonials']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* If on home page — smooth scroll to section
     If on a legal page — navigate home then scroll after mount */
  const handleNavClick = (id) => {
    setMenuOpen(false)
    const sectionId = id.toLowerCase()

    if (location.pathname === '/') {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      // Small delay so the home page mounts before we try to scroll
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }

  const handleLogoClick = () => {
    setMenuOpen(false)
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-logo" onClick={handleLogoClick}>
          Growth<span>Matrix</span>
        </div>

        <ul className="nav-links">
          {LINKS.map(link => (
            <li key={link}>
              <button onClick={() => handleNavClick(link)}>{link}</button>
            </li>
          ))}
        </ul>

        <button className="nav-cta" onClick={() => handleNavClick('contact')}>
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
          <button key={link} onClick={() => handleNavClick(link)}>{link}</button>
        ))}
        <button className="mobile-cta" onClick={() => handleNavClick('contact')}>
          Book a Call
        </button>
      </div>
    </>
  )
}
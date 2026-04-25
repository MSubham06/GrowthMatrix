import { Mail, ArrowUp, LinkedIn, XSocial } from './Icons'
import { useNavigate, useLocation } from 'react-router-dom'
import './Footer.css'

const SERVICES = ['Revenue Strategy', 'Operational Audit', 'Leadership Coaching', 'Market Expansion']
const COMPANY  = ['About Us', 'Case Studies', 'Blog', 'Careers']
const LEGAL    = [
  { label: 'Privacy Policy',   path: '/privacy' },
  { label: 'Terms of Service', path: '/terms'   },
  { label: 'Cookie Policy',    path: '/cookies' },
]

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollTo = (id) => {
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }

  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand-col">
          <div className="footer-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            Growth<span>Matrix</span>
          </div>
          <p className="footer-desc">
            Elite business consulting for founders and executives serious
            about scale. No theory, only results.
          </p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/msubham/" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn"><LinkedIn /></a>
            <a href="https://x.com"                         target="_blank" rel="noreferrer" className="social-btn" aria-label="X"><XSocial /></a>
            <a href="mailto:msubham246@gmail.com"                                            className="social-btn" aria-label="Email"><Mail size={16} /></a>
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Services</p>
          <ul className="footer-links">
            {SERVICES.map(l => (
              <li key={l}>
                <button onClick={() => scrollTo('services')}>{l}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Company</p>
          <ul className="footer-links">
            {COMPANY.map(l => (
              <li key={l}>
                <button onClick={() => scrollTo('about')}>{l}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-col-title">Legal</p>
          <ul className="footer-links">
            {LEGAL.map(({ label, path }) => (
              <li key={label}>
                <button onClick={() => navigate(path)}>{label}</button>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2025 GrowthMatrix Consulting. All rights reserved.</span>
        <button
          className="footer-back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  )
}
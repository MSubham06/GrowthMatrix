import { Mail, ArrowUp, LinkedIn, XSocial } from './Icons'
import './Footer.css'

const COLS = [
  { title: 'Services', links: ['Revenue Strategy','Operational Audit','Leadership Coaching','Market Expansion'] },
  { title: 'Company',  links: ['About Us','Case Studies','Blog','Careers'] },
  { title: 'Legal',    links: ['Privacy Policy','Terms of Service','Cookie Policy'] },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand-col">
          <div className="footer-logo">Growth<span>Matrix</span></div>
          <p className="footer-desc">Elite business consulting for founders and executives serious about scale. No theory — only results.</p>
          <div className="footer-socials">
            <a href="#" className="social-btn" aria-label="LinkedIn"><LinkedIn /></a>
            <a href="#" className="social-btn" aria-label="X"><XSocial /></a>
            <a href="#" className="social-btn" aria-label="Email"><Mail size={16} /></a>
          </div>
        </div>
        {COLS.map(col => (
          <div key={col.title} className="footer-col">
            <p className="footer-col-title">{col.title}</p>
            <ul className="footer-links">
              {col.links.map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2025 GrowthMatrix Consulting. All rights reserved.</span>
        <button className="footer-back-top" onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}>
          Back to top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  )
}

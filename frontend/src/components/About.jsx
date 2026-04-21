import useInView from '../hooks/useInView'
import './About.css'

const PERKS = [
  'Former operators — we\'ve built and scaled companies ourselves',
  'Flat fee engagements — no hourly billing, no surprise invoices',
  '90-day guarantee — results in 90 days or we work for free',
  'Embedded model — we work alongside your team, not above them',
]

export default function About() {
  const lRef = useInView()
  const rRef = useInView()
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <div ref={lRef} className="about-img-col reveal">
          <div className="about-img-box">
            <img src="/Brand Assets/Founder.jpeg" alt="Founder" onError={e => e.target.style.display='none'} />
            <div className="about-fallback">👔</div>
          </div>
          <div className="about-badge">
            <span className="badge-val">12+</span>
            <span className="badge-lbl">Years Experience</span>
          </div>
          <div className="about-decor" />
        </div>
        <div ref={rRef} className="about-copy reveal" style={{ transitionDelay: '0.15s' }}>
          <span className="section-tag">About the Firm</span>
          <h2 className="section-title" style={{ marginBottom: '1.2rem', marginTop: '0.4rem' }}>
            We Don't Consult<br />From the Sidelines
          </h2>
          <p className="about-body">
            GrowthMatrix was founded on a single conviction: consultants should be measured
            by outcomes, not deliverables. We've worked in the trenches of 180+ companies
            across sectors — our only metric is your result.
          </p>
          <ul className="perks-list">
            {PERKS.map(p => (
              <li key={p} className="perk-item">
                <span className="perk-check">✓</span>
                <p>{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
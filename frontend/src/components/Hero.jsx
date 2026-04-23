import { ArrowRight, Play, Users, Building2, Clock } from './Icons'
import './Hero.css'

const STATS = [
  { icon: Users,     value: '93%',    label: 'Client Retention' },
  { icon: Building2, value: '180+',   label: 'Companies Scaled' },
  { icon: Clock,     value: '12 Yrs', label: 'In Practice'      },
]

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="hero">
      <div className="hero-copy">
        <span className="section-tag">Elite Business Consulting</span>
        <h1 className="hero-h1">Turn Ambition Into<br /><em>Measurable Growth</em></h1>
        <p className="hero-sub">
          We partner with founders and executives to build revenue engines,
          eliminate operational drag, and install leadership systems that compound over time.
        </p>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Book a Free Strategy Call <ArrowRight size={16} />
          </button>
          <button className="btn-outline" onClick={() => scrollTo('services')}>
            <Play size={15} /> See Our Work
          </button>
        </div>
      </div>

      <div className="hero-card">
        <div className="hero-card-header">
          <span className="card-label">Total Impact</span>
          <span className="card-dot" />
        </div>
        <p className="card-big-num">$240M+</p>
        <p className="card-big-label">Revenue generated for clients</p>
        <div className="card-divider" />
        <div className="card-stats-grid">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div className="card-stat" key={label}>
              <Icon size={15} className="card-stat-icon" />
              <span className="card-stat-val">{value}</span>
              <span className="card-stat-label">{label}</span>
            </div>
          ))}
        </div>
        <div className="card-glow" aria-hidden="true" />
      </div>
    </section>
  )
}

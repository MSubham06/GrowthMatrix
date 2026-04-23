import { BarChart3, GitBranch, Brain, ArrowRight } from './Icons'
import useInView from '../hooks/useInView'
import './Services.css'

const SERVICES = [
  { icon: BarChart3, title: 'Revenue Growth Strategy',      tag: 'Most Popular', text: 'We audit your revenue streams and identify untapped growth levers. From pricing optimization to new market entry, we build a roadmap that adds zeros.' },
  { icon: GitBranch, title: 'Operational Efficiency',       tag: null,           text: 'Bloated processes kill margins. We map your operations end-to-end, eliminate waste, and build lean systems that scale without proportional cost increases.' },
  { icon: Brain,     title: 'Executive Leadership Coaching', tag: null,           text: 'High-performance teams start with sharp leaders. Our 1:1 coaching equips executives with the mindset and frameworks that define market leaders.' },
]

function ServiceCard({ icon: Icon, title, text, tag, delay }) {
  const ref = useInView()
  return (
    <div ref={ref} className="srv-card reveal" style={{ transitionDelay: `${delay}s` }}>
      {tag && <span className="srv-tag">{tag}</span>}
      <div className="srv-icon"><Icon size={22} /></div>
      <h3 className="srv-title">{title}</h3>
      <p className="srv-text">{text}</p>
      <button className="srv-link" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
        Get Started <ArrowRight size={14} />
      </button>
    </div>
  )
}

export default function Services() {
  const hRef = useInView()
  return (
    <section className="services-section" id="services">
      <div ref={hRef} className="section-header center reveal">
        <span className="section-tag">What We Do</span>
        <h2 className="section-title">Consulting Services Built<br />for Real Results</h2>
        <p className="section-sub">Not theory. Not slide decks. We implement alongside your team until the numbers move.</p>
      </div>
      <div className="srv-grid">
        {SERVICES.map((s, i) => <ServiceCard key={s.title} {...s} delay={i * 0.12} />)}
      </div>
    </section>
  )
}

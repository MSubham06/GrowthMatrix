import useInView from '../hooks/useInView'
import './Testimonials.css'

const TESTIMONIALS = [
  { quote: "GrowthMatrix helped us identify $2.4M in recurring revenue we were leaving on the table. The process was surgical and the results were undeniable.", metric: '↑ 340% Revenue in 14 months', name: 'Marcus T.', role: 'CEO, Velora Logistics', initials: 'MT', color: '#84CC16' },
  { quote: "I was skeptical of consultants — all talk, no action. These guys embedded into our operations and the efficiency gains paid for the engagement in 6 weeks.", metric: '↓ 38% Operational Costs', name: 'Priya S.', role: 'COO, NexPath Technologies', initials: 'PS', color: '#3B82F6' },
  { quote: "The leadership coaching alone was worth 10x the investment. My entire management team is sharper, faster, and more aligned than ever before.", metric: '↑ 91% Team Retention Score', name: 'David R.', role: 'Founder, Arclight Media Group', initials: 'DR', color: '#F59E0B' },
]

function TestiCard({ quote, metric, name, role, initials, color, delay }) {
  const ref = useInView()
  return (
    <div ref={ref} className="testi-card reveal" style={{ transitionDelay: `${delay}s` }}>
      <div className="testi-stars">★★★★★</div>
      <p className="testi-quote">"{quote}"</p>
      <span className="testi-metric">{metric}</span>
      <div className="testi-author">
        <div className="testi-avatar" style={{ background: color + '22', color }}>{initials}</div>
        <div>
          <p className="author-name">{name}</p>
          <p className="author-role">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const hRef = useInView()
  return (
    <section className="testi-section" id="testimonials">
      <div ref={hRef} className="section-header center reveal">
        <span className="section-tag">Client Results</span>
        <h2 className="section-title">The Proof Is In the Numbers</h2>
      </div>
      <div className="testi-grid">
        {TESTIMONIALS.map((t, i) => <TestiCard key={t.name} {...t} delay={i * 0.12} />)}
      </div>
    </section>
  )
}
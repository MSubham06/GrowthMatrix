import useInView from '../hooks/useInView'
import './PainPoints.css'

const PAINS = [
  { num: '01', title: 'Revenue Plateaus', text: "You've hit a ceiling and can't pinpoint why. The strategies that got you here won't get you to the next level — and you know it." },
  { num: '02', title: 'Operational Chaos', text: 'Your team is busy but results are inconsistent. Poor systems and undefined processes are quietly draining your margins every quarter.' },
  { num: '03', title: 'Leadership Gaps', text: "Decisions slow down when you're not in the room. Your business is too dependent on you, and you have no succession clarity." },
]

function PainCard({ num, title, text, delay }) {
  const ref = useInView()
  return (
    <div ref={ref} className="pain-card reveal" style={{ transitionDelay: `${delay}s` }}>
      <span className="pain-num">{num}</span>
      <h3 className="pain-title">{title}</h3>
      <p className="pain-text">{text}</p>
    </div>
  )
}

export default function PainPoints() {
  const hRef = useInView()
  return (
    <section className="pain-section">
      <div ref={hRef} className="section-header reveal">
        <span className="section-tag">Sound Familiar?</span>
        <h2 className="section-title">The Problems Holding<br />Your Business Back</h2>
      </div>
      <div className="pain-grid">
        {PAINS.map((p, i) => <PainCard key={p.num} {...p} delay={i * 0.1} />)}
      </div>
    </section>
  )
}
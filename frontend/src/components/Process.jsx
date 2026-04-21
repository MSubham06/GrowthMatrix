import useInView from '../hooks/useInView'
import './Process.css'

const STEPS = [
  { num: '01', title: 'Discovery Call',      text: 'We audit your business in 60 minutes. No fluff — just a deep dive into your challenges, numbers, and goals.' },
  { num: '02', title: 'Strategic Blueprint', text: 'Within 5 days you receive a custom 90-day growth plan with clear milestones, KPIs, and accountability systems.' },
  { num: '03', title: 'Execution & Results', text: 'We work alongside your team, hands-on, until results are realized. Monthly reviews keep everything on track.' },
]

export default function Process() {
  const hRef = useInView()
  return (
    <section className="process-section" id="process">
      <div ref={hRef} className="section-header center reveal">
        <span className="section-tag">How It Works</span>
        <h2 className="section-title light">Our 3-Step Engagement<br />Framework</h2>
        <p className="section-sub light">From your first call to measurable ROI — here's exactly what to expect.</p>
      </div>
      <div className="process-steps">
        {STEPS.map((s, i) => {
          const ref = useInView()
          return (
            <div key={s.num} ref={ref} className="process-step reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="step-badge">{s.num}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-text">{s.text}</p>
              {i < STEPS.length - 1 && <div className="step-arrow">→</div>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
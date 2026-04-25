import { Phone, FileText, Rocket } from './Icons'
import useInView from '../hooks/useInView'
import './Process.css'

const STEPS = [
  { num: '01', icon: Phone,    title: 'Discovery Call',      text: 'We audit your business in 60 minutes. No fluff, just a deep dive into your challenges, numbers, and goals.' },
  { num: '02', icon: FileText, title: 'Strategic Blueprint', text: 'Within 5 days you receive a custom 90-day growth plan with clear milestones, KPIs, and accountability systems.' },
  { num: '03', icon: Rocket,   title: 'Execution & Results', text: 'We work alongside your team, hands on, until results are realized. Monthly reviews keep everything on track.' },
]

function Step({ num, icon: Icon, title, text, delay, isLast }) {
  const ref = useInView()
  return (
    <div ref={ref} className="process-step reveal" style={{ transitionDelay: `${delay}s` }}>
      <div className="step-header">
        <div className="step-badge"><Icon size={18} /></div>
        <span className="step-num">{num}</span>
      </div>
      <h3 className="step-title">{title}</h3>
      <p className="step-text">{text}</p>
      {!isLast && <div className="step-connector" aria-hidden="true" />}
    </div>
  )
}

export default function Process() {
  const hRef = useInView()
  return (
    <section className="process-section" id="process">
      <div ref={hRef} className="section-header center reveal">
        <span className="section-tag">How It Works</span>
        <h2 className="section-title">Our 3-Step Engagement<br />Framework</h2>
        <p className="section-sub">From your first call to measurable ROI, here's exactly what to expect.</p>
      </div>
      <div className="process-steps">
        {STEPS.map((s, i) => (
          <Step key={s.num} {...s} delay={i * 0.15} isLast={i === STEPS.length - 1} />
        ))}
      </div>
    </section>
  )
}

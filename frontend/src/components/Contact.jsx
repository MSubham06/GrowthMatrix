import { useState, useEffect } from 'react'
import { Mail, Phone, Clock, Send } from './Icons'
import useInView from '../hooks/useInView'
import './Contact.css'

const SERVICES = [
  'Revenue Growth Strategy',
  'Operational Efficiency',
  'Executive Leadership Coaching',
  'Full Business Audit',
]

const DETAILS = [
  { icon: Mail,  label: 'Email Us',     val: 'contactus@growthmatrix.co'   },
  { icon: Phone, label: 'Call Us',       val: '+91 99332 21100'       },
  { icon: Clock, label: 'Response Time', val: 'Within 4 business hours' },
]

/* ── Gamified success popup ── */
function SuccessPopup({ onClose }) {
  const [count, setCount] = useState(0)
  const [step,  setStep]  = useState(0)

  const steps = [
    { icon: '🔍', label: 'Analyzing your request...' },
    { icon: '📋', label: 'Assigning a strategist...' },
    { icon: '📅', label: 'Booking your slot...'      },
    { icon: '✅', label: 'Confirmed!'                },
  ]

  useEffect(() => {
    /* Count up 0 → 100 */
    const interval = setInterval(() => {
      setCount(c => {
        if (c >= 100) { clearInterval(interval); return 100 }
        return c + 2
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    /* Advance steps every 600ms */
    if (step >= steps.length - 1) return
    const t = setTimeout(() => setStep(s => s + 1), 700 * (step + 1))
    return () => clearTimeout(t)
  }, [step])

  return (
    <div className="success-overlay" onClick={onClose}>
      <div className="success-popup" onClick={e => e.stopPropagation()}>

        {/* Progress ring */}
        <div className="success-ring-wrap">
          <svg className="success-ring" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="50" className="ring-track" />
            <circle
              cx="60" cy="60" r="50"
              className="ring-fill"
              strokeDasharray={`${2 * Math.PI * 50}`}
              strokeDashoffset={`${2 * Math.PI * 50 * (1 - count / 100)}`}
            />
          </svg>
          <div className="ring-inner">
            <span className="ring-icon">{steps[step].icon}</span>
            <span className="ring-pct">{count}%</span>
          </div>
        </div>

        {/* Steps */}
        <ul className="success-steps">
          {steps.map((s, i) => (
            <li key={i} className={`success-step ${i <= step ? 'done' : ''} ${i === step ? 'active' : ''}`}>
              <span className="step-tick">{i < step ? '✓' : i === step ? '→' : '○'}</span>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>

        {step === steps.length - 1 && (
          <div className="success-final">
            <h2>You're Booked! 🎉</h2>
            <p>We'll reach out within <strong>4 hours</strong> to confirm your free strategy call.</p>
            <p className="success-email">Check your inbox at the email you provided.</p>
            <button className="btn-primary success-close" onClick={onClose}>
              Got it — let's go!
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default function Contact() {
  const lRef = useInView()
  const rRef = useInView()
  const [form, setForm]           = useState({ name:'', email:'', company:'', service:'', message:'' })
  const [submitted, setSubmitted] = useState(false)

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrap">

        <div ref={lRef} className="contact-info reveal">
          <span className="section-tag">Get Started</span>
          <h2 className="section-title" style={{ marginBottom:'1rem', marginTop:'0.4rem' }}>
            Book Your Free<br />Strategy Call
          </h2>
          <p className="section-sub" style={{ maxWidth:'100%' }}>
            In 60 minutes, we'll audit your biggest bottleneck and hand you
            a concrete action plan — zero cost, zero obligation.
          </p>
          <div className="contact-details">
            {DETAILS.map(({ icon: Icon, label, val }) => (
              <div key={label} className="contact-detail">
                <div className="detail-icon"><Icon size={18} /></div>
                <div><p className="detail-label">{label}</p><p className="detail-val">{val}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div ref={rRef} className="contact-form-wrap reveal" style={{ transitionDelay:'0.15s' }}>
          <form className="contact-form" onSubmit={e => { e.preventDefault(); setSubmitted(true) }}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Alex Johnson" required value={form.name} onChange={e => update('name', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Work Email</label>
                <input type="email" placeholder="alex@company.com" required value={form.email} onChange={e => update('email', e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input type="text" placeholder="Acme Corp" value={form.company} onChange={e => update('company', e.target.value)} />
            </div>
            <div className="form-group">
              <label>I'm Interested In</label>
              <select value={form.service} onChange={e => update('service', e.target.value)}>
                <option value="">Select a service...</option>
                {SERVICES.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Your Biggest Challenge</label>
              <textarea placeholder="Briefly describe your bottleneck or growth goal..." rows={4} value={form.message} onChange={e => update('message', e.target.value)} />
            </div>
            <button type="submit" className="btn-primary form-submit">
              Book My Free Strategy Call <Send size={15} />
            </button>
            <p className="form-note">No spam. No pushy sales calls. Just an honest conversation.</p>
          </form>
        </div>

      </div>

      {/* Gamified popup overlay */}
      {submitted && <SuccessPopup onClose={() => setSubmitted(false)} />}
    </section>
  )
}

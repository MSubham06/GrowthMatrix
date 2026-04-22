import { useState } from 'react'
import { Mail, Phone, Clock, Send } from 'lucide-react'
import useInView from '../hooks/useInView'
import './Contact.css'

const SERVICES = [
  'Revenue Growth Strategy',
  'Operational Efficiency',
  'Executive Leadership Coaching',
  'Full Business Audit',
]

const DETAILS = [
  { icon: Mail,  label: 'Email Us',       val: 'hello@growthmatrix.co'   },
  { icon: Phone, label: 'Call Us',         val: '+1 (800) 555-0192'       },
  { icon: Clock, label: 'Response Time',   val: 'Within 4 business hours' },
]

export default function Contact() {
  const lRef = useInView()
  const rRef = useInView()
  const [form, setForm]           = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrap">

        <div ref={lRef} className="contact-info reveal">
          <span className="section-tag">Get Started</span>
          <h2 className="section-title" style={{ marginBottom: '1rem', marginTop: '0.4rem' }}>
            Book Your Free<br />Strategy Call
          </h2>
          <p className="section-sub" style={{ maxWidth: '100%' }}>
            In 60 minutes, we'll audit your biggest bottleneck and hand you
            a concrete action plan — zero cost, zero obligation.
          </p>

          <div className="contact-details">
            {DETAILS.map(({ icon: Icon, label, val }) => (
              <div key={label} className="contact-detail">
                <div className="detail-icon"><Icon size={18} /></div>
                <div>
                  <p className="detail-label">{label}</p>
                  <p className="detail-val">{val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div ref={rRef} className="contact-form-wrap reveal" style={{ transitionDelay: '0.15s' }}>
          {submitted ? (
            <div className="success-box">
              <div className="success-icon">✅</div>
              <h3>You're Booked In!</h3>
              <p>We'll reach out within 4 hours to confirm your strategy call. Check your inbox.</p>
            </div>
          ) : (
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
                Book My Free Strategy Call <Send size={16} />
              </button>
              <p className="form-note">No spam. No pushy sales calls. Just an honest conversation.</p>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}

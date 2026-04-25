import { useNavigate } from 'react-router-dom'

function BackArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12"/>
      <polyline points="12 19 5 12 12 5"/>
    </svg>
  )
}

const SECTIONS = [
  {
    title: 'Acceptance of Terms',
    content: (
      <p>By accessing or using the GrowthMatrix website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.</p>
    ),
  },
  {
    title: 'Services Description',
    content: (
      <>
        <p>GrowthMatrix provides business consulting services including, but not limited to:</p>
        <ul>
          <li>Revenue growth strategy and advisory</li>
          <li>Operational efficiency consulting</li>
          <li>Executive leadership coaching</li>
          <li>Business audits and strategic planning</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>The specific scope, deliverables, and terms of any engagement will be defined in a separate written agreement between GrowthMatrix and the client.</p>
      </>
    ),
  },
  {
    title: 'Intellectual Property',
    content: (
      <p>All content on this website — including text, graphics, logos, and code — is the property of GrowthMatrix and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
    ),
  },
  {
    title: 'Confidentiality',
    content: (
      <p>Any information shared during a strategy call or consulting engagement will be treated as strictly confidential by GrowthMatrix. We will not disclose client information to third parties without explicit written consent, except where required by law.</p>
    ),
  },
  {
    title: 'No Guarantee of Results',
    content: (
      <p>While GrowthMatrix is committed to delivering measurable outcomes, we cannot guarantee specific financial results. Business performance depends on many factors outside our control. Our 90-day satisfaction guarantee applies as specified in individual client agreements.</p>
    ),
  },
  {
    title: 'Limitation of Liability',
    content: (
      <p>To the fullest extent permitted by law, GrowthMatrix shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services. Our total liability shall not exceed the fees paid by the client in the relevant engagement.</p>
    ),
  },
  {
    title: 'Governing Law',
    content: (
      <p>These Terms of Service are governed by applicable law. Any disputes arising from these terms or our services shall be resolved through good-faith negotiation before pursuing formal legal proceedings.</p>
    ),
  },
  {
    title: 'Modifications',
    content: (
      <p>GrowthMatrix reserves the right to update these Terms of Service at any time. Continued use of our website or services after any changes constitutes your acceptance of the new terms.</p>
    ),
  },
]

export default function Terms() {
  const navigate = useNavigate()

  return (
    <div className="legal-page">
      <button className="legal-back" onClick={() => navigate('/')}>
        <BackArrow /> Back to Home
      </button>

      <div className="legal-header">
        <span className="section-tag">Legal</span>
        <h1 className="legal-title">Terms of Service</h1>
        <p className="legal-date">Last updated: April 2025</p>
      </div>

      <div className="legal-body">
        {SECTIONS.map(({ title, content }) => (
          <div className="legal-section" key={title}>
            <h2>{title}</h2>
            {content}
          </div>
        ))}

        <div className="legal-contact-box">
          <p>
            Questions about these Terms? Reach us at{' '}
            <a href="mailto:msubham246@gmail.com">msubham246@gmail.com</a> —
            we're happy to clarify anything before you engage with us.
          </p>
        </div>
      </div>
    </div>
  )
}

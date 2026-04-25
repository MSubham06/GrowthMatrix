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
    title: 'Information We Collect',
    content: (
      <>
        <p>We collect information you voluntarily provide when you fill out our contact form, book a strategy call, or otherwise interact with our website. This may include:</p>
        <ul>
          <li>Full name and email address</li>
          <li>Company name and job title</li>
          <li>Details about your business challenge or goals</li>
          <li>Any other information you choose to share with us</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>We also collect standard technical data such as your IP address, browser type, and pages visited through cookies and similar technologies.</p>
      </>
    ),
  },
  {
    title: 'How We Use Your Information',
    content: (
      <>
        <p>GrowthMatrix uses the information we collect solely to:</p>
        <ul>
          <li>Respond to your enquiries and schedule strategy calls</li>
          <li>Provide and improve our consulting services</li>
          <li>Send you relevant updates with your explicit consent</li>
          <li>Analyse website usage to enhance your experience</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Data Sharing & Third Parties',
    content: (
      <p>We do not sell, rent, or trade your personal information to any third parties. We may share data with trusted service providers (such as email or scheduling tools) strictly to operate our business, and only under confidentiality agreements.</p>
    ),
  },
  {
    title: 'Data Retention',
    content: (
      <p>We retain your personal data only for as long as necessary to fulfil the purpose for which it was collected, or as required by law. You may request deletion of your data at any time by contacting us.</p>
    ),
  },
  {
    title: 'Your Rights',
    content: (
      <>
        <p>Depending on your location, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent at any time</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Security',
    content: (
      <p>We implement industry-standard security measures to protect your data from unauthorised access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.</p>
    ),
  },
  {
    title: 'Changes to This Policy',
    content: (
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this page periodically.</p>
    ),
  },
]

export default function Privacy() {
  const navigate = useNavigate()

  return (
    <div className="legal-page">
      <button className="legal-back" onClick={() => navigate('/')}>
        <BackArrow /> Back to Home
      </button>

      <div className="legal-header">
        <span className="section-tag">Legal</span>
        <h1 className="legal-title">Privacy Policy</h1>
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
            Questions about this Privacy Policy? Contact us at{' '}
            <a href="mailto:msubham246@gmail.com">msubham246@gmail.com</a> and
            we'll respond within 2 business days.
          </p>
        </div>
      </div>
    </div>
  )
}

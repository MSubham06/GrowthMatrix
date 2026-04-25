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
    title: 'What Are Cookies?',
    content: (
      <p>Cookies are small text files stored on your device when you visit a website. They allow the website to remember your preferences and understand how you interact with the site. Cookies do not harm your device and do not contain personally identifiable information on their own.</p>
    ),
  },
  {
    title: 'How We Use Cookies',
    content: (
      <>
        <p>GrowthMatrix uses cookies for the following purposes:</p>
        <ul>
          <li><strong style={{ color: 'var(--text-primary)' }}>Essential cookies</strong> — required for the website to function correctly</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Analytics cookies</strong> — help us understand how visitors interact with the site so we can improve it</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Preference cookies</strong> — remember your settings and choices across sessions</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Types of Cookies We Use',
    content: (
      <>
        <ul>
          <li><strong style={{ color: 'var(--text-primary)' }}>Session cookies</strong> — temporary cookies that expire when you close your browser</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Persistent cookies</strong> — remain on your device for a set period or until manually deleted</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>First-party cookies</strong> — set directly by GrowthMatrix</li>
          <li><strong style={{ color: 'var(--text-primary)' }}>Third-party cookies</strong> — set by services we use such as analytics providers</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Third-Party Services',
    content: (
      <p>We may use third-party analytics tools (such as Google Analytics) that set their own cookies to help us analyse website traffic. These services have their own privacy policies and we encourage you to review them. We do not control the cookies set by these third parties.</p>
    ),
  },
  {
    title: 'Managing Your Cookie Preferences',
    content: (
      <>
        <p>You have full control over cookies. You can:</p>
        <ul>
          <li>Accept or decline cookies via your browser settings</li>
          <li>Delete cookies already stored on your device</li>
          <li>Set your browser to notify you when cookies are being set</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>Please note that disabling certain cookies may affect the functionality of our website. Instructions for managing cookies can be found in your browser's help documentation.</p>
      </>
    ),
  },
  {
    title: 'Cookie Retention',
    content: (
      <p>Session cookies are deleted automatically when you close your browser. Persistent cookies remain on your device for the period specified in the cookie, typically between 30 days and 2 years, unless deleted earlier by you.</p>
    ),
  },
  {
    title: 'Updates to This Policy',
    content: (
      <p>We may update this Cookie Policy as our practices evolve or as required by law. Any updates will be reflected on this page with a revised effective date. We recommend checking this page periodically.</p>
    ),
  },
]

export default function Cookies() {
  const navigate = useNavigate()

  return (
    <div className="legal-page">
      <button className="legal-back" onClick={() => navigate('/')}>
        <BackArrow /> Back to Home
      </button>

      <div className="legal-header">
        <span className="section-tag">Legal</span>
        <h1 className="legal-title">Cookie Policy</h1>
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
            Questions about our use of cookies? Email us at{' '}
            <a href="mailto:msubham246@gmail.com">msubham246@gmail.com</a> and
            we'll get back to you promptly.
          </p>
        </div>
      </div>
    </div>
  )
}

import './TrustedBy.css'

const LOGOS = ['Velora Corp', 'NexPath', 'Arclight', 'Pinnacle Group', 'Stratum Co', 'OrbitScale']

export default function TrustedBy() {
  return (
    <section className="trusted-by">
      <p className="trusted-label">Trusted by growth-stage companies worldwide</p>
      <div className="logos-row">
        {LOGOS.map(name => (
          <span className="logo-item" key={name}>{name}</span>
        ))}
      </div>
    </section>
  )
}
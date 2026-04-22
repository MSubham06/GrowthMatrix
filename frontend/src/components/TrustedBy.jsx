import './TrustedBy.css'

/* Replace these with your actual ClientLogos from Brand Assets folder
   Path format: /Brand Assets/ClientLogos/logo-name.png
   Since we cant use actual SVGs here, using styled text logos */
const LOGOS = [
  { name: 'Velora Corp',    short: 'VC' },
  { name: 'NexPath',        short: 'NP' },
  { name: 'Arclight',       short: 'AL' },
  { name: 'Pinnacle Group', short: 'PG' },
  { name: 'Stratum Co',     short: 'SC' },
  { name: 'OrbitScale',     short: 'OS' },
]

export default function TrustedBy() {
  return (
    <section className="trusted-by">
      <p className="trusted-label">Trusted by growth-stage companies worldwide</p>
      <div className="logos-row">
        {LOGOS.map(({ name, short }) => (
          <div className="logo-item" key={name} title={name}>
            <span className="logo-short">{short}</span>
            <span className="logo-name">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

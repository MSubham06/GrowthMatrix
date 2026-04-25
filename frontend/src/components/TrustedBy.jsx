import './TrustedBy.css'

import bloombergLogo  from '../assets/ClientLogos/Bloomberg.svg'
import cnbcLogo       from '../assets/ClientLogos/CNBC.svg'
import forbesLogo     from '../assets/ClientLogos/Forbes.svg'
import techcrunchLogo from '../assets/ClientLogos/TechCrunch.svg'
import wsjLogo        from '../assets/ClientLogos/WSJ.svg'

const LOGOS = [
  { name: 'Bloomberg',   src: bloombergLogo  },
  { name: 'CNBC',        src: cnbcLogo       },
  { name: 'Forbes',      src: forbesLogo     },
  { name: 'TechCrunch',  src: techcrunchLogo },
  { name: 'WSJ',         src: wsjLogo        },
]

export default function TrustedBy() {
  return (
    <section className="trusted-by">
      <p className="trusted-label">As seen in & trusted by</p>
      <div className="logos-row">
        {LOGOS.map(({ name, src }) => (
          <div className="logo-item" key={name}>
            <img src={src} alt={name} className="logo-img" />
          </div>
        ))}
      </div>
    </section>
  )
}
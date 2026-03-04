import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane } from '@fortawesome/free-solid-svg-icons'

const NAV_LINKS = [
  { href: '#hero',      label: 'Flight' },
  { href: '#briefing',  label: 'Briefing' },
  { href: '#itinerary', label: 'Itinerary' },
  { href: '#costs',     label: 'Costs' },
  { href: '#checklist', label: 'Packing' },
  { href: '#games',     label: 'Games' },
]

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo" aria-label="Becky's Airways – back to top">
          <FontAwesomeIcon icon={faPlane} className="navbar__logo-icon" aria-hidden="true" />
          <span className="navbar__logo-text">
            Becky's <em>Airways</em>
          </span>
        </a>

        <div className="navbar__links" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} role="listitem">
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

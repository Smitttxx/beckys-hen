import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const NAV_LINKS = [
  { href: '#hero',      label: 'Flight' },
  { href: '#briefing',  label: 'Briefing' },
  { href: '#itinerary', label: 'Itinerary' },
  { href: '#costs',     label: 'Costs' },
  { href: '#checklist', label: 'Packing' },
  { href: '#games',     label: 'Games' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo" aria-label="Becky's Airways – back to top" onClick={close}>
          <FontAwesomeIcon icon={faPlane} className="navbar__logo-icon" aria-hidden="true" />
          <span className="navbar__logo-text">
            Becky's <em>Airways</em>
          </span>
        </a>

        {/* Desktop links */}
        <div className="navbar__links navbar__links--desktop" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} role="listitem">{label}</a>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="navbar__burger"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="navbar__drawer" role="menu">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} role="menuitem" onClick={close}>{label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}

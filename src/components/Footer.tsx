import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faHeart } from '@fortawesome/free-solid-svg-icons'

const CREW = ['Becky ✈️', 'Natalie', 'Laura', 'Ellie', 'Becca', 'Emily', 'Nicky', 'Jackie', 'Carol']

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">

        <div className="footer__logo">
          <FontAwesomeIcon icon={faPlane} style={{ marginRight: '0.4rem', color: 'var(--gold)' }} aria-hidden="true" />
          Becky's <em>Airways</em>
        </div>

        <p className="footer__tagline">Last Rodeo Flight · Benidorm, Spain</p>

        <p className="footer__dates">
          EZY3357 · 26 MAR 2026 → 30 MAR 2026 · EZY3358
        </p>

        <p className="footer__crew">
          <FontAwesomeIcon icon={faHeart} style={{ color: 'var(--red)', marginRight: '0.35rem' }} aria-hidden="true" />
          Crew manifest: {CREW.join(' · ')}
        </p>

        <p style={{ marginTop: '1rem', fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)' }}>
          Organised with love by Natalie (MOH &amp; Pilot) ✈️
        </p>

      </div>
    </footer>
  )
}

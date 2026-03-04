import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faUser } from '@fortawesome/free-solid-svg-icons'

type ChipType = 'bride' | 'pilot' | 'crew'

interface Passenger {
  name: string
  role: string
  type: ChipType
}

const PASSENGERS: Passenger[] = [
  { name: 'Becky',   role: 'The Plane ✈️',   type: 'bride' },
  { name: 'Natalie', role: 'Pilot',           type: 'pilot' },
  { name: 'Laura',   role: 'Air Hostess',     type: 'crew'  },
  { name: 'Ellie',   role: 'Air Hostess',     type: 'crew'  },
  { name: 'Becca',   role: 'Air Hostess',     type: 'crew'  },
  { name: 'Emily',   role: 'Air Hostess',     type: 'crew'  },
  { name: 'Nicky',   role: 'Air Hostess',     type: 'crew'  },
  { name: 'Jackie',  role: 'Air Hostess',     type: 'crew'  },
  { name: 'Carol',   role: 'Air Hostess',     type: 'crew'  },
]

// Simulate a barcode with varying bar widths
const BARS = [2,1,3,1,2,1,2,3,1,4,1,2,1,2,3,1,2,1,3,1,4,2,1,2,1,3,1,2,4,1,2,3,1]

export default function BoardingPassHero() {
  return (
    <section id="hero" aria-label="Boarding pass hero">
      <div className="bp" role="region" aria-label="Becky's Airways boarding pass">

        {/* Header */}
        <div className="bp__head">
          <div>
            <div className="bp__airline">Becky <em>Airways</em></div>
            <div className="bp__head-sub">Boarding Pass · Hen Party 2026</div>
          </div>
          <div className="bp__flight-badge">EZY3357</div>
        </div>

        <div className="bp__stripe" aria-hidden="true" />

        {/* Body */}
        <div className="bp__body">

          {/* Route */}
          <div className="bp__route">
            <div className="bp__city">
              <div className="bp__iata" aria-label="Liverpool">LPL</div>
              <div className="bp__city-name">Liverpool</div>
            </div>

            <div className="bp__arrow" aria-hidden="true">
              <FontAwesomeIcon icon={faPlane} />
              <div className="bp__dur">2h 45m</div>
            </div>

            <div className="bp__city">
              <div className="bp__iata" aria-label="Alicante">ALC</div>
              <div className="bp__city-name">Alicante</div>
            </div>
          </div>

          {/* Flight detail grid */}
          <div className="bp__grid">
            <div className="bp__cell">
              <div className="bp__label">Departs</div>
              <div className="bp__val bp__val--lg">16:25</div>
              <div className="bp__label" style={{ marginTop: '0.15rem' }}>Thu 26 Mar 2026</div>
            </div>
            <div className="bp__cell">
              <div className="bp__label">Arrives</div>
              <div className="bp__val bp__val--lg">20:10</div>
              <div className="bp__label" style={{ marginTop: '0.15rem' }}>Thu 26 Mar 2026</div>
            </div>
            <div className="bp__cell">
              <div className="bp__label">Return</div>
              <div className="bp__val">21:40</div>
              <div className="bp__label" style={{ marginTop: '0.15rem' }}>Mon 30 Mar 2026</div>
            </div>
            <div className="bp__cell">
              <div className="bp__label">Return Flight</div>
              <div className="bp__val" style={{ fontSize: '0.9rem' }}>EZY3358</div>
            </div>
            <div className="bp__cell">
              <div className="bp__label">Hotel</div>
              <div className="bp__val" style={{ fontSize: '0.88rem' }}>Marina Benidorm</div>
            </div>
            <div className="bp__cell">
              <div className="bp__label">Transfer</div>
              <div className="bp__val" style={{ fontSize: '0.88rem' }}>~40 mins</div>
            </div>
          </div>

          {/* Passengers */}
          <div className="bp__pax-label">Passenger Manifest — 9 Crew</div>
          <div className="bp__pax" role="list" aria-label="Passenger list">
            {PASSENGERS.map(({ name, role, type }) => (
              <div
                key={name}
                className={`bp__chip bp__chip--${type}`}
                title={role}
                role="listitem"
              >
                <FontAwesomeIcon icon={faUser} style={{ fontSize: '0.6rem' }} aria-hidden="true" />
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Perforated tear line */}
        <div className="bp__tear" aria-hidden="true">
          <div className="bp__tear-circle" />
          <div className="bp__tear-line" />
          <div className="bp__tear-circle" />
        </div>
      </div>
    </section>
  )
}

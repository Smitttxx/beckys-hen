import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'

type StatusKey = 'boarding' | 'departed' | 'ontime' | 'getready' | 'optional'

interface BoardRow {
  event: string
  time: string
  status: StatusKey
  statusLabel: string
  sub?: boolean
  cost?: string   // shown as a £ badge when present
}

interface DayGroup {
  date: string
  rows: BoardRow[]
}

const STATUS_LABELS: Record<StatusKey, string> = {
  boarding: 'BOARDING',
  departed: 'DEPARTED',
  ontime:   'ON TIME',
  getready: 'GET READY',
  optional: 'OPTIONAL',
}

const DAYS: DayGroup[] = [
  {
    date: 'THU 26 MAR',
    rows: [
      { event: 'LPL \u2192 ALC \u00b7 EZY3357',         time: '16:25',  status: 'boarding', statusLabel: STATUS_LABELS.boarding },
      { event: 'ARRIVE ALICANTE',                         time: '20:10',  status: 'ontime',   statusLabel: STATUS_LABELS.ontime,   sub: true },
      { event: 'BOARD PARTY BUS \u00b7 ALC AIRPORT',     time: '~20:30', status: 'boarding', statusLabel: STATUS_LABELS.boarding, cost: '\u00a370 PP', sub: true },
      { event: 'CHECK-IN \u00b7 MARINA BENIDORM',        time: '~21:00', status: 'ontime',   statusLabel: STATUS_LABELS.ontime,   sub: true },
      { event: 'STRIP BAR CRAWL + SCAVENGER HUNT',       time: 'LATE',   status: 'boarding', statusLabel: STATUS_LABELS.boarding, sub: true },
    ],
  },
  {
    date: 'FRI 27 MAR',
    rows: [
      { event: 'POOL DAY + HEN GAMES AT HOTEL',          time: 'ALL DAY', status: 'getready', statusLabel: STATUS_LABELS.getready },
      { event: 'MARINA DISTRICT FEST (AT OUR HOTEL)',    time: '10:00',   status: 'optional', statusLabel: STATUS_LABELS.optional, sub: true },
      { event: 'COCKTAILS + EVENING GAMES',              time: 'EVE',     status: 'boarding', statusLabel: STATUS_LABELS.boarding, sub: true },
    ],
  },
  {
    date: 'SAT 28 MAR',
    rows: [
      { event: 'QUAD / BUGGY ADVENTURE',                 time: '10:00+', status: 'boarding', statusLabel: STATUS_LABELS.boarding, cost: '\u00a3VARIES' },
      { event: '"MY LAST RODEO" THEME CHANGE',           time: 'EVE',    status: 'getready', statusLabel: STATUS_LABELS.getready, sub: true },
      { event: 'DWARF HANDCUFF CHALLENGE',               time: '~21:00', status: 'boarding', statusLabel: STATUS_LABELS.boarding, sub: true },
      { event: 'CLUB CRAWL \u00b7 LET\u2019S GET TIPSY', time: '22:00',  status: 'boarding', statusLabel: STATUS_LABELS.boarding, cost: '\u00a326 PP', sub: true },
    ],
  },
  {
    date: 'SUN 29 MAR',
    rows: [
      { event: 'BEACH AFTERNOON + WATERSPORTS',          time: '14:00', status: 'boarding', statusLabel: STATUS_LABELS.boarding },
      { event: 'BEACH PARTY \u00b7 OASIS BEACH',        time: '14:00', status: 'boarding', statusLabel: STATUS_LABELS.boarding, cost: '\u00a345 PP', sub: true },
      { event: 'ITALIAN BEACHFRONT DINNER',              time: 'EVE',   status: 'boarding', statusLabel: STATUS_LABELS.boarding, cost: '\u00a340 PP', sub: true },
    ],
  },
  {
    date: 'MON 30 MAR',
    rows: [
      { event: 'HENS SPA DAY WITH BUFFET',              time: 'MORN',  status: 'boarding', statusLabel: STATUS_LABELS.boarding, cost: '\u00a340 PP' },
      { event: 'ALC \u2192 LPL \u00b7 EZY3358',        time: '21:40', status: 'departed', statusLabel: 'GATE OPEN' },
      { event: 'ARRIVE LIVERPOOL',                       time: '23:30', status: 'departed', statusLabel: STATUS_LABELS.departed, sub: true },
    ],
  },
]

export default function DepartureBoard() {
  return (
    <section id="schedule" className="section section--board" aria-labelledby="schedule-title">
      <div className="container">
        <h2 className="section-title" id="schedule-title">
          <FontAwesomeIcon icon={faPlaneDeparture} style={{ marginRight: '0.5rem', color: 'var(--red)' }} aria-hidden="true" />
          Departure Board
        </h2>
        <p className="section-sub">Becky's Airways · Benidorm 2026 · All times local · £ = costs money</p>
      </div>

      <div className="db" role="table" aria-label="Trip departure board">

          <div className="db__head">
            <span className="db__title">✈ Becky's Airways Departures</span>
            <span className="db__badge">26 – 30 MAR 2026</span>
          </div>

          <div className="db__cols" role="row" aria-hidden="true">
            <span>Flight / Event</span>
            <span>Time</span>
            <span>Status</span>
          </div>

          {DAYS.map((day) => (
            <div key={day.date} role="rowgroup" aria-label={day.date}>
              <div className="db__date-row" role="row">
                <span className="db__date-header" role="cell">{day.date}</span>
              </div>

              {day.rows.map((row, i) => (
                <div
                  key={i}
                  className={`db__row${row.sub ? ' db__row--sub' : ''}`}
                  role="row"
                >
                  <span className="db__event" role="cell">
                    <span className="db__event-marquee" aria-hidden="false">
                      {/* First copy */}
                      <span className="db__event-content">
                        {row.event}
                        {row.cost && (
                          <span className="db__cost-badge" aria-label={`Cost: ${row.cost}`}>
                            {row.cost}
                          </span>
                        )}
                      </span>
                      {/* Duplicate for seamless loop — hidden from screen readers */}
                      <span className="db__event-content" aria-hidden="true">
                        {row.event}
                        {row.cost && (
                          <span className="db__cost-badge">{row.cost}</span>
                        )}
                      </span>
                    </span>
                  </span>
                  <span className="db__time" role="cell">{row.time}</span>
                  <span className={`db__status db__status--${row.status}`} role="cell">
                    {row.statusLabel}
                  </span>
                </div>
              ))}
            </div>
          ))}
      </div>
    </section>
  )
}

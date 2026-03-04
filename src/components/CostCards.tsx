import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChampagneGlasses,
  faUtensils,
  faTag,
  faCircleInfo,
  faMoneyBillWave,
  faMartiniGlass,
} from '@fortawesome/free-solid-svg-icons'

/* ── helper: attendance breakdown table ─────────────────────── */
interface AttendRow { hens: number; total: number; eachPays: string }

function AttendanceTable({ rows, note }: { rows: AttendRow[]; note?: string }) {
  return (
    <div style={{ marginTop: '0.75rem' }}>
      <div style={{ fontSize: '0.68rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
        Cost per paying hen (inc. Becky's ticket)
      </div>
      <div className="quad-wrap">
        <table className="quad-table">
          <thead>
            <tr>
              <th>Hens attending</th>
              <th>Total tickets</th>
              <th>You each pay</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.hens}>
                <td>{r.hens === 8 ? `${r.hens} (all)` : r.hens}</td>
                <td>{r.hens + 1} (inc. Becky)</td>
                <td><strong>{r.eachPays}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <div className="cost-note" style={{ marginTop: '0.5rem' }}>
          <FontAwesomeIcon icon={faCircleInfo} className="cost-note__icon" aria-hidden="true" />
          {note}
        </div>
      )}
    </div>
  )
}

export default function CostCards() {
  return (
    <section id="costs" className="section section--alt" aria-labelledby="costs-title">
      <div className="container">
        <h2 className="section-title" id="costs-title">
          <FontAwesomeIcon icon={faMoneyBillWave} style={{ marginRight: '0.5rem', color: 'var(--red)' }} aria-hidden="true" />
          Activities &amp; Costs
        </h2>
        <p className="section-sub">
          All prices GBP. Becky's ticket is always covered as a gift from the group — the fewer hens attend an activity, the slightly more each person pays to cover her share.
        </p>

        {/* ── OPTIONAL ACTIVITIES ── */}
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <FontAwesomeIcon icon={faTag} aria-hidden="true" />
          Optional Activities — cost varies by attendance
        </h3>

        <div className="cost-grid" style={{ marginBottom: '1.75rem' }}>

          {/* Beach Party */}
          <div className="cost-card cost-card--group">
            <div className="cost-card__head">
              <div className="cost-card__type">
                <FontAwesomeIcon icon={faChampagneGlasses} style={{ marginRight: '0.3rem' }} aria-hidden="true" />
                Optional · Sunday 29 Mar
              </div>
              <div className="cost-card__title">Beach Party – Oasis Beach</div>
            </div>
            <div className="cost-card__body">
              <div className="cost-main">
                <div className="cost-amount">£45</div>
                <div className="cost-per">venue price per ticket</div>
              </div>
              <hr className="cost-divider" />
              <div className="cost-detail">
                <strong>Frontline Fiesta @ Oasis Beach</strong> · 14:00–18:00<br />
                Free bar (beer, sangria, soft drinks) + lunch included.
              </div>
              <AttendanceTable
                rows={[
                  { hens: 8, total: 9, eachPays: '£50.63' },
                  { hens: 7, total: 8, eachPays: '£51.43' },
                  { hens: 6, total: 7, eachPays: '£52.50' },
                ]}
                note="Formula: (attending × £45) ÷ paying hens. Becky's ticket always covered."
              />
            </div>
          </div>

          {/* Italian Dinner */}
          <div className="cost-card cost-card--group">
            <div className="cost-card__head">
              <div className="cost-card__type">
                <FontAwesomeIcon icon={faUtensils} style={{ marginRight: '0.3rem' }} aria-hidden="true" />
                Optional · Sunday 29 Mar Eve
              </div>
              <div className="cost-card__title">Italian Beachfront Dinner</div>
            </div>
            <div className="cost-card__body">
              <div className="cost-main">
                <div className="cost-amount">£40</div>
                <div className="cost-per">venue price per ticket</div>
              </div>
              <hr className="cost-divider" />
              <div className="cost-detail">
                3 courses + shot + wine/lambrusco <em>(or 4 pints per 2)</em>.<br />
                Beachfront setting — dressing nicely encouraged.
              </div>
              <AttendanceTable
                rows={[
                  { hens: 8, total: 9, eachPays: '£45.00' },
                  { hens: 7, total: 8, eachPays: '£45.71' },
                  { hens: 6, total: 7, eachPays: '£46.67' },
                ]}
                note="Formula: (attending × £40) ÷ paying hens. Becky's ticket always covered."
              />
            </div>
          </div>

          {/* Club Crawl */}
          <div className="cost-card cost-card--group">
            <div className="cost-card__head">
              <div className="cost-card__type">
                <FontAwesomeIcon icon={faMartiniGlass} style={{ marginRight: '0.3rem' }} aria-hidden="true" />
                Optional · Saturday 28 Mar
              </div>
              <div className="cost-card__title">Benidorm Club Crawl – Let's Get Tipsy</div>
            </div>
            <div className="cost-card__body">
              <div className="cost-main">
                <div className="cost-amount">£26</div>
                <div className="cost-per">venue price per ticket</div>
              </div>
              <hr className="cost-divider" />
              <div className="cost-detail">
                ⭐ 4.8/5 · 5 hours · 4 venues · VIP entry, free shots, rodeo bull, karaoke.<br />
                Free cancellation up to 24 hrs before.
              </div>
              <AttendanceTable
                rows={[
                  { hens: 8, total: 9, eachPays: '£29.25' },
                  { hens: 7, total: 8, eachPays: '£29.71' },
                  { hens: 6, total: 7, eachPays: '£30.33' },
                ]}
                note="No sandals or flip-flops. Formula: (attending × £26) ÷ paying hens."
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

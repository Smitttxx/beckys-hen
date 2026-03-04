import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBus,
  faChampagneGlasses,
  faUtensils,
  faTag,
  faCircleInfo,
  faTriangleExclamation,
  faMedal,
  faMoneyBillWave,
  faSpa,
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

        {/* ── MANDATORY ── */}
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--text-muted)', marginBottom: '0.75rem', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <FontAwesomeIcon icon={faBus} aria-hidden="true" />
          Mandatory — everyone's included
        </h3>

        <div className="cost-grid" style={{ marginBottom: '1.75rem' }}>

          {/* Party Bus */}
          <div className="cost-card cost-card--group">
            <div className="cost-card__head">
              <div className="cost-card__type">
                <FontAwesomeIcon icon={faBus} style={{ marginRight: '0.3rem' }} aria-hidden="true" />
                Fixed — all 9 travel
              </div>
              <div className="cost-card__title">Party Bus – Airport to Hotel</div>
            </div>
            <div className="cost-card__body">
              <div className="cost-main">
                <div className="cost-amount">£70</div>
                <div className="cost-per">per paying hen (÷ 8)</div>
              </div>
              <hr className="cost-divider" />
              <div className="cost-detail">
                Total charter: <strong>£560</strong> — all 9 of us on the bus, 8 hens pay.<br />
                Alicante Airport direct to Marina Benidorm · ~40 mins.<br /><br />
                <strong>This is the airport transfer — everyone is on it.</strong> Fixed cost, no headcount variation.
                Becky's share is our gift to her. 🎁
              </div>
            </div>
          </div>

        </div>

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

          {/* Spa Day */}
          <div className="cost-card cost-card--group">
            <div className="cost-card__head">
              <div className="cost-card__type">
                <FontAwesomeIcon icon={faSpa} style={{ marginRight: '0.3rem' }} aria-hidden="true" />
                Optional · Monday 30 Mar
              </div>
              <div className="cost-card__title">Hens Spa Day With Buffet</div>
            </div>
            <div className="cost-card__body">
              <div className="cost-main">
                <div className="cost-amount">£40</div>
                <div className="cost-per">venue price per ticket</div>
              </div>
              <hr className="cost-divider" />
              <div className="cost-detail">
                90 min spa + buffet lunch + unlimited drinks · ~3 hrs total.<br />
                Max 20 guests · <strong>minimum 6 total attending</strong> (inc. Becky).
              </div>
              <AttendanceTable
                rows={[
                  { hens: 8, total: 9, eachPays: '£45.00' },
                  { hens: 7, total: 8, eachPays: '£45.71' },
                  { hens: 6, total: 7, eachPays: '£46.67' },
                  { hens: 5, total: 6, eachPays: '£48.00' },
                ]}
                note="Min. 6 total (5 hens + Becky). Formula: (attending × £40) ÷ paying hens."
              />
            </div>
          </div>

        </div>

        {/* ── INDIVIDUAL ONLY ── */}
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <FontAwesomeIcon icon={faMedal} aria-hidden="true" />
          Group Gift — whole group splits the cost
        </h3>

        <div className="cost-grid" style={{ marginBottom: '1.75rem' }}>

          {/* Parasail */}
          <div className="cost-card cost-card--ind">
            <div className="cost-card__head">
              <div className="cost-card__type">
                <FontAwesomeIcon icon={faMedal} style={{ marginRight: '0.3rem' }} aria-hidden="true" />
                Group gift — split by 8
              </div>
              <div className="cost-card__title">Tandem Parasail 🪂</div>
            </div>
            <div className="cost-card__body">
              <div className="cost-main">
                <div className="cost-amount">£16.88</div>
                <div className="cost-per">per hen (÷ 8)</div>
              </div>
              <hr className="cost-divider" />
              <div className="cost-detail">
                The Pilot and the Plane take to the skies — together!<br />
                <strong>Natalie + Becky only</strong> go up · the whole group covers the cost.<br /><br />
                Total: <strong>£135</strong> ÷ 8 = £16.88 each. Becky's share is our gift to her. 🎁
              </div>
            </div>
          </div>

        </div>

        {/* ── ESTIMATED ── */}
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <FontAwesomeIcon icon={faTriangleExclamation} aria-hidden="true" />
          Estimated Cost — depends on pairings chosen
        </h3>

        <div className="cost-grid">

          {/* Quad / Buggy */}
          <div className="cost-card cost-card--est" style={{ gridColumn: '1 / -1' }}>
            <div className="cost-card__head">
              <div className="cost-card__type">
                <FontAwesomeIcon icon={faTriangleExclamation} style={{ marginRight: '0.3rem' }} aria-hidden="true" />
                Estimated · Saturday 28 Mar
              </div>
              <div className="cost-card__title">Quad / Buggy Adventure</div>
            </div>
            <div className="cost-card__body">

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>

                <div>
                  <div className="cost-main">
                    <div className="cost-amount cost-amount--gold">£65–150</div>
                    <div className="cost-per">estimated per person</div>
                  </div>
                  <div className="cost-note" style={{ marginTop: 0 }}>
                    <FontAwesomeIcon icon={faCircleInfo} className="cost-note__icon" aria-hidden="true" />
                    Price per person depends on vehicle type, duration, and how you pair up. Each vehicle is hired at a flat rate — you split it between riders.
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Buggy (2 riders per vehicle)</div>
                  <div className="quad-wrap">
                    <table className="quad-table">
                      <thead>
                        <tr>
                          <th>Duration</th>
                          <th>Total</th>
                          <th>pp (÷2)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>1 hour</td><td>£125</td><td>£62.50</td></tr>
                        <tr><td>2 hours</td><td>£160</td><td>£80</td></tr>
                        <tr><td>3 hours</td><td>£185</td><td>£92.50</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>

              <hr className="cost-divider" />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Quad (rider only)</div>
                  <div className="quad-wrap">
                    <table className="quad-table">
                      <thead>
                        <tr>
                          <th>Duration</th>
                          <th>Rider</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>1 hour</td><td>£90</td></tr>
                        <tr><td>2 hours</td><td>£130</td></tr>
                        <tr><td>3 hours</td><td>£150</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Quad passenger add-on</div>
                  <div className="quad-wrap">
                    <table className="quad-table">
                      <thead>
                        <tr>
                          <th>Duration</th>
                          <th>Add-on</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td>1 hour</td><td>+£30</td></tr>
                        <tr><td>2 hours</td><td>+£40</td></tr>
                        <tr><td>3 hours</td><td>+£50</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="cost-note" style={{ marginTop: '0.75rem' }}>
                <FontAwesomeIcon icon={faTriangleExclamation} className="cost-note__icon" aria-hidden="true" />
                Natalie will confirm pairings and duration once everyone has had a chance to chat. Location: Camí Sendero Tossal Roig, 30.
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

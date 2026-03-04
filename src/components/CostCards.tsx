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

export default function CostCards() {
  return (
    <section id="costs" className="section section--alt" aria-labelledby="costs-title">
      <div className="container">
        <h2 className="section-title" id="costs-title">
          <FontAwesomeIcon icon={faMoneyBillWave} style={{ marginRight: '0.5rem', color: 'var(--red)' }} aria-hidden="true" />
          Activities &amp; Costs
        </h2>
        <p className="section-sub">
          All prices in GBP. Becky doesn't contribute to activity costs — group splits are divided by 8.
        </p>

        {/* ── GROUP SPLIT ── */}
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--text-muted)', marginBottom: '0.75rem', marginTop: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <FontAwesomeIcon icon={faTag} aria-hidden="true" />
          Group Split — cost shared equally across 8 (Becky's covered!)
        </h3>

        <div className="cost-grid" style={{ marginBottom: '1.75rem' }}>

          {/* Party Bus */}
          <div className="cost-card cost-card--group">
            <div className="cost-card__head">
              <div className="cost-card__type">
                <FontAwesomeIcon icon={faBus} style={{ marginRight: '0.3rem' }} aria-hidden="true" />
                Group Split
              </div>
              <div className="cost-card__title">Party Bus – Airport to Hotel</div>
            </div>
            <div className="cost-card__body">
              <div className="cost-main">
                <div className="cost-amount">£70</div>
                <div className="cost-per">per person (÷ 8)</div>
              </div>
              <hr className="cost-divider" />
              <div className="cost-detail">
                Total charter: <strong>£560</strong><br />
                Shared party bus from Alicante Airport direct to Marina Benidorm.<br />
                Transfer time: ~40 mins.<br /><br />
                Becky rides free — her share covered by the group.
              </div>
            </div>
          </div>

          {/* Beach Party */}
          <div className="cost-card cost-card--group">
            <div className="cost-card__head">
              <div className="cost-card__type">
                <FontAwesomeIcon icon={faChampagneGlasses} style={{ marginRight: '0.3rem' }} aria-hidden="true" />
                Individual Cost (Per Person)
              </div>
              <div className="cost-card__title">Beach Party – Oasis Beach (Sunday)</div>
            </div>
            <div className="cost-card__body">
              <div className="cost-main">
                <div className="cost-amount">£45</div>
                <div className="cost-per">per person</div>
              </div>
              <hr className="cost-divider" />
              <div className="cost-detail">
                <strong>Frontline Fiesta @ Oasis Beach</strong><br />
                Sunday 29 March, 14:00–18:00.<br />
                Includes: free bar (beer, sangria, soft drinks) + lunch.<br /><br />
                All 8 attending: <strong>£360 total</strong> (Becky included — group covers her!)
              </div>
              <div className="cost-note">
                <FontAwesomeIcon icon={faCircleInfo} className="cost-note__icon" aria-hidden="true" />
                Everyone is expected to attend — it's the big Sunday session!
              </div>
            </div>
          </div>

          {/* Italian Dinner */}
          <div className="cost-card cost-card--group">
            <div className="cost-card__head">
              <div className="cost-card__type">
                <FontAwesomeIcon icon={faUtensils} style={{ marginRight: '0.3rem' }} aria-hidden="true" />
                Individual Cost (Per Person)
              </div>
              <div className="cost-card__title">Italian Beachfront Dinner (Sunday Eve)</div>
            </div>
            <div className="cost-card__body">
              <div className="cost-main">
                <div className="cost-amount">£40</div>
                <div className="cost-per">per person</div>
              </div>
              <hr className="cost-divider" />
              <div className="cost-detail">
                Sunday evening sit-down meal.<br />
                Includes: 3 courses + a shot + 1 bottle of wine or lambrusco
                <em> (or 4 pints per 2 people)</em>.<br />
                Beachfront setting.<br /><br />
                All 8 attending: <strong>£320 total</strong> (Becky included — group covers her!)
              </div>
            </div>
          </div>

          {/* Club Crawl */}
          <div className="cost-card cost-card--group">
            <div className="cost-card__head">
              <div className="cost-card__type">
                <FontAwesomeIcon icon={faMartiniGlass} style={{ marginRight: '0.3rem' }} aria-hidden="true" />
                Individual Cost (Per Person)
              </div>
              <div className="cost-card__title">Benidorm Club Crawl – Saturday Night</div>
            </div>
            <div className="cost-card__body">
              <div className="cost-main">
                <div className="cost-amount">£26</div>
                <div className="cost-per">per person</div>
              </div>
              <hr className="cost-divider" />
              <div className="cost-detail">
                <strong>Let's Get Tipsy</strong> · ⭐ 4.8/5 · Top rated<br />
                5 hours · 4 venues (2 bars + 2 nightclubs) · VIP entry — skip every queue.<br />
                Includes: free shots, beer pong, flip cup, karaoke, rodeo bull, DJs.<br /><br />
                All 8 attending: <strong>£208 total</strong> (Becky included — group covers her!)
              </div>
              <div className="cost-note">
                <FontAwesomeIcon icon={faCircleInfo} className="cost-note__icon" aria-hidden="true" />
                Free cancellation up to 24 hrs before. No sandals or flip-flops on the night.
              </div>
            </div>
          </div>

          {/* Spa Day */}
          <div className="cost-card cost-card--group">
            <div className="cost-card__head">
              <div className="cost-card__type">
                <FontAwesomeIcon icon={faSpa} style={{ marginRight: '0.3rem' }} aria-hidden="true" />
                Individual Cost (Per Person)
              </div>
              <div className="cost-card__title">Hens Spa Day With Buffet (Monday)</div>
            </div>
            <div className="cost-card__body">
              <div className="cost-main">
                <div className="cost-amount">£40</div>
                <div className="cost-per">per person</div>
              </div>
              <hr className="cost-divider" />
              <div className="cost-detail">
                Monday morning — the perfect gentle send-off.<br />
                Includes: 90 min spa facilities + buffet lunch + unlimited drinks.<br />
                Approx. 3 hours total · max 20 guests at a time.<br /><br />
                All 8 attending: <strong>£320 total</strong> (Becky included — group covers her!)
              </div>
              <div className="cost-note">
                <FontAwesomeIcon icon={faCircleInfo} className="cost-note__icon" aria-hidden="true" />
                Min. 6 guests required — we're well over that!
              </div>
            </div>
          </div>

        </div>

        {/* ── INDIVIDUAL ── */}
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <FontAwesomeIcon icon={faMedal} aria-hidden="true" />
          Individual Cost — specific people only
        </h3>

        <div className="cost-grid" style={{ marginBottom: '1.75rem' }}>

          {/* Parasail */}
          <div className="cost-card cost-card--ind">
            <div className="cost-card__head">
              <div className="cost-card__type">
                <FontAwesomeIcon icon={faMedal} style={{ marginRight: '0.3rem' }} aria-hidden="true" />
                Individual – Natalie &amp; Becky Only
              </div>
              <div className="cost-card__title">Tandem Parasail</div>
            </div>
            <div className="cost-card__body">
              <div className="cost-main">
                <div className="cost-amount">£135</div>
                <div className="cost-per">total (£67.50 each)</div>
              </div>
              <hr className="cost-divider" />
              <div className="cost-detail">
                The Pilot and the Plane take to the skies — together! 🪂<br />
                <strong>Natalie + Becky only.</strong><br />
                Tandem parasail experience over the Mediterranean.
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
                Estimated – Depends on Vehicle &amp; Duration
              </div>
              <div className="cost-card__title">Quad / Buggy Adventure (Saturday)</div>
            </div>
            <div className="cost-card__body">

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>

                <div>
                  <div className="cost-main">
                    <div className="cost-amount cost-amount--gold">£45–93</div>
                    <div className="cost-per">estimated per person</div>
                  </div>
                  <div className="cost-note" style={{ marginTop: 0 }}>
                    <FontAwesomeIcon icon={faCircleInfo} className="cost-note__icon" aria-hidden="true" />
                    Final cost depends on which vehicle type and duration you choose, and how you pair up.
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

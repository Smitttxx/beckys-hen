import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faShirt,
  faTag,
  faHatCowboy,
  faShip,
  faTriangleExclamation,
  faStar,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface BriefItem {
  icon: IconDefinition
  text: string
  sub?: string
}

const HAVE_ITEMS: BriefItem[] = [
  {
    icon: faShip,
    text: "Airline hats",
    sub: "One for each crew member \u2013 full hostess chic.",
  },
  {
    icon: faTag,
    text: "Becky's Airways lanyards",
    sub: "Your official crew ID for the weekend.",
  },
  {
    icon: faStar,
    text: "Airline badges",
    sub: "Personalised for each hen.",
  },
  {
    icon: faShirt,
    text: "Branded Becky hen t-shirts",
    sub: "For the My Last Rodeo night \u2013 cowgirl edition.",
  },
]

const NEED_ITEMS: BriefItem[] = [
  {
    icon: faShirt,
    text: "Airport uniform",
    sub: "White shirt + pencil skirt (or black trousers) + tights + black blazer. You're the cabin crew \u2013 dress the part.",
  },
  {
    icon: faHatCowboy,
    text: "Last Rodeo accessories",
    sub: "Cowboy/cowgirl hat, boots, bandana, belt \u2013 whatever western vibes you've got. Pair with the provided t-shirt.",
  },
  {
    icon: faStar,
    text: "Evening outfits (Thurs, Fri, Sun)",
    sub: "Thu bar crawl, Fri hen games night, Sun Italian dinner \u2013 each night has its own vibe.",
  },
]

export default function WhatWeHave() {
  return (
    <section id="briefing" className="section section--alt" aria-labelledby="briefing-title">
      <div className="container">
        <h2 className="section-title" id="briefing-title">
          <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem", color: "var(--red)" }} aria-hidden="true" />
          Crew Briefing
        </h2>
        <p className="section-sub">Everything you need to know before you board.</p>

        <div className="briefing-grid">

          <div className="brief-card brief-card--have">
            <div className="brief-card__head">
              <div className="brief-card__title">
                <FontAwesomeIcon icon={faCheck} aria-hidden="true" />
                What We Have for You
              </div>
              <div className="brief-card__sub">{"Natalie has packed the good stuff \ud83c\udf81"}</div>
            </div>
            <div className="brief-card__body">
              {HAVE_ITEMS.map((item, i) => (
                <div key={i} className="brief-item">
                  <FontAwesomeIcon icon={item.icon} className="brief-item__icon" aria-hidden="true" />
                  <div className="brief-item__text">
                    <strong>{item.text}</strong>
                    {item.sub && <span className="brief-item__sub">{item.sub}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="brief-card brief-card--need">
            <div className="brief-card__head">
              <div className="brief-card__title">
                <FontAwesomeIcon icon={faTriangleExclamation} aria-hidden="true" />
                What We Need from You
              </div>
              <div className="brief-card__sub">{"Your packing responsibilities, crew \ud83d\udccb"}</div>
            </div>
            <div className="brief-card__body">
              {NEED_ITEMS.map((item, i) => (
                <div key={i} className="brief-item">
                  <FontAwesomeIcon icon={item.icon} className="brief-item__icon" aria-hidden="true" />
                  <div className="brief-item__text">
                    <strong>{item.text}</strong>
                    {item.sub && <span className="brief-item__sub">{item.sub}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDice,
  faGamepad,
  faFire,
  faHeart,
  faStar,
  faBolt,
  faMedal,
  faCheck,
} from '@fortawesome/free-solid-svg-icons'
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface GameItem {
  icon: IconDefinition
  label: string
  sub: string
}

const GAMES: GameItem[] = [
  { icon: faHeart,   label: "Would She Rather",            sub: "How well do the hens know Becky?" },
  { icon: faStar,    label: "Who Knows the Couple Best?",  sub: "Jay & Becky trivia time." },
  { icon: faMedal,   label: "Mr & Mrs Paddles",            sub: "Jay's answers vs Becky's \u2013 who agrees?" },
  { icon: faBolt,    label: "He Said / She Said",          sub: "Did Jay actually say that?!" },
  { icon: faDice,    label: "Dirty Minds",                 sub: "It's not what you think\u2026 or is it?" },
  { icon: faFire,    label: "Who Said What",               sub: "Match the quote to the hen." },
  { icon: faGamepad, label: "Finish the Sentence",         sub: "How does Becky finish it?" },
  { icon: faCheck,   label: "Paint the Penis \ud83d\udd8c\ufe0f", sub: "A classic for a reason." },
]

const PREP_ITEMS: GameItem[] = [
  { icon: faStar,  label: "Air hostess / pilot lanyards",  sub: "Personalised for the whole crew." },
  { icon: faDice,  label: "Dare cards",                    sub: "For forfeits and challenges throughout the trip." },
  { icon: faHeart, label: "Jay Teddy",                     sub: "For \"Disrespecting the Groom\" forfeits \u2013 handle with care." },
  { icon: faMedal, label: "Mr & Mrs paddles",              sub: "Pre-filled with Jay's answers from Natalie." },
]

export default function HenGames() {
  return (
    <section id="games" className="section" aria-labelledby="games-title">
      <div className="container">
        <h2 className="section-title" id="games-title">
          <FontAwesomeIcon icon={faDice} style={{ marginRight: "0.5rem", color: "var(--red)" }} aria-hidden="true" />
          Hen Games
        </h2>
        <p className="section-sub">{"Friday night shenanigans \u2014 and scattered throughout the trip."}</p>

        <div className="games-grid">

          <div className="games-card games-card--list">
            <div className="games-card__head">
              <FontAwesomeIcon icon={faGamepad} style={{ color: "var(--gold)", fontSize: "1rem" }} aria-hidden="true" />
              <span className="games-card__title">The Games</span>
            </div>
            <ul className="games-list">
              {GAMES.map((g, i) => (
                <li key={i} className="games-list__item">
                  <FontAwesomeIcon icon={g.icon} className="games-list__icon" aria-hidden="true" />
                  <span>
                    <strong>{g.label}</strong>
                    <span style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.05rem" }}>
                      {g.sub}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="games-card games-card--prep">
            <div className="games-card__head">
              <FontAwesomeIcon icon={faMedal} style={{ color: "var(--white)", fontSize: "1rem" }} aria-hidden="true" />
              <span className="games-card__title">Natalie's Prep Items</span>
            </div>
            <ul className="games-list">
              {PREP_ITEMS.map((p, i) => (
                <li key={i} className="games-list__item">
                  <FontAwesomeIcon icon={p.icon} className="games-list__icon" aria-hidden="true" />
                  <span>
                    <strong>{p.label}</strong>
                    <span style={{ display: "block", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.05rem" }}>
                      {p.sub}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div style={{ padding: "0.85rem 1.15rem", background: "rgba(200,16,46,0.04)", borderTop: "1px solid var(--light-gray)" }}>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                {"\u2708\ufe0f"} <strong>The Lore:</strong> Becky is the plane, we are the air hostesses, Natalie is the pilot.
                Anyone found Disrespecting the Groom answers to the Jay Teddy. {"\ud83e\uddf8"}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

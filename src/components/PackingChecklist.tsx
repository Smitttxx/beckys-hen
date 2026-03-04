import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRotateLeft,
  faShirt,
  faHatCowboy,
  faSuitcase,
  faUmbrella,
  faStar,
  faCheck,
} from '@fortawesome/free-solid-svg-icons'
import { type IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface ClItem {
  id: string
  label: string
  note?: string
}

interface ClCategory {
  id: string
  icon: IconDefinition
  title: string
  items: ClItem[]
}

const CATEGORIES: ClCategory[] = [
  {
    id: "uniform",
    icon: faShirt,
    title: "Airport Uniform \u2708\ufe0f",
    items: [
      { id: "white-shirt",  label: "White shirt" },
      { id: "pencil-skirt", label: "Pencil skirt or black trousers" },
      { id: "tights",       label: "Tights or black stockings" },
      { id: "black-blazer", label: "Black blazer" },
    ],
  },
  {
    id: "rodeo",
    icon: faHatCowboy,
    title: "My Last Rodeo Night \ud83e\udd20",
    items: [
      { id: "cowboy-hat",  label: "Cowboy / cowgirl hat" },
      { id: "western-acc", label: "Western accessories \u2013 belt, boots, bandana\u2026" },
      { id: "hen-tshirt",  label: "Becky's Airways hen t-shirt", note: "We've got it!" },
    ],
  },
  {
    id: "docs",
    icon: faSuitcase,
    title: "Travel Documents & Essentials",
    items: [
      { id: "passport",  label: "Passport (check it's valid!)" },
      { id: "insurance", label: "Travel insurance policy details" },
      { id: "euros",     label: "Euros \u2013 cash for bars, taxis, extras" },
      { id: "charger",   label: "Phone charger + EU plug adapter (Type C/F)" },
      { id: "boarding",  label: "Boarding pass \u2013 EZY3357 (download or print)" },
    ],
  },
  {
    id: "sun",
    icon: faUmbrella,
    title: "Sun & Sea",
    items: [
      { id: "sunscreen",  label: "Sunscreen \u2013 SPF 30+ minimum" },
      { id: "sunnies",    label: "Sunglasses" },
      { id: "bikini",     label: "Swimsuit / bikini (pack a spare!)" },
      { id: "flip-flops", label: "Flip flops / pool slides" },
      { id: "beach-bag",  label: "Beach bag + towel" },
      { id: "after-sun",  label: "After-sun / aloe vera" },
    ],
  },
  {
    id: "evenings",
    icon: faStar,
    title: "Evening Looks",
    items: [
      { id: "eve-thu",     label: "Thursday night outfit \u2013 bar crawl" },
      { id: "eve-fri",     label: "Friday night outfit \u2013 hen games" },
      { id: "eve-sun",     label: "Sunday smart-casual \u2013 Italian dinner" },
      { id: "dance-shoes", label: "Dancing shoes / going-out heels \ud83d\udc83" },
      { id: "clutch",      label: "Small going-out bag / clutch" },
    ],
  },
]

export default function PackingChecklist() {
  const [checked, setChecked] = useState<Set<string>>(new Set())

  const toggle = (id: string) => {
    setChecked(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const reset = () => setChecked(new Set())

  const total = CATEGORIES.reduce((sum, cat) => sum + cat.items.length, 0)
  const done  = checked.size
  const pct   = total > 0 ? Math.round((done / total) * 100) : 0

  return (
    <section id="checklist" className="section" aria-labelledby="checklist-title">
      <div className="container">
        <div className="checklist-header">
          <div>
            <h2 className="section-title" id="checklist-title">
              <FontAwesomeIcon icon={faCheck} style={{ marginRight: "0.5rem", color: "var(--red)" }} aria-hidden="true" />
              Packing Checklist
            </h2>
            <p className="section-sub" style={{ marginBottom: 0 }}>
              Tick items as you pack. Progress saves until you reset.
            </p>
          </div>
          <button
            className="reset-btn"
            onClick={reset}
            aria-label="Reset all checklist items"
          >
            <FontAwesomeIcon icon={faArrowRotateLeft} aria-hidden="true" />
            Reset
          </button>
        </div>

        {CATEGORIES.map(cat => {
          const catDone  = cat.items.filter(i => checked.has(i.id)).length
          const catTotal = cat.items.length
          return (
            <div key={cat.id} className="cl-cat">
              <div className="cl-cat__title">
                <FontAwesomeIcon icon={cat.icon} aria-hidden="true" />
                {cat.title}
                <span style={{ marginLeft: "auto", fontSize: "0.72rem", fontWeight: 400, color: "var(--text-muted)", letterSpacing: 0 }}>
                  {catDone}/{catTotal}
                </span>
              </div>

              <ul className="cl-items">
                {cat.items.map(item => {
                  const isChecked = checked.has(item.id)
                  return (
                    <li key={item.id}>
                      <label className={`cl-item${isChecked ? " cl-item--checked" : ""}`}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggle(item.id)}
                          aria-label={item.label}
                        />
                        <span className="cl-item__label">{item.label}</span>
                        {item.note && (
                          <span className="cl-item__note" aria-label={"Note: " + item.note}>
                            {"\u2713 " + item.note}
                          </span>
                        )}
                      </label>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}

        <div className="cl-progress" aria-label={`${done} of ${total} items packed`}>
          <div className="progress-bar" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <span className="progress-label">
            {done}/{total} packed ({pct}%)
          </span>
          {done === total && total > 0 && (
            <span aria-live="polite">{"\ud83c\udf89 All packed!"}</span>
          )}
        </div>
      </div>
    </section>
  )
}

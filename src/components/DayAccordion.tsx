import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export interface TlEvent {
  time: string
  event: string
  notes?: string[]
  tip?: string
}

export interface DayAccordionProps {
  dayShort: string
  dayName: string
  date: string
  summary: string
  events: TlEvent[]
  defaultOpen?: boolean
}

export default function DayAccordion({
  dayShort,
  dayName,
  date,
  summary,
  events,
  defaultOpen = false,
}: DayAccordionProps) {
  const [open, setOpen] = useState(defaultOpen)
  const bodyId = `acc-body-${dayShort.toLowerCase()}`

  return (
    <div className={`accordion${open ? ' accordion--open' : ''}`}>
      <button
        className="accordion__btn"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={bodyId}
      >
        <span className="accordion__badge" aria-hidden="true">{dayShort}</span>

        <span className="accordion__meta">
          <span className="accordion__day">{dayName}</span>
          <span className="accordion__date">{date}</span>
        </span>

        {!open && (
          <span className="accordion__summary" aria-hidden="true">{summary}</span>
        )}

        <FontAwesomeIcon
          icon={faChevronDown}
          className="accordion__chevron"
          aria-hidden="true"
        />
      </button>

      <div
        id={bodyId}
        className="accordion__body"
        role="region"
        aria-label={`${dayName} schedule`}
      >
        <div className="accordion__content">
          <ul className="timeline">
            {events.map((ev, i) => (
              <li key={i} className="tl-item">
                <span className="tl-time">{ev.time}</span>
                <span className="tl-dot" aria-hidden="true" />
                <div className="tl-body">
                  <div className="tl-event">{ev.event}</div>
                  {ev.notes && ev.notes.length > 0 && (
                    <ul className="tl-notes">
                      {ev.notes.map((note, j) => (
                        <li key={j} className="tl-note">{note}</li>
                      ))}
                    </ul>
                  )}
                  {ev.tip && <div className="tl-tip">💡 {ev.tip}</div>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

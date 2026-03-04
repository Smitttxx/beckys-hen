import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import DayAccordion, { type DayAccordionProps } from './DayAccordion'

const DAYS: DayAccordionProps[] = [
  {
    dayShort: "THU",
    dayName: "Thursday \u2013 Departure Day",
    date: "26 March 2026",
    summary: "Airport \u2192 Benidorm",
    defaultOpen: true,
    events: [
      {
        time: "14:05",
        event: "Latest Arrival \u2013 Liverpool Airport",
        notes: ["Everyone (except Becky) landside and ready."],
      },
      {
        time: "14:15",
        event: "Becky Arrives \u2013 Kit Out \u2708\ufe0f",
        notes: ["Hats, lanyards, badges. Plane outfit on."],
      },
      {
        time: "14:25",
        event: "Bag Drop Opens",
        notes: ["Bags away, then straight through security."],
      },
      {
        time: "16:25",
        event: "Depart Liverpool \u2013 EZY3357",
        notes: [
          "Flight time: approx. 2h 45m.",
          "Cabin crew (that's us) at full hostess-mode.",
          "In-flight games encouraged.",
        ],
      },
      {
        time: "20:10",
        event: "Arrive Alicante Airport (ALC)",
        notes: ["Sort your own transfer to Marina Benidorm \u2014 approx. 40 mins from ALC."],
      },
      {
        time: "~21:00",
        event: "Check-in: Marina Benidorm Hotel",
        notes: ["Drop bags, freshen up, get excited."],
      },
      {
        time: "LATE",
        event: "Strip Bar Crawl + Scavenger Hunt",
        notes: [
          "First night out \u2013 warm up nicely.",
          "Scavenger hunt challenges throughout the night.",
          "Keep it fun, big days ahead!",
        ],
      },
    ],
  },
  {
    dayShort: "FRI",
    dayName: "Friday \u2013 Pool & Hen Games",
    date: "27 March 2026",
    summary: "Pool day + Hen games",
    events: [
      {
        time: "MORN",
        event: "Lazy Morning \u2013 Sleep In!",
        notes: ["Brunch, sunscreen, pool loungers. No rush."],
      },
      {
        time: "10:00",
        event: "Marina District Fest \u2013 At Our Hotel! \ud83c\udf89",
        notes: [
          "Runs 10:00\u201320:00 right at/next to the hotel.",
          "Live music, local food stalls, great vibes.",
          "Dip in and out between pool sessions \u2014 it's on the doorstep.",
        ],
      },
      {
        time: "ALL DAY",
        event: "Pool, Cocktails & Hen Games \ud83c\udf89",
        notes: [
          "Sun beds, frozen cocktails, and hen games poolside.",
          "Jay Teddy on standby for forfeits.",
        ],
      },
    ],
  },
  {
    dayShort: "SAT",
    dayName: "Saturday \u2013 Last Rodeo",
    date: "28 March 2026",
    summary: "Strip \u2192 Last Rodeo \u2192 Club crawl",
    events: [
      {
        time: "DAY",
        event: "Shopping on the Strip",
        notes: ["Browse, grab lunch, soak it up."],
      },
      {
        time: "EVE",
        event: '"My Last Rodeo" \u2013 Get Ready \ud83e\udd20',
        notes: [
          "Cowboy/cowgirl accessories on, Becky\u2019s Airways t-shirt on.",
          "Get glam, get photos, get hyped.",
        ],
      },
      {
        time: "22:00",
        event: "Club Crawl \u2013 Let\u2019s Get Tipsy \ud83c\udf89",
        optional: true,
        notes: [
          "5 hours \u00b7 4 venues \u00b7 VIP entry \u00b7 free shots.",
          "Free cancellation up to 24 hrs before.",
        ],
        cost: "~\u00a329.25 per hen",
        costNote: "If all 8 attend \u00b7 see Costs section for full breakdown",
      },
    ],
  },
  {
    dayShort: "SUN",
    dayName: "Sunday \u2013 Beach & Bites",
    date: "29 March 2026",
    summary: "Beach + Italian dinner",
    events: [
      {
        time: "MORN",
        event: "Slow Sunday Morning",
        notes: ["Last proper pool/beach morning.", "Brunch vibes."],
      },
      {
        time: "14:00",
        event: "Beach Party \u2013 Oasis Beach Frontline Fiesta \ud83c\udf0a",
        optional: true,
        notes: ["Free bar (beer, sangria, soft drinks) + lunch \u00b7 14:00\u201318:00."],
        cost: "~\u00a350.63 per hen",
        costNote: "If all 8 attend \u00b7 see Costs section for full breakdown",
      },
      {
        time: "EVE",
        event: "Italian Beachfront Sit-Down Dinner \ud83c\udf5d",
        optional: true,
        notes: ["3 courses + shot + wine/lambrusco \u00b7 beachfront views."],
        cost: "~\u00a345 per hen",
        costNote: "If all 8 attend \u00b7 see Costs section for full breakdown",
      },
    ],
  },
  {
    dayShort: "MON",
    dayName: "Monday \u2013 Homeward Bound",
    date: "30 March 2026",
    summary: "Flight home 21:40",
    events: [
      {
        time: "MORN",
        event: "Pack Up + Check Out",
        notes: [
          "Squeeze every last ray of sunshine out.",
          "Bags packed and out of rooms on time.",
        ],
      },
      {
        time: "~19:00",
        event: "Aim to Arrive Alicante Airport (ALC)",
        notes: [
          "Allow plenty of time \u2013 no stress on the final day.",
          "Flight is 21:40 \u2013 aim for airport by 19:00.",
        ],
      },
      {
        time: "21:40",
        event: "Depart Alicante \u2013 EZY3358",
        notes: [
          "Flight time: approx. 1h 50m.",
          "The journey home \u2013 reflecting on an incredible trip.",
        ],
      },
      {
        time: "23:30",
        event: "Arrive Liverpool \u2013 Mission Complete! \ud83c\udf89",
        notes: [
          "Becky officially Last-Rodeo'd.",
          "Memories made, friendships cemented.",
          "See you at the wedding! \ud83d\udc8d",
        ],
      },
    ],
  },
]

export default function ItinerarySection() {
  return (
    <section id="itinerary" className="section" aria-labelledby="itinerary-title">
      <div className="container">
        <h2 className="section-title" id="itinerary-title">
          <FontAwesomeIcon icon={faListCheck} style={{ marginRight: "0.5rem", color: "var(--red)" }} aria-hidden="true" />
          Day-by-Day Itinerary
        </h2>
        <p className="section-sub">Tap each day to expand the full schedule</p>

        {DAYS.map(day => (
          <DayAccordion key={day.dayShort} {...day} />
        ))}
      </div>
    </section>
  )
}

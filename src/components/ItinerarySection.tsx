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
        time: "MORN",
        event: "Morning Prep \u2013 Journeys to Liverpool Airport",
        notes: [
          "Joe drops Laura, Becca & Ellie first, then returns for Natalie.",
          "Carol, Nicky & Emily make their own way.",
          "Bag drop opens at 14:25 \u2014 aim to arrive ~14:05 so we're ready and waiting.",
          "Becky is last \u2014 she arrives at ~14:15 (we text her when we're all there \ud83d\udcf1).",
        ],
      },
      {
        time: "~14:05",
        event: "Full Group Arrives Landside (minus Becky)",
        notes: [
          "Liverpool Airport is tiny landside \u2014 basically just a Starbucks.",
          "Grab a quick coffee, get outfits on, get into formation.",
          "Bag drop doesn\u2019t open until 14:25 so we\u2019re not waiting long.",
        ],
      },
      {
        time: "~14:15",
        event: "Becky Arrives \u2708\ufe0f \u2013 Hand Out The Goods!",
        notes: [
          "Becky makes her entrance \u2014 we\u2019re all ready and waiting!",
          "Hand out hats, lanyards, badges \u2014 get everyone kitted up.",
          "Help Becky into her plane outfit if she wants to wear it now.",
          "Photos, chaos, the holiday officially starts.",
        ],
        tip: "Bag drop opens in 10 mins \u2014 just enough time to get sorted!",
      },
      {
        time: "14:25",
        event: "Bag Drop Opens \u2013 Queue As A Group",
        notes: [
          "EasyJet bag drop opens exactly 2 hours before the 16:25 flight.",
          "Closes at 15:45 \u2014 we\u2019re first in the queue so no stress.",
          "Bags away, then straight through security together.",
        ],
      },
      {
        time: "~14:45",
        event: "Through Security \u2013 Head Straight to Wetherspoons",
        notes: [
          "Find the Wetherspoons airside \u2014 drinks, food, airport games.",
          "Duty free browse, more photos, air hostess energy at full power. \ud83d\udc85",
          "If Becky hasn\u2019t put the plane outfit on yet, now\u2019s the time! \u2708\ufe0f",
        ],
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
        notes: ["Head straight to the party bus \u2014 it'll be waiting outside arrivals!"],
      },
      {
        time: "~20:30",
        event: "Board the Party Bus \u2013 ALC Airport \u2192 Hotel \ud83c\udf89 \u00a3£70 pp",
        notes: [
          "£560 total coach, split 8 ways = £70 pp (Becky's covered by the group!).",
          "Approx. 40 mins to Marina Benidorm.",
          "Start the holiday properly on the way there!",
        ],
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
        time: "AFT",
        event: "Pool Recovery + Cocktails",
        notes: [
          "Frozen cocktails, sun beds, and quality gossip.",
          "Sunscreen top-ups \u2013 keep the glow going.",
        ],
      },
      {
        time: "EVE",
        event: "Hen Games Night \ud83c\udf89",
        notes: [
          "Would She Rather \u2014 how well do you know Becky?",
          "Who Knows the Couple Best?",
          "Mr & Mrs Paddles \u2014 Jay's answers vs Becky's.",
          "He Said / She Said.",
          "Dirty Minds.",
          "Who Said What + Finish the Sentence.",
          "Paint the Penis \ud83d\udd8c\ufe0f",
          "The Jay Teddy is on standby for forfeits!",
        ],
      },
    ],
  },
  {
    dayShort: "SAT",
    dayName: "Saturday \u2013 Big Adventure",
    date: "28 March 2026",
    summary: "Quad/Buggy \u2192 Club crawl",
    events: [
      {
        time: "10:00",
        event: "Quad / Buggy Adventure \u00a3",
        notes: [
          "Location: Cam\u00ed Sendero Tossal Roig, 30.",
          "Activity window: 10:00\u201318:00 (exact slot to be confirmed).",
          "Dress code: long trousers (jeans ideal) + closed-toe shoes.",
          "After activity: back to hotel to change into swimwear for the afternoon.",
          "Cost: see Activities & Costs section \u2013 depends on vehicle + pairing.",
        ],
        tip: "Don't forget closed-toe shoes \u2014 you'll be glad you wore them!",
      },
      {
        time: "EVE",
        event: '"My Last Rodeo" Theme Change \ud83e\udd20',
        notes: [
          "Get the cowboy/cowgirl accessories on!",
          "Pair with your Becky's Airways hen t-shirt (we've got you covered).",
          "Yeehaw energy only.",
        ],
      },
      {
        time: "~21:00",
        event: "Dwarf Handcuff Challenge (approx. 1 hour)",
        notes: ["One hour of absolute organised chaos. \ud83d\ude02"],
      },
      {
        time: "22:00",
        event: "Benidorm Club Crawl \u2013 Let\u2019s Get Tipsy \u2b50 4.8 \ud83c\udf89",
        notes: [
          "Operator: Let\u2019s Get Tipsy \u00b7 Top rated \u00b7 4.8/5 from 15 reviews.",
          "\u00a326 per person \u00b7 5 hours \u00b7 4 venues (2 bars + 2 nightclubs).",
          "VIP entry to all 4 venues \u2014 zero queue, straight in.",
          "\ud83c\udfae Stop 1 \u2013 Warm-Up Bar: beer pong, flip cup, free shots, drinking games, meet the crowd.",
          "\ud83c\udfa4 Stop 2 \u2013 Karaoke, Rodeo Bull & Laser Madness: sing, ride, cheer.",
          "\ud83d\udd7a Stop 3 \u2013 Nightclub Takeover: DJs, dance floor, full production.",
          "\ud83c\udf1a Stop 4 \u2013 Late-Night Club Finale: one of Benidorm\u2019s biggest late-night venues.",
          "Host meets you at the front of the bar \u2014 they\u2019ll contact you on the day to confirm.",
          "Free cancellation up to 24 hours before.",
        ],
        tip: "Dress code: comfortable shoes + clothes. No sandals, no flip-flops, no swimwear. \ud83e\udd20",
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
        event: "Beach Party \u2013 Oasis Beach Frontline Fiesta \ud83c\udf0a \u00a3",
        notes: [
          "\u00a345 pp \u2013 includes free bar (beer, sangria, soft drinks) + lunch.",
          "Runs 14:00\u201318:00.",
          "Optional watersports available on the day.",
        ],
      },
      {
        time: "EVE",
        event: "Italian Beachfront Sit-Down Dinner \ud83c\udf5d",
        notes: [
          "3 courses + a shot + 1 bottle of wine/lambrusco (or 4 pints per 2 people).",
          "\u00a340 per person.",
          "Beachfront views \u2013 dressing nicely encouraged.",
          "A lovely way to round off the trip.",
        ],
      },
    ],
  },
  {
    dayShort: "MON",
    dayName: "Monday \u2013 Spa Day & Home",
    date: "30 March 2026",
    summary: "Spa \u2192 Flight home 21:40",
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
        time: "MORN",
        event: "Hens Spa Day With Buffet \ud83d\udec0 \u00a3",
        notes: [
          "90 minutes use of the Spa Facilities.",
          "Buffet lunch + unlimited drinks included.",
          "Max 20 people at a time \u2014 we\u2019re well within that!",
          "\u00a340 per person \u00b7 approx. 3 hours total.",
          "The perfect gentle send-off before the flight home.",
        ],
        tip: "Minimum 6 guests. Perfect post-hen treat!",
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

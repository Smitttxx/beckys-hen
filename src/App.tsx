import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlane,
  faPlaneDeparture,
  faPlaneArrival,
  faUsers,
  faUser,
  faHotel,
  faChevronDown,
  faArrowRotateLeft,
  faCheck,
  faTag,
  faMoneyBillWave,
  faStar,
  faHeart,
  faShirt,
  faSuitcase,
  faUmbrella,
  faCircleInfo,
  faTriangleExclamation,
  faBolt,
  faDice,
  faHatCowboy,
  faCrown,
  faListCheck,
  faMapPin,
  faUtensils,
  faBus,
  faMedal,
  faChampagneGlasses,
  faMartiniGlass,
  faPersonSwimming,
  faGamepad,
  faFire,
  faSun,
  faMoon,
  faCamera,
  faShip,
  faSpa,
} from '@fortawesome/free-solid-svg-icons'

import Navbar from './components/Navbar'
import BoardingPassHero from './components/BoardingPassHero'
import DepartureBoard from './components/DepartureBoard'
import ItinerarySection from './components/ItinerarySection'
import CostCards from './components/CostCards'
import PackingChecklist from './components/PackingChecklist'
import WhatWeHave from './components/WhatWeHave'
import HenGames from './components/HenGames'
import Footer from './components/Footer'

library.add(
  faPlane, faPlaneDeparture, faPlaneArrival, faUsers, faUser, faHotel,
  faChevronDown, faArrowRotateLeft, faCheck, faTag, faMoneyBillWave,
  faStar, faHeart, faShirt, faSuitcase, faUmbrella, faCircleInfo,
  faTriangleExclamation, faBolt, faDice, faHatCowboy, faCrown,
  faListCheck, faMapPin, faUtensils, faBus, faMedal, faChampagneGlasses,
  faMartiniGlass, faPersonSwimming, faGamepad, faFire, faSun, faMoon,
  faCamera, faShip, faSpa,
)

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <BoardingPassHero />
        <WhatWeHave />
        <DepartureBoard />
        <ItinerarySection />
        <CostCards />
        <PackingChecklist />
        <HenGames />
      </main>
      <Footer />
    </>
  )
}

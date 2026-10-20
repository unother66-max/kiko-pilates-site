import { useOutletContext } from 'react-router-dom'
import PilatesHero from '../components/pilates/PilatesHero.jsx'
import PilatesIntro from '../components/pilates/PilatesIntro.jsx'
import SessionIndex from '../components/pilates/SessionIndex.jsx'
import PilatesSession from '../components/pilates/PilatesSession.jsx'
import GroupSession from '../components/pilates/GroupSession.jsx'
import SessionComparison from '../components/pilates/SessionComparison.jsx'
import PilatesWay from '../components/pilates/PilatesWay.jsx'
import PilatesContact from '../components/pilates/PilatesContact.jsx'
import PilatesSpecialized from '../components/pilates/PilatesSpecialized.jsx'
import { pilatesSessions } from '../data/pilates.js'
import useReveal from '../hooks/useReveal.js'
import './PilatesPage.css'
import '../components/pilates/PilatesSpecialized.css'

export default function PilatesPage() {
  const { onContact } = useOutletContext()
  useReveal()
  const [privateSession, duetSession, groupSession] = pilatesSessions
  return (
    <div className="pilates-page">
      <div className="pilates-opening">
        <PilatesHero />
        <PilatesIntro />
      </div>
      <SessionIndex sessions={pilatesSessions} />
      <PilatesSession session={privateSession} />
      <PilatesSession session={duetSession} />
      <GroupSession session={groupSession} />
      <SessionComparison sessions={pilatesSessions} />
      <PilatesWay />
      <PilatesSpecialized />
      <PilatesContact onContact={onContact} />
    </div>
  )
}

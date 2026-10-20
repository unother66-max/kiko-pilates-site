import { useOutletContext } from 'react-router-dom'
import { BalletHero, BalletIntro, BalletSmallGroup, BalletClass, BalletInstructors, BalletTwoWays, BalletSchedule, BalletContact } from '../components/ballet/BalletSections.jsx'
import './BalletPage.css'

export default function BalletPage() {
  const { onContact } = useOutletContext()
  return (
    <div className="ballet-page">
      <BalletHero /><BalletIntro /><BalletSmallGroup /><BalletClass />
      <BalletInstructors /><BalletTwoWays /><BalletSchedule /><BalletContact onContact={onContact} />
    </div>
  )
}

import { useOutletContext } from 'react-router-dom'
import PageMetadata from '../components/PageMetadata.jsx'
import { BalletHero, BalletIntro, BalletAdult, BalletSmallGroup, BalletClass, BalletFeatures, BalletGuidance, BalletTwoWays, BalletSchedule, BalletContact } from '../components/ballet/BalletSections.jsx'
import './BalletPage.css'

export default function BalletPage() {
  const { onContact } = useOutletContext()
  return (
    <div className="ballet-page">
      <PageMetadata title="BALLET | KIKO PILATES & BALLET" description="키코필라테스 앤 발레의 성인취미발레. 처음 시작하는 분도 기초부터 배우는 6:1 소수정예 수업과 자연광이 머무는 발레 공간을 만나보세요." />
      <BalletHero /><BalletIntro /><BalletAdult /><BalletSmallGroup /><BalletClass /><BalletFeatures />
      <BalletGuidance /><BalletTwoWays /><BalletSchedule /><BalletContact onContact={onContact} />
    </div>
  )
}

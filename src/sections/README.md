# 재사용할 KIKO 섹션

현재 HOME은 `PhilosophySection`만 HERO 아래에서 사용합니다.
나머지 섹션은 페이지별 후속 작업을 위해 보관하며, 현재 placeholder 페이지에는 import하지 않습니다.

| 컴포넌트 | 향후 사용처 |
| --- | --- |
| PhilosophySection | 현재 HOME, 추후 ABOUT에서 필요 시 재사용 |
| ProgramsSection / WhyKikoSection | PILATES |
| BalletSection | BALLET |
| TeachersSection | TEACHERS (이전 INSTRUCTORS) |
| ScheduleSection | SCHEDULE |
| LocationSection | LOCATION |
| ContactSection / FaqSection | CONTACT |
| StudioSection | ABOUT의 공간 소개 등 |
| ReviewsSection | 추후 적절한 상세 페이지 |

프로그램, 강사진, 후기, 시간표, 운영 정보는 `src/data/site.js`에 유지합니다.
이전 placeholder 이미지와 스타일도 보관합니다.
기존 문구·레이아웃을 보존했으며, 내부 이동 링크만 clean URL로 연결했습니다.

`ProgramsSection`, `LocationSection`, `ContactSection`에는 `onContact` callback을 전달합니다.
공통 Layout은 Outlet context로 같은 callback을 제공합니다.

후속 페이지에서 실제로 섹션을 표시할 때의 예시:

```jsx
import { useOutletContext } from 'react-router-dom'
import ProgramsSection from '../sections/ProgramsSection.jsx'
import useReveal from '../hooks/useReveal.js'

export default function PilatesPage() {
  const { onContact } = useOutletContext()
  useReveal()
  return <ProgramsSection onContact={onContact} />
}
```

위 코드는 재사용 방법을 설명하는 예시입니다. 현재 PilatesPage는 최소 placeholder 상태입니다.
실제 페이지 작업에서는 PageMetadata와 페이지별 h1도 함께 구성합니다.

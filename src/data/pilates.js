import { pilatesImages } from './pilatesImages.generated.js'

export const pilatesSessions = [
  {
    id: 'private', number: '01', name: 'PRIVATE', ratio: '1:1', ratioLabel: 'ONE TO ONE',
    session: '1:1 PERSONAL SESSION', korean: '1:1 개인레슨',
    image: pilatesImages['private-01'], objectPosition: '60% 50%', mobilePosition: '60% 50%',
    alt: '키코필라테스 1대1 개인레슨, 강사의 안내에 따라 배럴에서 움직이는 회원',
    paragraphs: [
      '개인의 체형과 움직임, 운동 목적과 컨디션을 세심하게 살펴 한 사람에게 집중하는 맞춤 수업입니다.',
      '동작을 따라가는 것보다 어떻게 움직이고 있는지를 확인하며 필요한 움직임을 보다 세밀하게 안내합니다.',
      '강사의 집중적인 티칭이 필요하거나 운동을 처음 시작하는 분, 개인의 목적에 맞춘 수업을 원하는 분께 적합합니다.',
    ],
    features: [
      { label: 'PERSONAL', detail: '개인 맞춤 진행' },
      { label: 'DETAIL', detail: '세밀한 움직임 체크' },
      { label: 'CUSTOM', detail: '목적에 맞춘 수업' },
    ],
    comparison: ['1명', '개인 맞춤', '집중적인 티칭'],
  },
  {
    id: 'duet', number: '02', name: 'DUET', ratio: '2:1', ratioLabel: 'TWO TO ONE',
    session: '2:1 SHARED SESSION', korean: '2:1 듀엣레슨',
    image: pilatesImages['duet-01'], objectPosition: '50% 55%', mobilePosition: '50% 50%',
    alt: '키코필라테스 2대1 듀엣레슨, 캐딜락에서 나란히 동작을 연습하는 두 회원',
    paragraphs: [
      '가족, 친구, 지인과 함께하면서도 각자의 몸과 움직임을 세심하게 살피는 2:1 맞춤 수업입니다.',
      '두 사람이 같은 동작을 무조건 반복하는 방식이 아니라 각자의 컨디션과 운동 경험을 고려해 필요한 움직임을 조절하며 진행합니다.',
      '함께 운동하고 싶지만 개인레슨에 가까운 집중도도 원하는 분께 적합합니다.',
    ],
    features: [
      { label: 'TOGETHER', detail: '두 사람이 함께' },
      { label: 'INDIVIDUAL', detail: '각자의 움직임 고려' },
      { label: 'BALANCE', detail: '함께하지만 다르게' },
    ],
    comparison: ['2명', '함께하는 맞춤', '가족·친구와 함께'],
  },
  {
    id: 'group', number: '03', name: 'GROUP', ratio: '6:1', ratioLabel: 'MAX SIX',
    session: '6:1 SMALL GROUP', korean: '6:1 소수정예 그룹레슨',
    image: pilatesImages['group-01'], objectPosition: '52% 55%', mobilePosition: '50% 50%',
    alt: '키코필라테스 6대1 그룹레슨, 강사가 회원들의 측면 동작을 안내하는 모습',
    paragraphs: [
      '최대 6명이 함께하는 소수정예 필라테스 수업입니다.',
      '그룹의 에너지를 함께 느끼면서도 강사가 회원의 움직임을 확인할 수 있는 적정 인원으로 운영합니다.',
      '기구를 활용한 다양한 움직임을 경험하고, 꾸준한 운동 루틴을 만들고 싶은 분께 적합합니다.',
    ],
    features: [
      { label: 'SMALL GROUP', detail: '소수정예' },
      { label: 'GUIDANCE', detail: '강사의 세심한 티칭' },
      { label: 'ROUTINE', detail: '꾸준한 운동 습관' },
    ],
    comparison: ['최대 6명', '소수정예 그룹', '꾸준한 그룹 운동'],
  },
]

export const comparisonLabels = ['수업 인원', '진행 방식', '추천']

export const pilatesWay = [
  { keyword: 'SMALL', detail: '소수 인원 중심의 수업' },
  { keyword: 'DETAIL', detail: '움직임을 세심하게 관찰' },
  { keyword: 'PERSONAL', detail: '개인의 컨디션과 목적 고려' },
  { keyword: 'BALANCE', detail: '무리하지 않고 꾸준하게' },
]

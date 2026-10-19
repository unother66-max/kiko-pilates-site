// 실제 정보가 준비되면 이 파일의 데이터와 이미지 경로를 교체합니다.
export const navigation = [
  ['ABOUT', '/about'], ['PROGRAM', null, [['PILATES', '/pilates'], ['BALLET', '/ballet']]],
  ['TEACHERS', '/teachers'], ['SCHEDULE', '/schedule'],
  ['LOCATION', '/location'], ['CONTACT', '/contact'],
]

export const programs = [
  { id: 'private', number: '01', title: 'PRIVATE', subtitle: '1:1 Private Pilates', description: '개인의 체형과 움직임을 세심하게 살펴 목적에 맞는 1:1 맞춤 수업을 진행합니다.', format: 'ONE BODY, ONE FOCUS', image: '/images/studio-study.svg', variant: 'studio' },
  { id: 'duet', number: '02', title: 'DUET', subtitle: '2:1 Duet Pilates', description: '가족, 친구, 지인과 함께 두 사람의 움직임을 각각 고려하는 2:1 맞춤 수업입니다.', format: 'A SHARED RHYTHM', image: '/images/movement-study.svg', variant: 'duet' },
  { id: 'group', number: '03', title: 'GROUP', subtitle: '6:1 Group Pilates', description: '최대 6명의 소수정예 수업으로 강사의 세심한 티칭과 함께 효율적으로 움직임을 익힙니다.', format: 'SMALL GROUP, MORE ATTENTION', image: '/images/studio-study.svg', variant: 'group' },
  { id: 'adult-ballet', number: '04', title: 'BALLET', subtitle: 'Adult Ballet', description: '성인을 위한 소수정예 취미 발레 수업으로 기초부터 차근차근 움직임과 라인을 익힙니다.', format: 'THE ART OF EVERYDAY MOVEMENT', image: '/images/ballet-study.svg', variant: 'ballet' },
  { id: 'maternity', number: '05', title: 'MATERNITY', subtitle: 'Prenatal & Postnatal Pilates', description: '임신 전후 변화하는 몸의 컨디션을 고려해 안전하고 섬세한 움직임을 안내합니다.', format: 'IN YOUR OWN TIME', image: '/images/movement-study.svg', variant: 'maternity' },
]

export const instructors = [
  { id: 'director', role: 'DIRECTOR', name: '디렉터 프로필 준비 중', specialty: 'PILATES · MOVEMENT', image: null, alt: '디렉터 사진 적용 예정', description: '철학과 지도 경력, 전문 분야가 들어갈 자리입니다.' },
  { id: 'pilates-instructor', role: 'INSTRUCTOR', name: '필라테스 강사진', specialty: 'PILATES', image: null, alt: '필라테스 강사 사진 적용 예정', description: '담당 프로그램과 강사 소개가 들어갈 자리입니다.' },
  { id: 'ballet-instructor', role: 'INSTRUCTOR', name: '발레 강사진', specialty: 'BALLET', image: null, alt: '발레 강사 사진 적용 예정', description: '담당 프로그램과 강사 소개가 들어갈 자리입니다.' },
]

export const reviews = [
  { text: '내 몸의 작은 움직임에 집중하는 시간이, 일상의 리듬까지 바꾸어 주었어요.', attribution: '필라테스 후기 예시' },
  { text: '처음 배우는 발레. 잘하는 것보다 움직이는 즐거움을 먼저 알게 되었어요.', attribution: '성인발레 후기 예시' },
  { text: '나에게 맞는 속도로, 조금씩 더 편안하게 움직이는 법을 배워갑니다.', attribution: '프라이빗 레슨 후기 예시' },
]

// 실제 운영 시간표가 아닌 레이아웃 확인용 샘플입니다.
export const schedules = {
  pilates: [
    { day: 'MON', korean: '월요일', classes: [{ time: '09:00', name: 'Group Pilates', note: '6:1 · 샘플' }, { time: '19:00', name: 'Group Pilates', note: '6:1 · 샘플' }] },
    { day: 'TUE', korean: '화요일', classes: [{ time: '10:00', name: 'Private Pilates', note: '1:1 · 샘플' }, { time: '20:00', name: 'Duet Pilates', note: '2:1 · 샘플' }] },
    { day: 'WED', korean: '수요일', classes: [{ time: '09:00', name: 'Group Pilates', note: '6:1 · 샘플' }, { time: '19:00', name: 'Group Pilates', note: '6:1 · 샘플' }] },
    { day: 'THU', korean: '목요일', classes: [{ time: '10:00', name: 'Private Pilates', note: '1:1 · 샘플' }, { time: '20:00', name: 'Duet Pilates', note: '2:1 · 샘플' }] },
    { day: 'FRI', korean: '금요일', classes: [{ time: '09:00', name: 'Group Pilates', note: '6:1 · 샘플' }, { time: '19:00', name: 'Group Pilates', note: '6:1 · 샘플' }] },
    { day: 'SAT', korean: '토요일', classes: [{ time: '10:00', name: 'Private Pilates', note: '1:1 · 샘플' }] },
  ],
  ballet: [
    { day: 'MON', korean: '월요일', classes: [{ time: '19:30', name: 'Ballet Basics', note: '입문 · 샘플' }] },
    { day: 'TUE', korean: '화요일', classes: [{ time: '11:00', name: 'Adult Ballet', note: '기초 · 샘플' }] },
    { day: 'WED', korean: '수요일', classes: [{ time: '19:30', name: 'Ballet Basics', note: '입문 · 샘플' }] },
    { day: 'THU', korean: '목요일', classes: [{ time: '11:00', name: 'Adult Ballet', note: '기초 · 샘플' }] },
    { day: 'FRI', korean: '금요일', classes: [{ time: '19:30', name: 'Adult Ballet', note: '기초 · 샘플' }] },
    { day: 'SAT', korean: '토요일', classes: [{ time: '12:00', name: 'Ballet Basics', note: '입문 · 샘플' }] },
  ],
}

export const faqs = [
  { question: '필라테스와 발레가 처음이어도 괜찮을까요?', answer: '처음 시작하는 분을 위한 안내가 들어갈 자리입니다. 실제 입문 수업 구성과 레벨 기준은 확정 후 안내합니다.' },
  { question: '나에게 맞는 프로그램은 어떻게 선택하나요?', answer: '운동 경험과 목표, 선호하는 수업 형태에 따라 프로그램을 안내하는 영역입니다. 상세 상담 절차는 준비 중입니다.' },
  { question: '상담과 수업 예약은 어떻게 하나요?', answer: '공식 상담 채널과 네이버 예약 링크를 확인한 뒤 연결할 예정입니다. 현재 시안에서는 실제 예약이 진행되지 않습니다.' },
  { question: '산전·산후 필라테스는 어떻게 진행되나요?', answer: '참여 시기와 수업 방식, 상담 시 확인할 사항을 안내할 예정입니다. 개인 상태에 따른 상담 기준은 운영 정보 확정 후 추가합니다.' },
  { question: '주차와 대중교통 이용 안내가 궁금해요.', answer: '정확한 주소와 역별 동선, 건물 주차 조건을 확인한 뒤 오시는 길에 안내할 예정입니다.' },
]

export const studioInfo = {
  address: '서울특별시 용산구 · 상세 주소 준비 중',
  hours: '운영시간 확인 후 안내 예정',
  parking: '건물 주차 이용 안내 준비 중',
  transit: '서울역 · 숙대입구역 · 청파동 · 공덕 접근 동선 확인 예정',
  phone: null,
  links: {
    consultation: 'https://talk.naver.com/w5v4u8?frm=mnmb',
    booking: 'https://m.place.naver.com/place/1225865054/ticket',
    map: null, instagram: null, blog: null,
  },
}

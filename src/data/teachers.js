import { teacherImages } from './teacherImages.generated.js'

// Names and teaching fields follow the official roster; credentials are checked
// against the linked portfolios and named source posters. See docs/teachers-page.md.
export const teachers = [
  {
    id: 'jang-jihee', name: '장지희', english: 'JI HEE', field: 'PILATES', role: 'DIRECTOR · PILATES INSTRUCTOR', koreanRole: '대표원장 · 필라테스 강사', lessons: 'PRIVATE · GROUP',
    description: '처음 나눈 상담부터 실제 수업까지. 운동 경험과 목적을 함께 살피며, 지금의 몸에 맞는 움직임을 안내합니다.',
    image: teacherImages.portrait0, crop: { left: 31, top: 98, width: 321, height: 782 }, photoWidth: 440,
    credentials: [
      { label: 'CAREER', items: ['키코필라테스 앤 발레 대표원장', '서대문 청소년수련관 · 용산 원효로1동 주민센터 필라테스 지도 경력'] },
      { label: 'CERTIFICATION', items: ['KEPA 필라테스 Mat · Reformer · CCB 과정', 'IIPA MASTER 산전·산후 과정 수료', 'IIPA MASTER 운동생리학 수료'] },
    ],
    source: 'https://blog.naver.com/kikopilates/223688586972',
  },
  {
    id: 'jin-suji', name: '진수지', english: 'SU JI', field: 'PILATES', role: 'PILATES INSTRUCTOR', koreanRole: '필라테스 강사', lessons: 'GROUP PILATES',
    description: '완성된 동작보다 오늘의 몸을 먼저 살핍니다. 그룹 수업에서도 한 사람의 움직임에 세심하게 시선을 맞춥니다.',
    image: teacherImages.portrait1, crop: { left: 27, top: 350, width: 332, height: 635 }, photoWidth: 480,
    credentials: [
      { label: 'EDUCATION', items: ['차의과학대학교 스포츠의학대학원 임상운동학과 재학'] },
      { label: 'CAREER', items: ['웰리스 요가&필라테스 · 블리스 필라테스&요가 지도 경력'] },
      { label: 'CERTIFICATION', items: ['STOTT PILATES Intensive Mat · Reformer · CCB 수료', '한국인재교육원 재활트레이닝 전문가 LV.1 · LV.2 수료', '대한 필라테스 지도자학회 해부학 수료'] },
    ],
    source: 'https://blog.naver.com/kikopilates/224270379778',
  },
  {
    id: 'mun-jeonghee', name: '문정희', english: 'JEONG HEE', field: 'PILATES', role: 'PILATES INSTRUCTOR', koreanRole: '필라테스 강사', lessons: '1:1 PRIVATE PILATES',
    description: '유연함과 단단함 사이, 나에게 필요한 균형을 찾아갑니다. 개인의 움직임과 목표를 고려해 수업을 구성합니다.',
    image: teacherImages.portrait2, crop: { left: 31, top: 101, width: 335, height: 889 }, photoWidth: 410,
    credentials: [
      { label: 'CAREER', items: ['올바로 필라테스 까치산점 전임강사 경력', '어나더 필라테스 전임강사 경력'] },
      { label: 'CERTIFICATION', items: ['국제 재활 필라테스 협회 Mat · Reformer · CCB certificate', 'CES KOREA 기능해부학 수료', '바디 메카닉 CRS 컨디셔닝 케어 과정 수료'] },
    ],
    source: 'https://blog.naver.com/kikopilates/224214338238',
  },
  {
    id: 'won-yejin', name: '원예진', english: 'YE JIN', field: 'PILATES', role: 'PILATES INSTRUCTOR', koreanRole: '필라테스 강사', lessons: '1:1 PRIVATE PILATES',
    description: '움직임의 원리를 이해하는 데서 시작하는 수업. 몸의 특성과 컨디션을 고려하며, 이해하기 쉬운 티칭을 전합니다.',
    image: teacherImages.portrait3, crop: { left: 16, top: 100, width: 322, height: 620 }, photoWidth: 450,
    credentials: [
      { label: 'CAREER', items: ['본어게인 안암점 그룹레슨 지도 경력', '필라이트 용두점 필라테스 지도 경력'] },
      { label: 'CERTIFICATION', items: ['BASI Pilates Certified Instructor', 'BASI Comprehensive Course 및 Mat · 기구 과정 수료', 'TheNewBlue 기능해부학 · 재활운동학 수료'] },
    ],
    source: 'https://blog.naver.com/kikopilates/224278022394',
  },
  {
    id: 'park-aram', name: '박아람', english: 'A RAM', field: 'PILATES', role: 'PILATES INSTRUCTOR', koreanRole: '필라테스 강사', lessons: 'GROUP PILATES',
    description: '각자의 속도와 호흡을 존중하는 움직임. 기구와 기본 동작을 바탕으로 차근차근 몸을 알아가는 시간을 만듭니다.',
    image: teacherImages.portrait4, crop: { left: 43, top: 310, width: 330, height: 493 }, photoWidth: 520,
    credentials: [
      { label: 'CAREER', items: ['울산 바른몸 필라테스&자이로토닉 지도 경력', '과천 탄츠스 · 평촌 브리즈20 필라테스 지도 경력'] },
      { label: 'CERTIFICATION', items: ['생활스포츠지도자 2급 보디빌딩', 'IIPA Instructor Course Mat · Reformer · Cadillac · Chair · Barrel', '운동학교 더뉴블루 재활운동전문가 과정 수료'] },
    ],
    source: 'https://blog.naver.com/kikopilates/224270366925',
  },
  {
    id: 'park-boram', name: '박보람', english: 'BO RAM', field: 'PILATES', role: 'PILATES INSTRUCTOR', koreanRole: '필라테스 강사', lessons: 'GROUP PILATES',
    description: '기본에서 기능적인 움직임까지 균형 있게. 함께하는 수업 안에서도 회원마다 다른 몸의 움직임을 살핍니다.',
    image: teacherImages.portrait5, crop: { left: 16, top: 120, width: 328, height: 650 }, photoWidth: 460,
    credentials: [
      { label: 'CAREER', items: ['필라테스다움 아현점 지도 경력', '글로리필라테스 지도 경력'] },
      { label: 'CERTIFICATION', items: ['Musclecare Pilates Instructor Certification', 'Functional Anatomy 및 Mat · 기구 Teaching Certificate', 'Trudy Academy 체형·움직임 평가 및 상지·하지 기능성 운동'] },
    ],
    source: 'https://blog.naver.com/kikopilates/224321216044',
  },
  {
    id: 'go-eunsae', name: '고은새', english: 'EUN SAE', field: 'BALLET', role: 'BALLET INSTRUCTOR', koreanRole: '성인발레 강사', lessons: 'ADULT BALLET · BEGINNER',
    description: '처음 시작하는 발레도 나의 리듬에 맞게. 무대와 지도 경험을 바탕으로 기본기부터 차근차근 함께합니다.',
    image: teacherImages.portrait6, crop: { left: 0, top: 98, width: 359, height: 690 }, photoWidth: 460,
    credentials: [
      { label: 'EDUCATION', items: ['고양예술고등학교 졸업', '숙명여자대학교 무용과 재학'] },
      { label: 'CAREER', items: ['코리아 유스발레 스타즈 단원 경력', '유나발레 아카데미 개인레슨 · 이화발레 유아발레 지도 경력'] },
      { label: 'CERTIFICATION', items: ['생활스포츠지도자 2급 무용'] },
    ],
    source: 'https://blog.naver.com/kikopilates/224270369985',
  },
  {
    id: 'park-nahyun', name: '박나현', english: 'NA HYUN', field: 'BALLET', role: 'BALLET INSTRUCTOR', koreanRole: '성인발레 강사', lessons: 'ADULT BALLET · BEGINNER',
    description: '기본기와 표현력을 함께 바라보는 발레. 다양한 무용 경험으로 각자의 움직임을 세심하게 안내합니다.',
    image: teacherImages.portrait7, crop: { left: 17, top: 125, width: 330, height: 640 }, photoWidth: 460,
    credentials: [
      { label: 'EDUCATION', items: ['세종대학교 무용과 졸업', 'Northern School of Contemporary Dance MA 졸업'] },
      { label: 'CAREER', items: ['예원학교 현대무용 강사', '제이아트 무용학원 전공 · 성인 지도 경력'] },
      { label: 'AWARDS', items: ['코리아국제현대무용콩쿠르 대상 · 금상', 'VIBE Vienna International Experience 금상'] },
    ],
    source: 'https://blog.naver.com/kikopilates/224419273719',
  },
  {
    id: 'kim-rakyung', name: '김라경', english: 'RA KYUNG', field: 'BALLET', role: 'BALLET INSTRUCTOR', koreanRole: '성인발레 강사', lessons: 'ADULT BALLET · BEGINNER',
    description: '동작의 기초에서 움직임의 표현까지. 공연과 교육 현장에서의 경험을 바탕으로 발레를 편안하게 만나도록 돕습니다.',
    image: teacherImages.portrait8, crop: { left: 16, top: 112, width: 330, height: 680 }, photoWidth: 460,
    credentials: [
      { label: 'EDUCATION', items: ['경희대학교 현대무용 전공'] },
      { label: 'CAREER', items: ['뮤지컬 노트르담 드 파리 출연 (2024)', 'god 콘서트 Chapter 0 댄서 출연 (2024)'] },
      { label: 'CERTIFICATION', items: ['유아·아동무용지도자 1급', '유아·아동발레지도자 2급'] },
      { label: 'AWARDS', items: ['BIDF 부산국제무용콩쿠르 금상'] },
    ],
    source: 'https://blog.naver.com/kikopilates/224270361952',
  },
]

export const teachingApproach = [
  ['DETAIL', '작은 움직임까지 세심하게'],
  ['PERSONAL', '회원의 몸과 목적에 맞게'],
  ['GUIDANCE', '이해하기 쉬운 티칭으로'],
  ['MOVEMENT', '움직임을 오래 이어가도록'],
]

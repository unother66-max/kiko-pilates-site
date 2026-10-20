export const SITE_URL = 'https://kikopilatesballet.co.kr'
export const SOCIAL_IMAGE = `${SITE_URL}/images/kiko-social-preview.png`

export const seoPages = {
  '/': {
    title: '키코필라테스 서울역점 | 서울역 필라테스·성인발레',
    description: '서울역·숙대입구·청파동 인근 키코필라테스 서울역점. 1:1 개인레슨, 2:1 듀엣레슨, 6:1 소수정예 그룹 필라테스와 성인 취미발레를 운영합니다.',
  },
  '/about': {
    title: '키코필라테스 서울역점 소개 | 키코필라테스 앤 발레',
    description: '키코필라테스 서울역점의 수업 철학과 공간을 소개합니다. 서울 용산구 만리재로 134 7층의 필라테스 스튜디오, 발레실과 라커·라운지를 만나보세요.',
  },
  '/pilates': {
    title: '서울역 필라테스 | 1:1·2:1·6:1 키코필라테스 서울역점',
    description: '키코필라테스 서울역점의 1:1 개인레슨, 2:1 듀엣레슨, 6:1 소수정예 그룹레슨을 안내합니다. 서울역·숙대입구·청파동 인근에서 내 몸과 목적에 맞는 기구 필라테스를 선택해보세요.',
  },
  '/ballet': {
    title: '서울역 성인발레 | 소수정예 취미발레 키코필라테스',
    description: '서울역 인근 키코필라테스 서울역점의 성인 취미발레를 소개합니다. 발레가 처음인 성인도 기본 자세와 동작부터 배우는 6:1 소수정예 수업을 만나보세요.',
  },
  '/instructors': {
    title: '키코필라테스 강사진 | 필라테스·발레 전문 강사',
    description: '키코필라테스 서울역점의 필라테스·발레 강사진을 소개합니다. 장지희 대표원장과 각 강사의 지도 분야, 자격 및 경력을 확인하고 나에게 맞는 수업을 알아보세요.',
  },
  '/location': {
    title: '키코필라테스 서울역점 위치 | 만리재로 134 7층',
    description: '키코필라테스 서울역점은 서울특별시 용산구 만리재로 134 7층에 있습니다. 서울역·숙대입구·청파동 인근 위치와 지도, 방문상담 안내를 확인하세요.',
  },
  '/contact': {
    title: '키코필라테스 서울역점 상담·예약 | 네이버 예약',
    description: '키코필라테스 서울역점의 필라테스·성인발레 수업을 문의하세요. 네이버 톡톡 상담, 네이버 예약과 방문상담 안내를 통해 내 몸과 일정에 맞는 수업을 알아보세요.',
  },
  '/schedule': {
    title: '키코필라테스 수업 일정 | 서울역 필라테스·성인발레',
    description: '키코필라테스 서울역점 수업 일정 안내 페이지입니다. 필라테스·성인발레의 상세 일정과 예약 가능한 시간은 상담 또는 네이버 예약에서 확인해주세요.',
  },
}

export function getPageSeo(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  const page = seoPages[path]
  return {
    ...(page || { title: '페이지를 찾을 수 없습니다 | 키코필라테스 서울역점', description: '요청하신 페이지를 찾을 수 없습니다. 키코필라테스 서울역점 홈에서 프로그램과 방문 정보를 확인해주세요.' }),
    path,
    canonical: page ? `${SITE_URL}${path === '/' ? '/' : path}` : null,
    robots: page ? 'index, follow, max-image-preview:large' : 'noindex, follow',
  }
}

// Business facts supplied by KIKO, also visible in the site's Footer.
export const healthClubSchema = {
  '@context': 'https://schema.org',
  '@type': 'HealthClub',
  '@id': `${SITE_URL}/#healthclub`,
  name: '키코필라테스 서울역점',
  legalName: '키코필라테스 앤 발레',
  alternateName: 'KIKO PILATES & BALLET',
  url: `${SITE_URL}/`,
  telephone: '+82-10-3237-5701',
  email: 'kikopilates@nate.com',
  image: SOCIAL_IMAGE,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '만리재로 134 7층',
    addressLocality: '용산구',
    addressRegion: '서울특별시',
    addressCountry: 'KR',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => `https://schema.org/${day}`), opens: '09:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'https://schema.org/Saturday', opens: '09:30', closes: '13:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'https://schema.org/Sunday', opens: '00:00', closes: '00:00' },
  ],
  sameAs: ['https://www.instagram.com/kikopilates_ballet', 'https://blog.naver.com/kikopilates'],
}

export function serializeJsonLd(value) { return JSON.stringify(value).replace(/</g, '\\u003c') }

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character])
}

export function renderSeoHead(pathname) {
  const page = getPageSeo(pathname)
  const tags = [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<meta name="robots" content="${page.robots}" />`,
    ...(page.canonical ? [`<link rel="canonical" href="${page.canonical}" />`] : []),
    '<meta property="og:type" content="website" />',
    '<meta property="og:locale" content="ko_KR" />',
    '<meta property="og:site_name" content="키코필라테스 서울역점" />',
    ...(page.canonical ? [`<meta property="og:url" content="${page.canonical}" />`] : []),
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:image" content="${SOCIAL_IMAGE}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta property="og:image:alt" content="키코필라테스 서울역점 · KIKO PILATES &amp; BALLET" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
    `<meta name="twitter:image" content="${SOCIAL_IMAGE}" />`,
    '<meta name="twitter:image:alt" content="키코필라테스 서울역점 · KIKO PILATES &amp; BALLET" />',
    ...(page.path === '/' ? [`<script id="kiko-healthclub-schema" type="application/ld+json">${serializeJsonLd(healthClubSchema)}</script>`] : []),
  ]
  return tags.join('\n    ')
}

export function applySeoHead(html, pathname) {
  return html.replace(/<!-- SEO_START -->[\s\S]*?<!-- SEO_END -->/, `<!-- SEO_START -->\n    ${renderSeoHead(pathname)}\n    <!-- SEO_END -->`)
}

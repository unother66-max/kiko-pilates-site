# KIKO 한국어 SEO·GEO·LLMO 작업 기록

기준일: 2026-10-20 (Asia/Seoul). 로컬 수정이며 GitHub push·Cloudflare 배포·색인 요청은 하지 않았습니다.

## 변경 전 진단

배포 도메인을 curl로 읽은 결과: HTTP 200, title은 “키코필라테스 앤 발레”, 원본 HTML의 H1은 0개, JSON-LD와 canonical은 없었습니다. robots.txt는 전체 허용이며 sitemap.xml에는 현재 8개 경로가 있습니다. 기존 React PageMetadata는 JavaScript 실행 후 영문 title을 설정하고 메인·Pilates의 description을 제거했습니다.

| 레인 | 변경 전 상태 | 근거 |
|---|---|---|
| SEO | ⚠️ | 초기 HTML 본문 없음, canonical 없음, 제목이 CSR 실행 후 영문으로 변경 |
| AEO | ⚠️ | 한국어 안내는 있으나 원본 HTML에 본문이 없어 추출하기 어려움 |
| GEO | ⚠️ | robots는 허용, 정적 본문·llms.txt 없음 |
| LLMO | ⚠️ | 서울역점 명칭과 공식 상호·영문명의 구조화 연결 없음 |
| NEO | ⚠️ | 네이버 소유확인 태그와 sitemap은 존재, 주요 콘텐츠가 CSR에 의존 |
| 콘텐츠 운영 | 미측정 | 공식 네이버 블로그 링크는 존재. 검색 콘솔·블로그 발행 지표 접근 및 새 블로그 제작은 이번 범위에 없음 |

## 적용 내용

- src/data/seo.js에서 한국어 title·description·canonical 및 HealthClub 엔티티를 한 곳에서 관리합니다. og:title/description/url, Twitter title/description과 HTML title은 페이지 이동 시에도 동기화합니다.
- 메인 title·description은 요청 문구를 그대로 적용했습니다. OG 이미지는 기존 1200×630 kiko-social-preview.png를 그대로 사용합니다.
- 메인·필라테스·발레에 방문자가 읽을 수 있는 한국어 브랜드·지역·수업·주소 안내를 추가했습니다. 숨김 SEO 텍스트를 추가하지 않았습니다.
- 메인의 기존 숨김 H1을 제거하고 본문에 보이는 업체명 H1을 배치했습니다. 나머지 주요 페이지는 기존 영문 H1 안에 작은 한국어 주제를 함께 표시했습니다. 이미지의 기존 한국어 alt는 유지하고 모든 실제 출력 이미지를 점검했습니다.
- 메인 JSON-LD: HealthClub, 고정 @id, name/ legalName/ alternateName/ URL/ telephone/ email/ PostalAddress/ openingHoursSpecification/ image/ sameAs를 사용합니다. 가격·별점·리뷰·좌표·우편번호 등 미확인 정보는 추가하지 않았습니다. 주소·전화·이메일·영업시간은 Footer와 일치합니다. 일요일 00:00–00:00은 종일 휴무 표기입니다.
- 빌드 시 동일한 React 페이지를 정적 HTML로 생성합니다. 크롤러만 다른 콘텐츠를 받는 구조가 아니며, 일반 방문자도 같은 HTML을 받은 뒤 React hydrateRoot로 인터랙션을 이어갑니다.
- Cloudflare Pages의 확장자 없는 경로 매칭을 사용합니다. 기존 catch-all 홈페이지 rewrite를 제거하고, /about.html 등 경로별 HTML 및 404.html을 생성합니다. /about 등 기존 URL과 React 라우트는 유지합니다.
- sitemap.xml은 SEO 경로 목록에서 빌드 시 생성합니다. 기존 8개 경로와 robots.txt의 전체 허용 및 sitemap 주소는 유지합니다. 마지막 수정일은 임의로 만들지 않았습니다.
- llms.txt에 확인된 업체 사실과 공식 페이지를 정리했습니다. 보조 안내 파일이며 노출이나 AI 인용을 보장하지 않습니다.

## URL별 결과

| URL | title | description | H1 | canonical | index 가능 여부 |
|---|---|---|---|---|---|
| / | 키코필라테스 서울역점 \| 서울역 필라테스·성인발레 | 서울역·숙대입구·청파동 인근 키코필라테스 서울역점. 1:1 개인레슨, 2:1 듀엣레슨, 6:1 소수정예 그룹 필라테스와 성인 취미발레를 운영합니다. | 키코필라테스 서울역점 | https://kikopilatesballet.co.kr/ | 로컬 빌드 수집 허용 |
| /about | 키코필라테스 서울역점 소개 \| 키코필라테스 앤 발레 | 키코필라테스 서울역점의 수업 철학과 공간을 소개합니다. 서울 용산구 만리재로 134 7층의 필라테스 스튜디오, 발레실과 라커·라운지를 만나보세요. | ABOUT / 키코필라테스 서울역점 소개 | https://kikopilatesballet.co.kr/about | 로컬 빌드 수집 허용 |
| /pilates | 서울역 필라테스 \| 1:1·2:1·6:1 키코필라테스 서울역점 | 키코필라테스 서울역점의 1:1 개인레슨, 2:1 듀엣레슨, 6:1 소수정예 그룹레슨을 안내합니다. 서울역·숙대입구·청파동 인근에서 내 몸과 목적에 맞는 기구 필라테스를 선택해보세요. | PILATES / 서울역 필라테스 | https://kikopilatesballet.co.kr/pilates | 로컬 빌드 수집 허용 |
| /ballet | 서울역 성인발레 \| 소수정예 취미발레 키코필라테스 | 서울역 인근 키코필라테스 서울역점의 성인 취미발레를 소개합니다. 발레가 처음인 성인도 기본 자세와 동작부터 배우는 6:1 소수정예 수업을 만나보세요. | BALLET / 서울역 성인 취미발레 | https://kikopilatesballet.co.kr/ballet | 로컬 빌드 수집 허용 |
| /instructors | 키코필라테스 강사진 \| 필라테스·발레 전문 강사 | 키코필라테스 서울역점의 필라테스·발레 강사진을 소개합니다. 장지희 대표원장과 각 강사의 지도 분야, 자격 및 경력을 확인하고 나에게 맞는 수업을 알아보세요. | TEACHERS / 필라테스·발레 강사진 | https://kikopilatesballet.co.kr/instructors | 로컬 빌드 수집 허용 |
| /location | 키코필라테스 서울역점 위치 \| 만리재로 134 7층 | 키코필라테스 서울역점은 서울특별시 용산구 만리재로 134 7층에 있습니다. 서울역·숙대입구·청파동 인근 위치와 지도, 방문상담 안내를 확인하세요. | LOCATION / 키코필라테스 서울역점 위치 | https://kikopilatesballet.co.kr/location | 로컬 빌드 수집 허용 |
| /contact | 키코필라테스 서울역점 상담·예약 \| 네이버 예약 | 키코필라테스 서울역점의 필라테스·성인발레 수업을 문의하세요. 네이버 톡톡 상담, 네이버 예약과 방문상담 안내를 통해 내 몸과 일정에 맞는 수업을 알아보세요. | CONTACT / 키코필라테스 서울역점 상담·예약 | https://kikopilatesballet.co.kr/contact | 로컬 빌드 수집 허용 |
| /schedule | 키코필라테스 수업 일정 \| 서울역 필라테스·성인발레 | 키코필라테스 서울역점 수업 일정 안내 페이지입니다. 필라테스·성인발레의 상세 일정과 예약 가능한 시간은 상담 또는 네이버 예약에서 확인해주세요. | SCHEDULE | https://kikopilatesballet.co.kr/schedule | 로컬 빌드 수집 허용 |

index 가능 여부는 로컬 HTML의 index/follow, sitemap 포함, robots 허용, 원본 본문 존재 기준입니다. 실제 색인 여부·상위 노출·AI 인용 여부를 뜻하지 않습니다.

## 검증

- npm run build: Vite client build → React 정적 렌더 8개 + 404 → verify-seo.mjs.
- npm run lint.
- curl /pilates: title, description, canonical, H1과 “숙대입구 필라테스 수업”이 JavaScript 없이 받은 HTML에 존재.
- Playwright: 8개 경로의 원본 HTML, title/description/OG/canonical/robots, H1 1개, 정적 자산 파일 존재, 한국어 이미지 alt 확인.
- JavaScript 비활성 브라우저: 8개 경로에서 H1이 보이고 본문이 읽힘.
- 1440/390/320px 전 경로 가로 넘침 없음. SPA 이동 시 메타·PROGRAM active·메인 schema 추가/제거, 모바일 메뉴 이동/닫힘 확인.
- JSON-LD는 JSON 파싱 및 제공된 데이터 일치를 확인했습니다. 외부 Rich Results Test/Schema Validator의 배포 URL 검증은 배포 후 수행합니다.

## 배포 후 확인 및 재측정

배포 후 원본 HTML·HTTP 응답·canonical·404·robots/sitemap 및 OG 이미지 직접 URL을 재확인합니다. Cloudflare의 실제 응답과 검색 서비스의 색인은 로컬 테스트로 확정하지 않습니다.

배포 당일 Google Search Console/네이버 서치어드바이저에서 sitemap 제출 상태와 주요 URL 수집을 확인하고 최근 28일 노출·클릭·브랜드/지역 검색어를 기준선으로 기록합니다. 계정 등록 완료 여부는 소유확인 태그만으로 판단하지 않았습니다. Bing Webmaster Tools 등록도 확인 대상입니다. 계정 작업이나 자동 알림은 생성하지 않았습니다.

배포일 +14일에 같은 기준으로 재측정합니다(오늘 배포한다면 2026-11-03). 목표 검색어: 키코필라테스 서울역점, 서울역 필라테스, 숙대입구 필라테스, 청파동 필라테스, 서울역 성인발레. 최근 2~3일의 집계 지연을 제외하고 비교합니다. LLM의 브랜드 인지는 분기 단위로 별도 점검합니다. 현재 검색 노출·클릭·AI 인용 성과 수치는 미측정입니다.

## 참고한 공식 문서

- [네이버 JavaScript 검색 최적화](https://searchadvisor.naver.com/guide/seo-advanced-javascript)
- [Google AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Schema.org HealthClub](https://schema.org/HealthClub)
- [React hydrateRoot](https://react.dev/reference/react-dom/client/hydrateRoot)
- [Vite SSR](https://vite.dev/guide/ssr.html)
- [Cloudflare Pages 경로 매칭과 404](https://developers.cloudflare.com/pages/configuration/serving-pages/)

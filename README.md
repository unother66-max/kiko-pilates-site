# 키코필라테스 앤 발레

React + Vite + JavaScript와 React Router의 BrowserRouter로 구성한 공식 홈페이지입니다.
완성된 HEADER / HERO / 폰트 / 로고를 유지하며 clean URL 기반의 독립 페이지 구조를 준비했습니다.
실제 GitHub push, Cloudflare 배포 및 예약 채널 연결은 아직 진행하지 않았습니다.

## 실행

Node.js 24.14.1 (`.nvmrc`)을 사용합니다.

```sh
nvm use
npm ci
npm run dev
```

기본 개발 주소는 `http://localhost:5173`이며 실제 포트는 터미널 출력을 확인합니다.
종료는 `Ctrl+C`입니다.

| 명령어 | 용도 |
| --- | --- |
| `npm ci` | lockfile 기준 의존성 설치 |
| `npm run dev` | 개발 서버 |
| `npm run build` | `dist/`에 배포 파일 생성 |
| `npm run preview` | 빌드 결과의 로컬 SPA 확인 |
| `npm run lint` | Oxlint 검사 |
| `npm run images:hero` | 원본 PNG에서 HERO WebP 파생본 재생성 |

## 페이지

| URL | 파일 | 현재 내용 |
| --- | --- | --- |
| `/` | `src/pages/HomePage.jsx` | HERO + KIKO PHILOSOPHY |
| `/about` | `src/pages/AboutPage.jsx` | ABOUT / KIKO PILATES & BALLET |
| `/pilates` | `src/pages/PilatesPage.jsx` | PILATES / PRIVATE · DUET · GROUP · MATERNITY |
| `/ballet` | `src/pages/BalletPage.jsx` | BALLET / ADULT BALLET |
| `/instructors` | `src/pages/TeachersPage.jsx` | TEACHERS / KIKO TEACHERS |
| `/schedule` | `src/pages/SchedulePage.jsx` | SCHEDULE / CLASS SCHEDULE |
| `/location` | `src/pages/LocationPage.jsx` | LOCATION / KIKO PILATES & BALLET |
| `/contact` | `src/pages/ContactPage.jsx` | CONTACT / RESERVATION & INQUIRY |

서브 페이지는 다음 디자인 작업을 위한 최소 placeholder이며, 기존 긴 섹션을 렌더링하지 않습니다.
알 수 없는 주소에는 `NotFoundPage`를 표시합니다. 이는 React 화면이며 서버용 `404.html`을 생성하지 않습니다.

- `src/main.jsx`: BrowserRouter 진입점
- `src/App.jsx`: Routes / Route 선언
- `src/layout/Layout.jsx`: Header → main/Outlet → Footer 공통 구조
- `src/layout/Header.jsx`: PC / 모바일 NavLink, 공식 로고, 상담 영역
- `src/layout/Footer.jsx`: 공통 푸터와 공식 채널 링크
- `src/components/ScrollToTop.jsx`: route 진입 시 즉시 최상단 이동, 브라우저 자동 위치 복원 해제
- `src/components/PageMetadata.jsx`: 페이지별 title과 선택적 description 관리
- `src/components/PagePlaceholder.jsx`: 최소 서브 페이지 공통 표현
- `src/data/site.js`: clean URL 메뉴, 프로그램 및 운영 정보

TOP NAV의 ABOUT은 HOME의 소개 영역으로 스크롤하지 않고 `/about`으로 이동합니다.
INSTRUCTORS 메뉴는 TEACHERS로 변경했습니다. 메뉴 폰트·간격·헤더 높이·로고 크기는 유지합니다.
현재 페이지에는 얇은 underline만 표시합니다. 모바일 메뉴는 선택·Escape·PC 크기 전환 시 닫힙니다.
HEADER와 FOOTER 로고는 `/`로 이동하고, 상담/예약은 `/contact`로 연결됩니다.
푸터의 BACK TO TOP은 현재 페이지의 최상단으로 이동하며 hash route를 만들지 않습니다.
본문 바로가기의 `#main`만 접근성을 위한 현재 문서 내부 앵커로 유지합니다.

## HOME와 재사용 섹션

HOME은 공통 Header → HERO → KIKO PHILOSOPHY → 공통 Footer만 표시합니다.
PROGRAMS, WHY KIKO, ADULT BALLET, 강사진, STUDIO, REVIEWS, SCHEDULE, LOCATION,
CONTACT CTA, FAQ는 HOME에서 렌더링하지 않습니다.

이전 JSX와 데이터는 삭제하지 않고 `src/sections/`로 분리했습니다.
용도와 향후 페이지 연결 예시는 `src/sections/README.md`를 확인합니다.
`src/data/site.js`의 데이터와 기존 디자인 CSS도 유지합니다.

## 디자인과 이미지

- HEADER / HERO: Rubik / Roboto Condensed / Spoqa Han Sans Neo 로컬 폰트
- PHILOSOPHY 및 보관한 PROGRAMS / WHY KIKO의 토큰: `src/styles/typography.css`
- 적용 스타일: `src/styles/editorial-sections.css`
- 실제 font 측정값 및 적용 범위: `docs/typography-system.md`
- 이전 하단 섹션의 Cormorant Garamond와 기존 디자인도 재사용을 위해 보관
- 공식 로고: `src/assets/brand/`
- HERO 슬라이드: `src/data/heroSlides.js`, `src/components/HeroSlider.jsx`
- 기존 6개 원본 PNG는 그대로 보관하며, 1600 / 2560 / 3840 WebP(품질 96)를 picture/srcset으로 선택
- 자동 전환 4500ms / 페이드 800ms / dot·일시정지·키보드·모션 감소 지원
- HERO의 이미지·crop·텍스트 위치·타이포그래피는 route 분리 과정에서 변경하지 않음
- 이미지 교체 및 생성 방법: `src/assets/hero/README.md`
- 원본·파생본·브라우저 선택 기록: `docs/hero-image-quality.md`

로컬 폰트와 라이선스는 `public/fonts/`에 있습니다.
프로그램·강사진·스튜디오용 `public/images/` SVG는 교체용 추상 placeholder입니다.
실제 주소·전화·운영시간은 확인 전까지 준비 중으로 표시합니다.
후기와 시간표 데이터는 시안용 샘플이며, 실제 회원 후기·실제 시간표가 아닙니다.

## SEO 준비

각 페이지에서 `PageMetadata` 또는 `PagePlaceholder`의 `description`을 설정할 수 있습니다.
현재는 요청된 페이지별 title만 지정합니다. 완성된 콘텐츠의 메타데이터·canonical·검색 노출은 후속 작업입니다.

## GitHub → Cloudflare Pages

| 설정 | 값 |
| --- | --- |
| Framework preset | React (Vite) |
| Root directory | 저장소 루트 |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node.js | `24.14.1` |

`public/_redirects`는 7개 서브 페이지 URL을 `/index.html`로 200 rewrite합니다.
`dist/_redirects`로 복사되므로 주소창 직접 입력과 새로고침도 React Router가 처리할 수 있습니다.
이미지·JS·폰트 URL은 rewrite 대상에 포함하지 않았습니다.
Cloudflare Pages의 기본 SPA fallback은 루트 `404.html`이 없을 때 정적 파일 이외의 요청을 처리합니다.

배포 전 로컬 확인:

```sh
npm run build
npm run lint
npm run preview
```

Git에는 소스·lockfile을 올리고 `node_modules/`, `dist/`, 비밀 환경변수는 올리지 않습니다.
현재 별도 환경변수·서버·Wrangler·Pages Functions는 필요하지 않습니다.

공식 문서:
- [React Router layout routes](https://reactrouter.com/7.18.4/start/declarative/routing)
- [Cloudflare Pages SPA fallback](https://developers.cloudflare.com/pages/configuration/serving-pages/#single-page-application-spa-rendering)
- [Cloudflare Pages redirects / 200 proxy](https://developers.cloudflare.com/pages/configuration/redirects/)

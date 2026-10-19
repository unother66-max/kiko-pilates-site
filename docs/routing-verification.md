# Clean URL 페이지 구조 검증

검증일: 2026-10-19 (Asia/Seoul)

## 구조

- React Router DOM 7.18.4 / BrowserRouter.
- `src/main.jsx`: BrowserRouter.
- `src/App.jsx`: pathless Layout route + index/Home + 7개 서브 route + NotFound.
- `src/layout/Layout.jsx`: 공통 Header / main + Outlet / Footer / 채널 안내 dialog.
- HOME: HeroSlider + PhilosophySection만 렌더링.
- 나머지 기존 섹션은 `src/sections/`에 보존. placeholder 페이지에는 렌더링하지 않음.
- 서브 페이지는 제목 / 짧은 부제만 표시. 최종 페이지 디자인은 미구현 상태.
- 각 페이지 title 지정. description은 PageMetadata / PagePlaceholder prop으로 향후 설정 가능.

## 직접 접속 / 새로고침

Chrome headless로 개발 서버(`127.0.0.1:5174`)와 production preview(`127.0.0.1:4174`)에서 모두 확인했습니다.
두 서버 모두 1440 × 900 / 390 × 844 / 320 × 568 환경을 사용했습니다.

| URL | 직접 접속 | 새로고침 | document.title |
| --- | --- | --- | --- |
| `/` | 200 / 정상 | 200 / 정상 | KIKO PILATES & BALLET |
| `/about` | 200 / 정상 | 200 / 정상 | ABOUT \| KIKO PILATES & BALLET |
| `/pilates` | 200 / 정상 | 200 / 정상 | PILATES \| KIKO PILATES & BALLET |
| `/ballet` | 200 / 정상 | 200 / 정상 | BALLET \| KIKO PILATES & BALLET |
| `/teachers` | 200 / 정상 | 200 / 정상 | TEACHERS \| KIKO PILATES & BALLET |
| `/schedule` | 200 / 정상 | 200 / 정상 | SCHEDULE \| KIKO PILATES & BALLET |
| `/location` | 200 / 정상 | 200 / 정상 | LOCATION \| KIKO PILATES & BALLET |
| `/contact` | 200 / 정상 | 200 / 정상 | CONTACT \| KIKO PILATES & BALLET |


## 동작 확인

- 모든 nav link가 문서 전체 새로고침 없이 clean URL로 이동.
- ABOUT은 HOME 소개로 스크롤하지 않고 `/about`으로 이동.
- INSTRUCTORS → TEACHERS 이름 변경, `/teachers` 연결.
- 현재 메뉴 aria-current와 얇은 underline.
- Header / Footer 공식 로고 → `/`.
- 상담 / 예약 및 비어 있는 Naver Booking 링크 → `/contact`.
- HOME의 프로그램 찾기 링크 → `/pilates`.
- route 이동, 같은 URL 재선택, 뒤로/앞으로 이동 시 최상단 시작.
- 모바일 메뉴 선택 후 dialog 닫힘 및 body scroll 복원. Escape도 정상.
- 접근성: route 이동 후 main으로 focus, 본문 바로가기 유지.
- Footer BACK TO TOP은 현재 페이지 유지 및 최상단 이동.
- 알 수 없는 경로의 React NotFound 및 HOME 복귀 정상.
- 페이지당 공통 Header / main / Footer 각각 1개.
- 모든 검사 화면에 가로 스크롤 없음.
- 브라우저 console error / page error 없음.

## 디자인 보존

- HERO JSX/CSS/data/srcset 및 원본 PNG/WebP, 공식 로고, 기존 font/style 파일 SHA-256 일치.
- 1440 / 390 / 320px에서 HERO 캡처 원시 픽셀 일치.
- HERO와 PHILOSOPHY의 위치 / typography computed metrics 일치.
- Header의 높이, 로고, 상담 영역, nav font / size / weight / spacing 유지.
- TEACHERS로 메뉴명이 짧아지면서 nav 전체의 자연스러운 폭만 변함. CSS 간격은 동일.
- 자동재생 4500ms / 6장 순환 / hover 지속 / pause·resume / 숨겨진 탭 정지 확인.
- dots / 키보드 wrap / 비활성 슬라이드 inert / prefers-reduced-motion 정상.

## Cloudflare Pages 준비

`public/_redirects`의 7개 route별 `200 /index.html` 규칙이 `dist/_redirects`에 그대로 복사됐습니다.
페이지 URL만 명시해서 이미지·폰트·JS 경로는 rewrite하지 않습니다.
루트 `404.html`은 만들지 않았으므로 Pages 기본 SPA fallback도 유지됩니다.

- Build: `npm run build`
- Output: `dist`
- Node: 24.14.1

[Cloudflare Pages SPA 공식 동작](https://developers.cloudflare.com/pages/configuration/serving-pages/#single-page-application-spa-rendering)
및 [redirect/proxy 규칙](https://developers.cloudflare.com/pages/configuration/redirects/)을 확인했습니다.
Cloudflare 실제 배포·edge 응답은 이번 범위에서 실행하지 않았습니다.

## 실행 결과

- `npm install react-router-dom`: 4 packages added, audit vulnerabilities 0.
- `npm run build`: 성공.
- `npm run lint`: 성공, 오류·경고 없음.
- GitHub push / Cloudflare 배포: 실행하지 않음.

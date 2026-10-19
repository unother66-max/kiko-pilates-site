# KIKO LOCATION

`/location` 전용 구현. 다른 7개 페이지, Header / Top Nav / 로고 / Footer / 전역 폰트·색상·라우트 파일은 변경하지 않았다.

## 파일

- `src/pages/LocationPage.jsx`: 텍스트 HERO, Google My Maps, 주소·주변 지역·방문 안내, 지도 링크, 상담·예약 CTA, metadata.
- `src/components/location/LocationMap.jsx`: iframe viewport crop 및 지도 전체화면 컨트롤.
- `src/pages/LocationPage.css`: `.location-page` 하위로 한정한 반응형 스타일.
- `src/data/location.js`: 지도 URL, 주소, 층수, 주변 지역. 공통 `studioInfo`의 지도 링크를 읽되 수정하지 않는다.

## 정보와 링크

- 주소: 요청문에 제공된 `서울특별시 용산구 만리재로 134 / 7층 키코필라테스 앤 발레`.
- 주변 지역: 서울역 / 숙대입구 / 청파동. 임의의 역 출구·도보 소요시간은 추가하지 않았다.
- 지도: 같은 지도 ID의 account scope 없는 `/maps/d/embed` URL을 사용한다. 실제 지도 제목 `KIKO Pilates & Ballet Location` 및 핀 이름 `키코필라테스 앤 발레`를 브라우저에서 확인했다. URL 변경 전후 중심 좌표와 지도 ID가 동일하다.
- GOOGLE MAP은 같은 제공 URL을 새 창으로 연다.
- NAVER MAP은 공통 데이터 `studioInfo.links.map`이 null이므로 `준비 중` disabled 상태다. 임의 검색 URL이나 장소 ID는 만들지 않았다.
- 상담·예약은 기존 Layout의 `onContact`를 사용한다. 현재 공통 상담·예약 URL이 null이므로 둘 다 기존 `/contact` 페이지로 이동한다.
- 운영시간·전화번호·주차 규정은 확인된 값이 없어 추가하지 않았다. 다른 페이지 보호 요청에 따라 공통 Footer의 준비 중 정보도 그대로 두었다.

## 레이아웃과 지도

- HERO → 큰 지도 → ADDRESS / NEARBY / VISIT / MAP LINKS → VISIT KIKO CTA 순서.
- Desktop 지도: content container 밖의 최상위 section에서 width 100%, max-width none. 1440 / 1920 / 2560px 모두 지도의 가로폭이 viewport와 같다. `100vw`로 인한 scrollbar 폭 overflow 없이 전체 폭을 사용한다. 높이는 `clamp(520px, 48vw, 680px)`이며 해당 Desktop 화면들에서는 680px이다.
- Mobile 지도: 높이 `clamp(430px, 118vw, 500px)`. 390px에서는 약 460px, 320px에서는 430px.
- Desktop / Mobile의 My Maps title/owner bar 실측 높이는 모두 67px이다. wrapper overflow hidden, iframe top -67px, height calc(100% + 67px)로 이 바만 잘라낸다. Google iframe 내부 DOM / CSS는 수정하지 않는다. crop 값은 `--location-map-crop`에서 관리한다.
- filter / opacity 변경 / blur / 색보정 / map frame radius / shadow는 없다. Google 로고·저작권·기본 확대/축소·카메라 컨트롤은 원래 지도 안에 남아 있다.
- title bar 안의 크게 보기 컨트롤도 잘리므로 wrapper 우측 상단에 44px 전체화면 버튼을 제공한다. 표준 Fullscreen API로 진입/종료하며, 미지원 브라우저에서는 원본 지도를 새 창으로 연다. 지도 위에 조작을 막는 덮개는 없다.
- iframe: width / height 100%, loading lazy, allowFullScreen, referrerPolicy no-referrer-when-downgrade, 한국어 title.
- 주소는 지도 아래 HTML address로도 제공한다. 페이지 h1 LOCATION은 하나이며 기존 영문·한글 폰트 토큰만 재사용한다.
- 정보 영역은 Desktop 2열, Mobile 1열이다. 상담·예약 버튼도 모바일에서는 세로 배치한다.

참고 사이트 https://neworderclub.com/ 는 큰 지도 중심의 정보 전달 방식만 확인했다. 디자인·이미지·문구·지점 데이터는 복제하지 않았다.

## 검증

- 1440 / 1920 / 2560 / 390 / 320px: 지도 left 0 / width = viewport, 페이지 가로 스크롤 없음. LOCATION 소개·주소·CTA·Header·Footer의 글꼴/텍스트/폭/가로 배치는 변경 전과 동일하다.
- 실제 Google 지도 타일 로딩, KIKO 지도 제목, iframe 크기·접근성 속성 확인.
- 1440px: 실제 확대 클릭으로 z 17 → 18, 마우스 드래그로 중심 좌표 변경 확인.
- 390 / 320px: 터치 탭으로 z 17 → 18, 두 손가락 터치 이동으로 중심 좌표 변경 확인. Google 기본 모바일 제스처를 유지했다.
- Desktop 1440px 및 Mobile 390px에서 전체화면 진입·종료 및 버튼 상태 갱신 확인. 모바일 전체화면은 별도 새 터치 viewport에서도 확인했다.
- Google iframe body overflow hidden / 가로 overflow 없음을 확인했다. Google 자체 컨트롤과 저작권 표기는 그대로 유지했다.
- 두 CTA의 기존 `/contact` 이동 확인.
- 다른 7개 페이지의 Desktop / Mobile 총 14개 비교에서 텍스트·폰트·색상·좌표 동일.
- 이번 지도 조정에서 기존 src / public 파일 중 LocationPage.jsx / LocationPage.css / data/location.js 외 해시 동일. HOME 및 다른 페이지, 공통 Header/Nav/로고/Footer는 변경하지 않았다.
- `npm run build`, `npm run lint` 통과. 프로젝트 빌드·린트 오류 및 경고 없음. Google iframe 내부에서는 Google API 자체의 로딩 방식·구형 Marker/Places API 관련 유지보수 경고가 발생하며, KIKO 페이지의 런타임 오류는 없었다.
- 최초 구현 측정: `docs/location-verification.json`. 최신 full-width / crop / 동작 검증: `docs/location-map-crop-verification.json`.
- GitHub push / Cloudflare 배포 없음.

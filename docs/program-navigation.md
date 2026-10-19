# PROGRAM navigation

최종 상단 메뉴: ABOUT / PROGRAM / TEACHERS / SCHEDULE / LOCATION / CONTACT.
PROGRAM의 하위 링크는 기존 `/pilates`와 `/ballet`이며 새 route는 만들지 않았다.

## 수정 파일

- `src/data/site.js`: navigation에 PROGRAM과 두 하위 링크를 정의했다. 다른 데이터는 그대로다.
- `src/layout/Header.jsx`: Desktop disclosure와 Mobile accordion을 표시한다. 하위 링크 선택 시 모바일 dialog와 accordion을 닫고 aria-expanded를 함께 갱신한다.
- `src/layout/ProgramDropdown.jsx`: Desktop hover / click / focus / outside pointer / ESC / resize 처리를 담당한다. route key가 바뀌면 닫힌 상태로 다시 마운트한다.
- `src/layout/layout.css`: 원래 nav와 동일한 글꼴·크기·간격을 사용한 트리거 및 최소한의 dropdown 스타일을 추가했다.

## 동작과 접근성

- 기존 1200px breakpoint를 유지했다. 이상에서는 Desktop, 미만에서는 기존 모바일 dialog를 사용한다.
- Desktop: 마우스 hover 또는 클릭으로 펼침. 첫 클릭은 hover로 열린 메뉴를 유지하고, 다시 클릭하면 접는다. 클릭해 연 경우 바깥 클릭 / ESC / 포커스 이탈로 닫힌다.
- trigger와 dropdown 사이의 간격은 0이다. 하위 링크로 마우스를 이동할 때 메뉴가 닫히지 않는다.
- trigger는 button이며 aria-expanded / aria-controls를 제공한다. 하위 메뉴는 일반 ul / 링크로 만들어 브라우저의 기본 Tab / Shift+Tab 이동을 유지했다.
- Enter / Space로 펼치고 접기, ArrowDown / ArrowUp으로 첫 / 마지막 링크 접근, ESC로 닫기 및 trigger 포커스 복귀를 지원한다.
- Mobile: PROGRAM 버튼으로 accordion을 펼치고 접는다. 하위 링크 선택 시 전체 dialog가 닫힌다. ESC는 먼저 열린 accordion을 접고, 다음 ESC는 dialog를 닫는다. 태블릿의 바깥 backdrop 클릭도 dialog를 닫는다.
- `/pilates`와 `/ballet`에서 PROGRAM을 활성화하며, 실제 하위 NavLink는 aria-current="page"와 burgundy accent로 표시한다.
- Desktop nav는 기존 Rubik / 15px / 500 / line-height 15px / normal letter-spacing과 기존 gap을 유지했다. 모바일도 기존 메뉴의 font family를 유지했다.
- Header 높이, sticky 상태의 높이, 로고, 상담 버튼 위치·크기는 수정하지 않았다.

## 검증

- 1440 / 1920 / 768 / 390px: hover, click, active parent/child, 원래 route 이동, 모바일 accordion, 메뉴 자동 닫힘, 바깥 클릭, 키보드, focus 복귀를 확인했다.
- 1200 / 1280 / 320px에서도 가로 overflow 및 nav 겹침이 없는지 추가 확인했다.
- 헤더의 기본 / 스크롤 상태 높이, 로고·상담 좌표, nav font와 gap이 변경 전과 동일했다.
- 기존 8개 페이지를 Desktop / Mobile에서 총 16회 비교하여 본문·Footer의 내용, 폰트, 색상, 좌표가 동일함을 확인했다.
- 변경 대상 Header.jsx / layout.css / site.js 이외 기존 src / public 파일의 해시가 동일했다.
- `npm run build` / `npm run lint`: 오류·경고 없이 통과.
- GitHub push / Cloudflare 배포 없음.

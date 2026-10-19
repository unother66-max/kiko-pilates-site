# KIKO /pilates

## 범위

`src/pages/PilatesPage.jsx`만 기존 placeholder에서 실제 프로그램 페이지로 변경했습니다.
새 스타일은 `src/pages/PilatesPage.css`의 `.pilates-page` 내부에만 적용합니다.
공통 Header / Footer / Router / font tokens / HOME HERO / 다른 page 파일은 변경하지 않았습니다.

## 정보 구조

1. 간결한 PILATES Hero — PRIVATE · DUET · GROUP 및 1:1 · 2:1 · 6:1을 첫 화면에 표시
2. MOVE FOR YOUR BODY 소개
3. 세 수업으로 이동하는 Session Index
4. PRIVATE — 큰 사진 왼쪽, 수업 설명 오른쪽, 네 가지 핵심 정보
5. DUET — 설명 왼쪽, 세로 비율 사진 오른쪽
6. GROUP — 큰 제목, 넓은 수업 사진, 설명, 핵심 정보
7. WHICH SESSION IS FOR YOU? — 인원 / 진행 방식 / 추천 비교
8. THE KIKO WAY — divider와 네 키워드
9. FIND YOUR MOVEMENT — 상담 / 예약 CTA

사진·문구·코드는 참고 사이트에서 가져오지 않았습니다.
[Minimal Pilates](https://minimalpilates.com/program)의 프로그램 설명 / 세션 분류,
[RU Pilates](https://rupilates.kr/yongsan-pilates/)의 스튜디오 소개 / 대상 및 진행 방식 설명 순서를 검토했습니다.
최종 페이지는 사용자 제공 KIKO 문구와 사진으로 구성했습니다.
가격 정보와 새로운 외부 예약 URL은 추가하지 않았습니다.

## 컴포넌트

모두 `src/components/pilates/` 아래에 있습니다.

- PilatesHero.jsx
- PilatesIntro.jsx
- SessionIndex.jsx
- PilatesImage.jsx — picture / source / img 공통 사진
- PilatesSession.jsx — PRIVATE / DUET
- GroupSession.jsx — 별도 GROUP 구성
- SessionFacts.jsx — 핵심 정보 dl
- SessionComparison.jsx — PC table / mobile 세로 비교
- PilatesWay.jsx
- PilatesContact.jsx

문구·초점·비교표는 `src/data/pilates.js`, 이미지 import는 `src/data/pilatesImages.generated.js`에서 관리합니다.
이미지 재생성은 `node scripts/generate-pilates-images.mjs`입니다.

## 이미지

| 첨부 사진 | 프로젝트 원본 | 해상도 | WebP width |
| --- | --- | --- | --- |
| 개인레슨.png | private-01.png | 4144 × 2610 | 640 / 1000 / 1600 / 2560 / 3840 |
| 듀엣레슨.png | duet-01.png | 1254 × 1254 | 480 / 800 / 1254 |
| 그룹레슨.png | group-01.png | 1254 × 1254 | 640 / 960 / 1254 |

모든 PNG는 첨부 원본과 byte-identical입니다. 원본/첨부 파일을 덮어쓰지 않았습니다.
WebP quality 96 / Lanczos3 / withoutEnlargement / ICC 보존입니다.
crop·AI 생성·색보정·sharpen·denoise·filter·opacity·scale animation은 적용하지 않습니다.
화면에서만 `object-fit: cover`와 사진별 초점을 사용합니다.

- PRIVATE Desktop / Mobile: 60% 50%
- DUET Desktop: 50% 55%, Mobile: 50% 50%
- GROUP Desktop: 52% 55%, Mobile: 50% 50%. PC 사진은 3:2 비율로 이전보다 높이를 10% 늘려 아래 동작을 더 보여줍니다.
- 페이지 Hero의 PRIVATE: Desktop 60% 45%, Mobile 60% 50%

DUET / GROUP은 원본 해상도 1254px이 최대입니다. 확대 인코딩으로 새 디테일을 만들지 않았습니다.
프로그램 본문 사진은 lazy, 페이지 Hero 사진만 eager / high priority로 로드합니다.
모든 큰 사진에 srcset / sizes 및 원본 width / height를 지정했습니다.
PRIVATE의 portrait cover에서는 화면에서 잘리기 전 사진의 폭을 sizes에 반영합니다.
실제 해상도·파일 용량·원본 hash는 `docs/pilates-image-report.json`에 있습니다.

## 반응형 / 접근성

- 1024px 이상: PRIVATE / DUET 이미지·텍스트 좌우 교차.
- 768–1023px: 2열의 과한 인물 crop을 피하도록 넓은 사진 뒤에 설명을 배치.
- 767px 이하: 사진 → section 번호 → 프로그램 제목 → 설명 → 핵심 정보.
- GROUP은 PC 제목 → 사진, mobile 사진 → 제목 순서.
- 비교표는 768px 이상에서 semantic table, mobile에서 프로그램별 h3 + dl로 표시.
- 같은 비교 데이터로 생성하며 CSS display:none인 버전은 접근성 트리에 노출하지 않음.
- 영문 Roboto Condensed / UI Rubik / 한글 Spoqa Han Sans Neo, 기존 토큰만 사용.
- 한글 본문 Desktop 16px / Mobile 15px.
- h1 1개, h1 → h2 → h3 순서, 사진 내용에 맞는 alt.
- index는 부드러운 섹션 이동 및 제목 focus. URL hash는 변경하지 않음.
- 모션 감소 설정에서는 즉시 이동하며 기존 reveal 애니메이션도 생략.
- 상담 / 예약은 공통 Outlet의 onContact를 재사용. 현재 `/contact` 안내 페이지로 이동.

## 검증

2026-10-19, Chrome:

- 1440 × 900 / 1920 × 1080 / 768 × 1024 / 390 × 844 / 320 × 568
- 추가 1920 / 390px DPR 2
- 가로 스크롤 및 실제 텍스트 Range의 화면 밖 잘림 없음
- 사진 cover / filter none / transform none / opacity 1
- 세 index 이동, 제목 focus, 비교표 전환, CTA 두 버튼, 새로고침 정상
- 원본 3개 및 기존 소스/이미지 hash 일치
- 다른 7개 route의 typography / 위치 / 크기 변경 전후 일치
- HOME 1440 / 390px 전체 화면 원시 픽셀 일치 (개발 서버 기준)
- 브라우저 runtime / console 오류 없음
- npm run build / npm run lint 성공, 최종 오류·경고 없음
- GitHub push / Cloudflare 배포 실행하지 않음

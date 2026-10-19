# KIKO typography — chapters 01–03

## 실제 HERO 기준 (Chrome, 1440 × 900)

변경 전 computed style과 Chrome CSS.getPlatformFontsForNode로 확인했습니다.

| 역할 | font-family / 실제 렌더 폰트 | size | weight | letter-spacing | line-height |
| --- | --- | --- | --- | --- | --- |
| HERO 영문 | Roboto Condensed / RobotoCondensed-Bold | 80px | 700 | 1.6px (.02em) | 80px |
| HERO 한글 | Spoqa Han Sans Neo / SpoqaHanSansNeo-Regular | 20px | 400 | -0.4px | 30px |
| TOP NAV | Rubik / Rubik-Medium | 15px | 500 | normal | 15px |
| Mobile HERO 영문 (390px) | Roboto Condensed | 28px | 700 | -0.28px | 32.2px |
| Mobile HERO 한글 (390px) | Spoqa Han Sans Neo | 14px | 400 | 0.28px | 21px |

새 폰트나 폰트 파일을 추가하지 않았습니다. 기존 로컬 700/500/400 파일을 그대로 사용합니다.

## 범위

HEADER, HERO 및 ADULT BALLET 이하의 디자인을 보존하기 위해
PHILOSOPHY / PROGRAMS / WHY KIKO에만 새 토큰을 적용합니다.
전역의 `--serif`, `--sans`를 변경하지 않습니다.
세 구간에서 Kiko Serif(Cormorant Garamond)와 시스템 한글 fallback 사용을 제거했으나,
이후 구간에서 계속 쓰이므로 폰트 파일 및 @font-face는 삭제하지 않았습니다.

## 토큰

`src/styles/typography.css`가 공통 관리 파일입니다.

- `--font-en-display`: Roboto Condensed — section heading, program title, 숫자, 핵심 영문
- `--font-en-ui`: Rubik — eyebrow, 번호, program subtitle
- `--font-ko`: Spoqa Han Sans Neo — 한글 본문, 설명, 통계 안내, 상담 링크
- `--font-weight-display / ui / body`: 700 / 500 / 400
- `--font-size-section-title`: PC 48–76px / mobile 42–64px
- `--font-size-program-title`: PC 46–72px / mobile 42–64px
- `--font-size-stat / stat-ratio / stat-keyword`: 숫자 / 수업 비율 / 두 줄 영문 정보의 별도 단계
- `--font-size-lead`: 21–26px / mobile 21px
- `--font-size-program-subtitle`: 17px / mobile 16px
- `--font-size-body`: 16px / mobile 15px
- `--font-size-small`: 14px — 보조 링크
- `--font-size-micro`: 11px — 장식용 eyebrow / 번호
- `--line-height-display / body / micro`: 1.04 / 1.9 / 1.5
- `--letter-spacing-display / body / micro`: -.015em / -.025em / .08em
- `--font-size-hero / hero-ko`: 현재 HERO 크기를 기록한 참조 토큰. 완성된 HERO CSS를 덮어쓰지 않습니다.

크기는 반응형 clamp 및 767px breakpoint에서 조정합니다.
실제 적용 규칙은 `src/styles/editorial-sections.css`에 모아두었습니다.
기존 index.css에 흩어져 있던 세 구간 전용 규칙은 제거했습니다.

## 구성 및 검증

- PHILOSOPHY: PC 영문 / 한글 2열, mobile 영문 → 한글 lead → 설명.
- PROGRAMS: 5개 프로그램, PC 이미지 / 글 좌우 교차, mobile 이미지 → 제목 → 설명.
- WHY KIKO: 네 항목의 2×2 divider 구성, mobile 세로 배열.
- 1440 / 1920 / 768 / 390 / 320px에서 확인. 가로 스크롤 없음.
- 변경 전후 HEADER/HERO의 typography 및 좌표 일치.
- ADULT BALLET 이하의 typography, 색상, 상대 좌표/크기 일치.

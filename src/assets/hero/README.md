# KIKO 실제 HERO 사진

메인 HERO는 기존 `hero-01.png` ~ `hero-06.png`에서 만든 WebP 파생본을 순서대로 사용합니다.
원본 PNG는 그대로 보관하며, 덮어쓰기·이동·색보정하지 않습니다. placeholder JPG는 HERO에서 사용하지 않습니다.

사진을 교체한 뒤 `npm run images:hero`를 실행하면 Sharp로 `hero-XX-1600.webp`,
`hero-XX-2560.webp`, `hero-XX-3840.webp`와 `src/data/heroImages.generated.js`를 재생성합니다.
원본에서 바로 생성하므로 압축된 파생본을 다시 확대하거나 재압축하지 않습니다.
품질 96, smartSubsample:false, 비율 유지, ICC 보존입니다.
3840 버전에서 hero-01은 약 2%, hero-04는 약 165%, hero-05는 약 38% 확대합니다.
hero-04의 1600/2560도 보간 확대이며, 다른 버전은 모두 축소입니다.
이전 2880 버전은 비교용으로 남아 있지만 현재 srcset에서는 사용하지 않습니다.
`docs/hero-image-quality.md`에 원본/파생본 해상도·용량과 실제 브라우저 선택 파일을 기록했습니다.

`src/data/heroSlides.js`에서 슬라이드를 한 곳에서 관리합니다.

- `image`, `srcSet`, `width`, `height`: `heroImages.generated.js`에서 가져오는 WebP URL과 원본 비율
- `title`, `subtitle`: 영문 제목과 한글 줄 배열
- `objectPosition`: Desktop / Tablet 사진 초점
- `mobilePosition`: 767px 이하 사진 초점
- `widePosition`: 선택 사항, 2200px 이상에서의 사진 초점. 없으면 objectPosition 사용
- `textPosition`: `left` / `center` / `right` 가로 정렬
- `textColor`: `dark` / `light` 또는 CSS 색상 값
- `textX`, `textY`: HERO 영역에서 제목+부제 묶음의 중심 좌표(%). 현재 전 슬라이드 `50, 50`입니다.
- `mobileTextX`, `mobileTextY`: 모바일 중심 좌표(%). 현재 전 슬라이드 `50, 50`이며, 생략하면 PC 좌표를 사용합니다.
- `textShadow`: 글자에만 적용하는 CSS 그림자. 3번은 미세한 밝은 그림자, 4번은 미세한 어두운 그림자를 사용합니다.
- `textBackdrop`: 제목+부제 주변 pseudo-element의 배경. 4번만 최대 검정 10%의 은은한 radial-gradient를 사용합니다.
- `overlay`: `{ color: '#fcfbf8', opacity: 0 }`. 현재 전 사진 0입니다.
- `alt`: 사진 설명

PC와 모바일 모두 제목+부제를 하나의 묶음으로 가로·세로 정중앙에 통일했습니다.
사진은 object-fit: cover이므로 화면 비율에 따라 가장자리가 잘립니다.
가로 사진 전체를 좁은 세로 화면에 모두 보존할 수는 없으므로
모바일 높이를 너비에 비례하는 390~560px로 제한하고 초점을 개별 조정했습니다.
Desktop HERO는 최대 폭 없이 전체 화면을 채웁니다. 768~2199px 높이 상한은 860px,
2200px 이상에서는 첫 화면 높이를 더 활용하도록 1340px입니다. 사진은 계속 cover로 표시합니다.
텍스트는 사진과 별도 레이어에서 중앙 정렬하며, 화면 가장자리에는 최소 24px 여백을 둡니다.

자동재생은 4500ms, 페이드는 800ms이며 `heroSettings`에서 변경합니다.
dot 클릭과 좌우 화살표 키로 이동할 수 있습니다. 키보드 포커스가 들어오면 자동재생을 잠시 멈춥니다.
일시정지/재생 버튼을 지원하며, 마우스 hover만으로 멈추지는 않습니다.
숨겨진 탭에서는 재생을 멈추고, prefers-reduced-motion 설정에서는 자동재생과 애니메이션을 끕니다.

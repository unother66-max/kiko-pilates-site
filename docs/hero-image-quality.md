# HERO Retina 전달 품질 / 3840 WebP

## 유지한 항목

원본 PNG 6장, HERO JSX/CSS, heroSlides.js, HEADER 및 하단 섹션의 SHA-256이 변경 전과 동일합니다. HERO 높이/full-width/crop/object-position/mobilePosition/widePosition/텍스트/typography/transition/dot/pause는 변경하지 않았습니다.

변경 범위는 생성 스크립트, WebP 파일, heroImages.generated.js의 srcset URL, 관련 문서입니다.

## 직접 생성한 해상도 / 용량

모든 버전은 원본 PNG에서 직접 생성합니다. 파일명 hero-XX-1600.webp / hero-XX-2560.webp / hero-XX-3840.webp. 1 KB=1000 bytes.

| 파일 | 원본 | 1600 WebP | 2560 WebP | 3840 WebP |
| --- | --- | --- | --- | --- |
| hero-01.png | 3766×2614 | 1600×1111 · 188.8 KB | 2560×1777 · 333.9 KB | 3840×2665 · 577.1 KB |
| hero-02.png | 4144×2610 | 1600×1008 · 188.6 KB | 2560×1612 · 328.7 KB | 3840×2419 · 555.8 KB |
| hero-03.png | 4328×2596 | 1600×960 · 238.3 KB | 2560×1536 · 406.4 KB | 3840×2303 · 678.1 KB |
| hero-04.png | 1448×1086 | 1600×1200 · 251.3 KB | 2560×1920 · 460.0 KB | 3840×2880 · 795.2 KB |
| hero-05.png | 2786×2244 | 1600×1289 · 374.8 KB | 2560×2062 · 658.0 KB | 3840×3093 · 1038.0 KB |
| hero-06.png | 3950×2604 | 1600×1055 · 180.9 KB | 2560×1688 · 326.8 KB | 3840×2531 · 563.0 KB |

3840 기준: 01은 1.01965배 소폭 확대, 02는 0.92664배 축소, 03은 0.88725배 축소, 04는 2.65193배 보간 확대, 05는 1.37832배 보간 확대, 06은 0.97215배 축소입니다. 3840px에 맞춰 새로운 콘텐츠를 생성하거나 사진을 crop하지 않습니다. 높이는 원본 비율로 계산해 정수 픽셀로 반올림합니다.

## 인코딩 설정과 선택 근거

- Sharp WebP quality96 / effort6 / smartSubsample:false. 원본 ICC 유지.
- 대표 02/04/05에서 Q95와 Q96을 동일한 smartSubsample:false 조건으로 비교했습니다. 같은 크기로 리사이징한 비압축 기준과의 오차가 Q96에서 더 작아 Q96을 선택했습니다. 측정값은 hero-retina-quality-comparison.json에 있습니다.
- Width-only Lanczos3 축소 / Sharp·libvips 고품질 cubic 확대. nearest-neighbor, AI 생성, sharpen/denoise, 색보정/contrast/saturation 변경 없음.
- npm run images:hero로 재생성합니다. 이전 2880 Q92 파일은 비교용으로 보관하며 현재 srcset에서는 사용하지 않습니다.

## Chrome DevTools DPR 검증

Chrome을 Playwright channel:chrome으로 열고 CDP Emulation.setDeviceMetricsOverride의 deviceScaleFactor를 1 또는 2로 설정했습니다. 각 조건은 캐시가 공유되지 않는 새 브라우저 컨텍스트에서 확인했습니다.

srcset은 1600w / 2560w / 3840w입니다. 기존 sizes는 cover가 요구하는 잘리기 전 이미지 폭과 viewport 폭 중 큰 값을 계산합니다. 1920×1080에서는 모든 사진에 대해 100vw=1920 CSS px이므로 DPR2 목표가 3840px이고 실제로 3840 파일을 선택했습니다. sizes를 변경할 필요는 없었습니다.

| Viewport / DPR | hero-01 / 02 / 03 / 04 / 05 / 06 선택 폭 |
| --- | --- |
| 1440×900 / DPR 1 | 1600 / 1600 / 1600 / 1600 / 1600 / 1600 |
| 1920×1080 / DPR 1 | 2560 / 2560 / 2560 / 2560 / 2560 / 2560 |
| 1920×1080 / DPR 2 | 3840 / 3840 / 3840 / 3840 / 3840 / 3840 |
| 2560×1440 / DPR 1 | 2560 / 2560 / 2560 / 2560 / 2560 / 2560 |
| 2560×1440 / DPR 2 | 3840 / 3840 / 3840 / 3840 / 3840 / 3840 |
| 390×844 / DPR 2 | 1600 / 1600 / 1600 / 1600 / 1600 / 1600 |

1920px DPR1: hero-01-2560.webp부터 hero-06-2560.webp. DPR2: hero-01-3840.webp부터 hero-06-3840.webp. 배포 파일명에는 캐시 해시가 붙으며, 실제 currentSrc/요청 파일명은 hero-image-verification.json에 있습니다. 모바일에는 3840을 강제하지 않습니다.

CSS 확인: img filter:none, transform:none, opacity:1. 전환은 slide wrapper opacity에서만 처리합니다. HERO 크기, crop, caption 영역의 측정값이 이전과 같습니다.

## 2880 Q92 / 3840 Q96 / 원본 PNG 확대 비교

1920 CSS px / DPR2에서 세 버전을 동일 picture/source sizes 조건으로 표시하고 여섯 사진의 320×180 CSS px 영역을 캡처했습니다. 각 캡처는 640×360 실제 픽셀입니다. 비교용 route는 테스트 브라우저에서만 사용했으며 앱 코드에는 추가하지 않았습니다.

02·03·06은 얼굴 주변 머리카락, 옷감·기구 경계의 미세 디테일 손실이 줄었습니다. 차이는 미세하며 01은 시각적 차이가 작습니다. 원본이 작은 04/05는 인코딩 손실을 줄일 수 있어도 원본에 없는 디테일을 복구하지는 않습니다. 눈에 띄는 새 halo/edge ringing/색감 변형은 확인되지 않았습니다.

보조 지표로 같은 좌표의 캡처와 PNG 기준 사이 PSNR을 기록했습니다. 이것은 선명도 점수 자체가 아니며, 보간 픽셀 격자와 작은 반올림 차이에도 민감합니다. 특히 01은 이 지표에서 개선되지 않았으므로 모든 사진이 일괄적으로 더 선명해졌다고 단정하지 않습니다.

| 사진 | 기존 2880 PSNR dB | 새 3840 PSNR dB | 차이 |
| --- | --- | --- | --- |
| hero-01 | 45.30 | 37.98 | -7.32 |
| hero-02 | 44.69 | 46.27 | 1.57 |
| hero-03 | 43.64 | 45.98 | 2.34 |
| hero-04 | 44.36 | 45.76 | 1.40 |
| hero-05 | 37.62 | 39.11 | 1.49 |
| hero-06 | 46.19 | 47.16 | 0.97 |

## 검증 결과

1440px DPR1, 1920px DPR1/2, 2560px DPR1/2, 390px DPR2에서 선택 파일·img 스타일·가로 넘침을 확인했습니다. 실제 일반 페이지는 원본 HERO PNG를 다운로드하지 않습니다. 원본과 레이아웃 파일의 해시는 동일하고 18개 파생본의 해상도/ICC 프로파일을 검증했습니다.

생성 상세: hero-image-report.json. 브라우저 기록: hero-image-verification.json. 인코딩/비교 측정: hero-retina-quality-comparison.json.

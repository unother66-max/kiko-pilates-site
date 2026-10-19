# KIKO PILATES 사진

이번에 첨부된 실제 수업 사진 세 장을 원본 그대로 복사해 보관합니다.
외부 원본 파일과 아래 PNG의 SHA-256이 일치합니다.

| 첨부 파일 | 프로젝트 PNG | 프로그램 | 원본 해상도 |
| --- | --- | --- | --- |
| 개인레슨.png | private-01.png | PRIVATE / 페이지 Hero | 4144 × 2610 |
| 듀엣레슨.png | duet-01.png | DUET | 1254 × 1254 |
| 그룹레슨.png | group-01.png | GROUP | 1254 × 1254 |

사진의 내용, 색감, 얼굴, 몸, 기구를 수정하지 않습니다.
원본 PNG는 웹에서 직접 로드하지 않으며 별도 WebP를 사용합니다.

## 재생성

```sh
node scripts/generate-pilates-images.mjs
```

- 원본 PNG에서 직접 생성, width만 조정하고 crop하지 않음
- Sharp Lanczos3 downscale / 원본 크기, `withoutEnlargement: true`
- WebP quality 96 / effort 6 / smartSubsample false
- 원본 ICC profile 유지
- sharpen, denoise, filter, brightness, contrast, saturation, AI 생성 없음
- PRIVATE: 640 / 1000 / 1600 / 2560 / 3840w
- DUET: 480 / 800 / 1254w
- GROUP: 640 / 960 / 1254w

DUET와 GROUP 원본의 최대 폭은 1254px입니다. 새 디테일을 만들거나 불필요하게 확대 인코딩하지 않았습니다.
큰 화면의 GROUP 표시에는 자연스러운 cover crop이 적용되며, 원본 자체의 디테일 한계는 유지됩니다.

`src/data/pilatesImages.generated.js`에 정적 import와 srcSet을 생성합니다.
해상도·용량·원본 hash는 `docs/pilates-image-report.json`에 기록합니다.

## 표시

수업 문구와 사진별 objectPosition은 `src/data/pilates.js`에서 관리합니다.
`PilatesImage`는 picture / source / img와 sizes를 사용합니다.
PRIVATE의 portrait cover 창에는 잘리기 전 사진의 유효 폭까지 반영해 더 선명한 소스를 선택합니다.
사진 자체에는 CSS filter / opacity / transform / overlay를 적용하지 않습니다.
색감은 원본 그대로 유지하고, 화면 crop만 CSS object-fit: cover로 조절합니다.

Hero만 eager / high priority, 아래 사진은 lazy이며 원본 width / height를 지정했습니다.
사진이 더 추가되면 각 프로그램 원본을 새 이름으로 보관하고 데이터 및 생성 목록을 확장합니다.

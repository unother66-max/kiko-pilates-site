# KIKO /teachers 구현 및 정보 확인 기록

확인일: 2026-10-19. 공식 강사진 소개와 각 연결 포트폴리오를 브라우저에서 열어 확인했다. 이 기록은 해당 자료에서 확인한 정보를 설명하며, 실제 근무 일정의 실시간 확인을 의미하지 않는다.

## 정보 출처와 사진 매칭

공식 강사진 목록: https://blog.naver.com/kikopilates/223688586972

첨부 소개 이미지의 이름, 공식 목록의 이름·담당 분야, 연결 포트폴리오의 인물 사진을 대조했다. 아홉 명 모두 사진·이름 매칭이 확인되었다. 아래 원본 파일은 `src/assets/teachers/`에 바이트를 변경하지 않고 복사했다.

| 이름 / 담당 | 첨부 원본 → 프로젝트 PNG | 홈페이지에 추린 주요 정보 | 개별 출처 |
| --- | --- | --- | --- |
| 장지희 / 대표원장·Pilates 개인·그룹 | 장지희원장.png → jang-jihee-01.png | 서대문 청소년수련관·용산 원효로1동 주민센터 지도 경력, KEPA Mat·Reformer·CCB, IIPA MASTER 산전·산후 및 운동생리학 수료 | [공식 소개](https://blog.naver.com/kikopilates/223688586972) |
| 진수지 / Pilates 그룹 | 진수지강사.png → jin-suji-01.png | 차의과학대학교 스포츠의학대학원 임상운동학과 재학, 웰리스·블리스 지도 경력, STOTT 과정 및 재활트레이닝 LV.1·LV.2 수료 | [포트폴리오](https://blog.naver.com/kikopilates/224270379778) |
| 문정희 / Pilates 개인 | 문정희_강사님.png → mun-jeonghee-01.png | 올바로·어나더 전임 경력, 국제 재활 필라테스 협회 과정, CES KOREA 기능해부학 및 바디 메카닉 CRS 수료 | [포트폴리오](https://blog.naver.com/kikopilates/224214338238) |
| 원예진 / Pilates 개인 | 원예진강사.png → won-yejin-01.png | 본어게인·필라이트 지도 경력, BASI Pilates Certified Instructor, Comprehensive 및 TheNewBlue 과정 수료 | [포트폴리오](https://blog.naver.com/kikopilates/224278022394) |
| 박아람 / Pilates 그룹 | 박아람강사.png → park-aram-01.png | 울산 바른몸·과천 탄츠스·평촌 브리즈20 지도 경력, 생활스포츠지도자 2급 보디빌딩, IIPA 및 더뉴블루 과정 | [포트폴리오](https://blog.naver.com/kikopilates/224270366925) |
| 박보람 / Pilates 그룹 | 박보람강사.png → park-boram-01.png | 필라테스다움 아현점·글로리 지도 경력, Musclecare Instructor Certification, Functional Anatomy 및 Trudy Academy 과정 | [포트폴리오](https://blog.naver.com/kikopilates/224321216044) |
| 고은새 / 성인발레 기초 | 고은새강사.png → go-eunsae-01.png | 고양예고 졸업·숙명여대 무용과 재학, 코리아 유스발레 스타즈 단원 및 발레 지도 경력, 생활스포츠지도자 2급 무용 | [포트폴리오](https://blog.naver.com/kikopilates/224270369985) |
| 박나현 / 성인발레 기초 | 박나현_강사님.png → park-nahyun-01.png | 세종대 무용과 및 NSCD MA 졸업, 예원학교·제이아트 지도 경력, 코리아국제현대무용콩쿠르 및 VIBE 수상 | [포트폴리오](https://blog.naver.com/kikopilates/224419273719) |
| 김라경 / 성인발레 기초 | 김라경_강사.png → kim-rakyung-01.png | 경희대 현대무용 전공, 2024 노트르담 드 파리·god 콘서트 출연, 유아·아동무용 1급·발레 2급, BIDF 금상 | [포트폴리오](https://blog.naver.com/kikopilates/224270361952) |

### 자료 간 차이와 생략한 정보

- 고은새 첨부 포스터는 오전 개인레슨으로 표기되어 있으나 공식 강사진 목록과 연결 포트폴리오는 성인발레 담당으로 소개한다. 사이트는 공식 목록의 Ballet 분류를 따랐다.
- 원예진 포스터는 상단 개인레슨과 하단 그룹레슨 표기가 서로 다르다. 공식 목록·연결 포트폴리오에 따라 개인레슨으로 정리했다.
- 모든 강사의 고정 요일·시간은 생략했다. 과거 근무처를 현재 소속으로 표시하지 않았다.
- 긴 공연 목록·워크숍·전체 자격 목록은 핵심 3~6줄로 줄였다. 김라경의 2026 안나카레니나 출연 예정은 완료된 경력으로 넣지 않았다.
- 재학은 졸업으로 바꾸지 않았다. 개인별 연차, 치료 효과나 성과 보장, 확인되지 않은 학력·자격은 추가하지 않았다.
- 소개 문장은 확인된 담당 분야를 바탕으로 새로 작성했다. 원문 인용이나 이력 추가가 아니다.

## 이미지와 해상도

첨부 파일은 사진과 이력이 합쳐진 소개 포스터다. 장지희는 773×966px, 나머지 8명은 모두 773×1092px다. 원본 PNG와 외부 첨부 원본의 SHA-256이 동일함을 확인했다.

`scripts/generate-teacher-images.mjs`는 포스터 전체를 비율 유지하여 384w / 600w / 773w WebP로 저장한다. 총 27개, 개별 파일 약 37~137kB다. 장지희 파생본은 384×480 / 600×750 / 773×966, 나머지는 384×542 / 600×848 / 773×1092다. 정확한 용량·해상도·해시는 `docs/teacher-image-report.json`에 있다.

- Sharp Lanczos3, WebP quality 96, effort 6, smartSubsample false, 원본 ICC 프로필 유지.
- 비트맵 crop·확대·sharpen·색보정·AI 재생성 없이 변환했다.
- `TeacherPhoto`가 CSS 표시창으로 포스터 왼쪽 인물 영역을 보여준다. 얼굴·몸 비율은 유지하며 기존 서명이나 사진 안 그래픽 일부는 남는다.
- `picture/srcset/sizes`는 이 표시창과 포스터 사이의 폭 배율을 반영한다. 큰 프로필에서는 원본 폭 773w가 선택된다.
- 인물 영역 자체의 실제 가로 픽셀은 약 321~359px뿐이다. 아홉 명 모두 큰 화면/Retina에서 부드럽게 보일 수 있다. 1200/1600/2560 파일로 인위적으로 키우지 않았다. 향후 고해상도 인물 사진 원본으로 교체하면 선명도가 개선된다.

재생성: `node scripts/generate-teacher-images.mjs`

## 구조와 수정 범위

- 페이지: `src/pages/TeachersPage.jsx`
- 페이지 전용 스타일: `src/pages/TeachersPage.css` — `.teachers-page` 범위로 한정.
- 내용·사진 표시창 데이터: `src/data/teachers.js`
- 이미지 import/srcset: `src/data/teacherImages.generated.js`
- 컴포넌트: `TeachersHero`, `TeachersIntro`, `TeacherProfile`, `TeacherPhoto`, `TeachersApproach`, `TeachersLessons`, `TeachersContact`.
- 컴포넌트 폴더: `src/components/teachers/`.
- 단일 h1, Pilates/Ballet h2, 개별 강사 h3, 이름·역할 alt, 기존 프로그램/상담 연결을 사용했다. 상단은 TEACHERS → TEACHING WITH DETAIL 및 한글 소개 → 첫 프로필 순서로 간결화했다. 심볼·별도 슬로건·강사 인덱스는 제거했으며 첫 Pilates 그룹 제목은 스크린리더용으로 유지했다.
- 기존 폰트 토큰과 공통 버튼을 재사용했다. 패키지·폰트 추가 없음.
- 다른 페이지, 공통 Header/Footer, 로고, 내비게이션, 폰트 파일은 수정하지 않았다.

## 검증

- 1440 / 1920 / 768 / 390 / 320px에서 가로·텍스트 overflow 없음.
- 9개 프로필, 단일 h1, title/description, 이미지 비율 및 filter/transform 없음, opacity 1 확인.
- 모바일은 사진 → 분야 → 이름 → 소개 → 이력 순서.
- `/pilates`, `/ballet`, 상담/예약 연결 확인. 초기 구현의 강사 바로가기는 이후 상단 간결화 요청으로 제거했다.
- 기존 7개 페이지의 Desktop/Mobile 14개 비교에서 텍스트·폰트·색상·레이아웃 좌표 동일.
- 작업 전 존재한 소스/공개 파일은 `TeachersPage.jsx` 외 해시 동일. 원본 이미지 해시 동일.
- `npm run build` 통과, `npm run lint` 오류·경고 0.
- GitHub push / Cloudflare 배포 없음.

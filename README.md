# 한양여자대학교 항공과 홍보 사이트

학생과 예비 신입생을 위한 항공과 홍보 사이트입니다. GitHub Pages(무료)로 운영되며, 글과 정보는 웹 브라우저에서 파일을 고치는 것만으로 바꿀 수 있습니다.

- 비용: 0원 (GitHub 무료 계정 + GitHub Pages)
- 주소 예시: `https://<깃허브아이디>.github.io/hywu-air/`
- 개인 도메인(예: `air.hywoman.ac.kr`)도 연결할 수 있습니다. 학교 전산팀에 DNS(CNAME) 설정을 요청하면 됩니다.

---

## 1. 처음 한 번만: 사이트 공개하기

1. GitHub 에 로그인하고 오른쪽 위 `+` → **New repository**
2. Repository name 에 `hywu-air` 입력, **Public** 선택 후 Create
3. 새 저장소 화면에서 **uploading an existing file** 을 눌러 이 폴더 안의 파일을 모두 끌어다 놓고 Commit
4. 저장소 **Settings → Pages** 에서 Source 를 `Deploy from a branch`, Branch 를 `main` / `/(root)` 로 저장
5. 1~3분 뒤 `https://<아이디>.github.io/hywu-air/` 에 사이트가 열립니다
6. `_config.yml` 의 `url` 을 `https://<아이디>.github.io` 로 바꿔 주세요

> 저장소 이름을 `hywu-air` 가 아닌 다른 이름으로 만들었다면 `_config.yml` 의 `baseurl` 도 `"/저장소이름"` 으로 바꿔야 합니다.

## 2. 자주 하는 일

| 하고 싶은 일 | 고칠 파일 |
|---|---|
| 메인 화면 입학 일정 상자(원서접수, 면접, 발표 날짜) | `_data/admission.yml` |
| 소식(합격, 수상, 행사) 글 올리기 | `_posts/` 에 새 파일 추가 (아래 3번) |
| 자주 묻는 질문 고치기 | `_data/faq.yml` |
| 교수진, 연락처 고치기 | `_data/faculty.yml` |
| 메인 숫자 카드(만족도 1위 등) | `_data/stats.yml` |
| 진로 트랙, 과목 목록 | `_data/tracks.yml`, `_data/journey.yml` |
| 자격증 목록 | `_data/licenses.yml` |
| 동아리, 학과 활동 | `_data/clubs.yml`, `_data/activities.yml` |
| 실습실 사진 | `assets/img/` 에 사진 올리고 `_data/facilities.yml` 의 `photo:` 에 경로 적기 |
| 선배 인터뷰 한 줄 | `_data/alumni.yml` |
| 전화번호, 인스타그램 주소 | `_data/info.yml` |
| 사이트 색깔 (기본: 한양여대 CI 남색 #00467F) | `assets/css/style.css` 맨 위 `:root` |

GitHub 에서 파일을 열고 연필 아이콘(Edit)을 눌러 고친 뒤 **Commit changes** 를 누르면 1~2분 뒤 사이트에 반영됩니다.

## 3. 소식 글 올리는 법 (5분)

1. 사진이 있다면 먼저 `assets/img/posts/` 폴더에서 **Add file → Upload files** 로 올립니다
   - 파일 이름은 영어, 숫자로 (예: `2026-ka-pass.jpg`)
   - 사진은 가로 1600px 이하, 1MB 이하로 줄여서 올려 주세요
2. `_posts/` 폴더에서 **Add file → Create new file**
3. 파일 이름은 `날짜-영어제목.md` 형식 (예: `2026-11-20-jeju-air-visit.md`)
4. `_posts/_새글_양식.md.txt` 내용을 복사해 붙여넣고 제목, 날짜, 분류, 본문을 고칩니다
5. **Commit changes** 를 누르면 끝

분류는 네 가지입니다.

| category | category_id | 쓰는 곳 |
|---|---|---|
| 합격 | pass | '진로와 합격' 페이지에도 자동으로 모입니다 |
| 수상 | award | |
| 학과행사 | event | '학과생활' 페이지에도 자동으로 모입니다 |
| 입시 | admission | |

## 4. 꼭 지켜 주세요

- **학생 사진, 이름, 합격 회사는 본인 동의를 받은 뒤** 올립니다. 이 사이트는 누구나 볼 수 있는 공개 사이트입니다.
- 입시 일정, 전형 비율 같은 숫자는 그해 **모집요강 원문을 확인한 뒤** 바꿉니다. 사이트 아래쪽에도 "공식 공지는 학교 홈페이지 기준"이라고 적혀 있습니다.
- 학교 로고(교표)를 쓰려면 학교 홍보팀의 사용 기준을 먼저 확인하세요. 지금은 로고 대신 비행기 아이콘을 씁니다.
- `_posts/` 안의 예시 글 8개는 학과 공식 게시판의 실제 제목과 날짜로 만든 **틀**입니다. 본문 아래 "이 글은 예시입니다" 문구를 지우고 실제 내용과 사진으로 채워 주세요.

## 5. 지금 들어 있는 정보의 출처

- 학과 공식 홈페이지 (학과소개, 인재양성유형 및 직무, 교수소개, 동아리, 학과 활동 안내): https://www.hywoman.ac.kr/airlineservice/index.do
- 학교 공식 학과 홍보 페이지 (숫자 카드, 교과목, 교수진 전체 명단, 학과 SNS): https://www.hywoman.ac.kr/dept/airlineservice.html
- 2027학년도 수시(1, 2차) 모집요강 (정원, 전형, 일정, 면접 평가요소, 준비물)
- 한국항공뉴스 2021.12.15 학과 인터뷰 (1978 관광과, 2015 항공관광과, 2016 항공과 분리)

## 6. 폴더 구조

```
_config.yml        사이트 이름, 주소 설정
_data/             사이트에 나오는 정보 (여기를 가장 많이 고칩니다)
_posts/            소식 글
_layouts/ _includes/  화면 틀 (보통은 고칠 일 없음)
assets/css/style.css  디자인
assets/img/        사진, 아이콘
index.html         메인
about.html curriculum.html careers.html campus.html admission.html news/  각 페이지
```

## 디자인 메모

- 로고는 한양여자대학교 홈페이지 UI 소개 페이지에서 받은 공식 AI 파일을 SVG로 바꾼 것입니다 (`assets/img/hywu-logo.svg`, `hywu-mark.svg`). 학교 로고 사용 전 홍보팀 확인을 권합니다.
- 아이콘과 그림은 모두 직접 그린 SVG입니다. 아이콘은 `_includes/icon.html`, 그림은 `_includes/illust.html` 에 있습니다.

## 검색 노출(SEO) 체크리스트

- `_config.yml` 의 `url` 을 실제 주소로 바꾸기 (지금은 `https://takjakim.kr` (사이트 주소 https://takjakim.kr/hywu-air/))
- 배포 후 구글 서치콘솔, 네이버 서치어드바이저에 사이트 등록, 확인 코드를 `_config.yml` 에 넣기, `sitemap.xml` 제출 (네이버는 `feed.xml` 도 제출)
- 예시 글(`이 글은 예시입니다`)은 `noindex: true` 로 검색에서 빠져 있습니다. 실제 내용으로 바꾸면 그 두 줄을 지우세요.
- 새 페이지를 만들 때는 front matter 에 `description:` 한 줄(80~110자, '한양여대 항공과' 포함)을 꼭 넣으세요.
- 공유 이미지는 `assets/img/og-default.png` (1200x630). 글마다 `image:` 로 따로 지정할 수 있습니다.

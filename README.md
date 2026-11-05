# damagethundercat.github.io

개인 기록을 위한 최소 Jekyll 블로그입니다.

## 글 쓰기

### 관리자 페이지 (권장)

`/admin`에서 [Sveltia CMS](https://sveltiacms.app/)로 글을 쓰고 고칩니다. 저장하면 `main`에 바로 커밋되고 GitHub Pages가 다시 빌드합니다.

- 로그인: 저장소 `Contents: Read and write` 권한만 준 fine-grained 개인 액세스 토큰. 저장소 쓰기 권한이 없는 사람은 저장할 수 없습니다.
- 초안: "공개"를 끄면 `published: false`로 저장되어 사이트에 나오지 않습니다. 저장소가 공개라 GitHub에서는 보입니다.
- 이미지: `assets/images/`에 올라갑니다.
- 로컬: Chrome/Edge에서 `/admin`을 열고 "로컬 저장소로 작업"을 고르면 클론한 폴더의 파일을 직접 고칩니다 (커밋은 직접).

### 직접 쓰기

글은 `_posts/YYYY-MM-DD-title.md` 형식으로 만듭니다.

```markdown
---
layout: post
title: 글 제목
---

본문을 씁니다.
```

## 로컬 실행

GitHub Pages와 같은 의존성으로 실행합니다.

```sh
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle install
bundle exec jekyll serve
```

macOS 기본 Ruby 2.6에서는 최신 GitHub Pages gem이 설치되지 않습니다. Ruby 3.0 이상으로 실행하세요.

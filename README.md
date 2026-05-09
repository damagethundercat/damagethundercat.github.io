# damagethundercat.github.io

워크숍에서 함께 쓰는 공동 블로그입니다.

글은 Pull Request로 받고, 운영자가 내용을 확인한 뒤 `main`에 병합하면 GitHub Pages에 반영됩니다.

## 글 쓰기

글 파일은 `_posts/YYYY-MM-DD-slug.md` 형식으로 만듭니다.

```markdown
---
layout: post
title: 글 제목
author: 작성자 이름 또는 닉네임
author_url: https://작성자-링크
---

본문을 씁니다.
```

- `layout`은 항상 `post`로 둡니다.
- `title`, `author`, `author_url`은 필수입니다.
- `author_url`은 글 하단의 `저와 이야기를 이어가기 ...` 링크로 사용됩니다.

## 이미지

이미지는 글별 폴더에 넣습니다.

```text
assets/images/posts/YYYY-MM-DD-slug/파일명
```

Markdown에서는 절대 경로로 참조합니다.

```markdown
![이미지 설명](/assets/images/posts/YYYY-MM-DD-slug/image.png)
```

## Pull Request

1. 새 브랜치를 만듭니다.
2. `_posts`에 글을 추가합니다.
3. 이미지가 있으면 `assets/images/posts/YYYY-MM-DD-slug/`에 넣습니다.
4. Pull Request를 열고 템플릿의 체크리스트를 채웁니다.

PR에서는 Jekyll 빌드가 자동으로 실행됩니다. 빌드가 실패하면 병합하지 않습니다.

## 로컬 실행

GitHub Pages와 같은 의존성으로 실행합니다.

```sh
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle install
bundle exec jekyll serve
```

macOS 기본 Ruby 2.6에서는 최신 GitHub Pages gem이 설치되지 않습니다. Ruby 3.0 이상으로 실행하세요.

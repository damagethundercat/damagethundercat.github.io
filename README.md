# damagethundercat.github.io

개인 기록을 위한 최소 Jekyll 블로그입니다.

## 글 쓰기

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

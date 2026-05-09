# 기여 가이드

이 저장소는 워크숍 공동 블로그를 Pull Request로 운영합니다.

## 글 파일

- 글은 `_posts/YYYY-MM-DD-slug.md`에 추가합니다.
- 파일명 날짜는 공개하려는 날짜를 기준으로 합니다.
- `slug`는 영문 소문자, 숫자, 하이픈을 사용합니다.

필수 front matter:

```yaml
---
layout: post
title: 글 제목
author: 작성자 이름 또는 닉네임
author_url: https://작성자-링크
---
```

`author_url`은 글 하단의 `저와 이야기를 이어가기 ...` 링크로 사용됩니다. 공개 가능한 링크만 넣어 주세요.

## 이미지

이미지는 글 파일명과 같은 이름의 폴더에 넣습니다.

```text
assets/images/posts/YYYY-MM-DD-slug/파일명
```

본문에서는 이렇게 참조합니다.

```markdown
![이미지 설명](/assets/images/posts/YYYY-MM-DD-slug/image.png)
```

이미지는 가능한 한 필요한 크기로 줄여서 올려 주세요.

## Pull Request 규칙

- 하나의 PR에는 하나의 글만 넣는 것을 기본으로 합니다.
- 글과 직접 관련 없는 파일은 수정하지 않습니다.
- PR 설명의 체크리스트를 채웁니다.
- Jekyll build check가 통과해야 병합할 수 있습니다.

운영자는 글의 공개 여부, 제목, 이미지 경로, 링크 안전성, 빌드 결과를 확인한 뒤 병합합니다.

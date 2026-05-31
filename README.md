# 일본어 가나·단어 연습장
https://suji0311.github.io/kanji_voca_app/

브라우저에서 바로 열어 사용할 수 있는 일본어 가나와 단어 연습 도구입니다. 별도 서버나 빌드 과정 없이 `index.html` 또는 `voca.html`을 실행하면 됩니다.

## 실행 방법

1. `index.html`을 열면 가나 획순 연습을 사용할 수 있습니다.
2. `voca.html`을 열면 단어장과 단어 시험지 기능을 사용할 수 있습니다.

## GitHub Pages 업로드

현재 HTML은 GitHub 저장소 루트에 있는 아래 파일을 읽습니다.

```text
index.html
voca.html
kanji.css
kanji.js
voca.js
```

GitHub 웹 업로드를 사용할 때는 위 5개 파일을 모두 같은 위치에 올리면 됩니다.

## 주요 기능

- 히라가나·가타카나 목록 보기
- 가나 읽기와 한국어 발음 확인
- 4칸 따라쓰기
- 획순 미리보기와 애니메이션
- 즐겨찾기와 완료 표시
- 가나 시험지 생성
- 단어장, 단어 따라쓰기, 단어 시험지 생성

즐겨찾기와 완료 상태는 브라우저 `localStorage`에 저장됩니다.

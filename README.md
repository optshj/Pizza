# 아래의 글을 읽어주세요!
1. 사이트 실행하기
    * 배포된 사이트 접속하기
    * 로컬에서 실행하기
2. Branch에 대해
3. 아이폰 14프로 규격
4. Commit Convention
5. Prettier(코드 정리기능) 사용하기

## 사이트 실행하기
### 배포된 사이트 접속하기
[사이트 바로가기 (북마크하시면 편해요)](https://ddeoknip.github.io/Pizza/)

### 로컬에서 실행하기
터미널에서 아래 명령어를 입력하시면 localhost에서 실행할 수 있어요.

실행전에 패키지를 설치 안하셨으면-> npm i
```
npm start
```

## Branch에 대해
브런치는 아래의 5종류입니다.
* `main` : main 브런치
* `gh-pages` : 배포 페이지 브런치
* `ahn` : 혜림 브런치
* `kim` : 정현 브런치
* `lee` : 성빈 브런치

레포지토리로 fork를 해서 가져간 뒤 

각자 브런치에서 작업을 한 뒤 `main`으로 `pull request` 를 보내세요.

`main` 에 적용된 내용은 자동으로 `gh-pages`  를 통해 배포됩니다.

## 아이폰 14프로 규격
 393x852pt
 
## Commit Convention
커밋 메시지를 작성하실 때 자세히 작성해준시다면 효율적인 작업에 도움이 됩니다.

```
커밋 컨벤션 예시

git commit -m "[Feat] 카카오 api 추가"
git commit -m "[Docs] /src/asset/charater.svg 추가"
```

* `Feat` : 새로운 기능 추가
* `Fix` : 버그 수정
* `Docs` : 문서 수정
* `Style` : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
* `Refactor` : 코드 리펙토링
* `etc` : 기타

## Prettier 사용하기
Prettier는 코드를 자동으로 깔끔하게 보이게 만들어주는 기능입니다.

아래의 명령어를 사용하면 사용하실 수 있습니다.
```
npm run format
```

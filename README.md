# Tailwind CSS Koean Documentation

## branches
### master
배포되어있는 `https://ko-tailwind-css-com.vercel.app` 도메인과 연결되어 있는 브랜치

### devel
tailwind origin repository의 master브랜치와 연결되어 있는 브랜치

## 번역하기
1. 레포지토리 클론
2. remote repository 등록
3. master branch로 이동
4. 새로운 브랜치 생성
5. master branch로 pr

```sh
git clone https://github.com/geewoo94/ko.tailwindcss.com.git
git remote add translate https://github.com/geewoo94/ko.tailwindcss.com.git
git checkout master
git checkout -b 'new/branch'
#... 작업 후
git push translate 'new/branch'
# github에서 pr 올리기
```

## 최근 tailwind 문서 병합하기
```sh
git checkout devel
git pull origin/master
# 충돌 해결 후
git push translate devel
# github에서 pr 올리기
```

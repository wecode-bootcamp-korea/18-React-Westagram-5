# Westagram 5팀
## 프로젝트 내용
* 인스타그램 clone
* 프로젝트 기간
* 2021.03.02 ~ 2021.03.12
## 팀원 별 작업 현황
### 공통
* 인스타그램 로그인, 메인 페이지 레이아웃
* ID, PW에 조건부 렌더링
* 댓글 내용 입력 후 Enter press, 혹은 게시 버튼 클릭 시 댓글 추가 기능 구현
### 송나은
  메인 화면 컴포넌트화 구현 완료
### 김상연
  리뷰내용 수정중
### 김우영
  리뷰내용 수정중
### 이근화
  리뷰내용 수정중
## 기술스택
* HTML, CSS
* JavaScript(ES6+)
* React
* SCSS
## 팀원 블로그
김우영 : https://velog.io/@whoyoung90
송나은 :
이근화 :
김상연 : 
## 작업 순서
pm은 Master branch에서 구축!

구축이 완료되면

git clone https://github.com/wecode-bootcamp-korea/18-React-Westagram-5.git 깃을 클론받는다

cd 18-React-Westagram-5 파일 진입

npm install 진입 후 설치

git branch feature/wooyoungkim 브랜치 생성

git branch 깃 현재 위치 확인

git checkout feature/wooyoungkim 브랜치로 이동

<Local-Remote가 달라서 pull받으려면>

(local)branch상태에서 (remote)main내용받기
git checkout feature/wooyoungkim(local)-> git pull origin main(remote)

(local)branch상태에서 (remote)branch내용받기
git checkout feature/wooyoungkim(local) -> git pull origin wooyoungkim(remote)

오늘 상황은 내가 main이 아닌 branch로 이동해서 PM이 수정한 main내용을 받아오는것(pull)

오늘 같은 경우 초기화만 해놔서
git pull origin feature/wooyoungkim(remote)을 해도
내용이 없으므로 오류 메시지가 뜬다 > fatal: couldn't find remote ref wooyoungkim



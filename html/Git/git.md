# 기본 사용법(github)
## 기본셋팅
먼저 GitHub에 가입하기 위해 <a href="https://github.com">github.com</a> 해당 사이트에 방문해 회원 가입을 해준다.(이때 회원 가입 시 입력하는 칸에 이메일이 있는데 기억해두기, 또 이메일은 나중에 다시 setting에 들어가면 바꿀 수 있다.)
이메일 인증까지 끝내면
![git1](screenshot/git1.PNG)
해당 페이지가 나오는데, 왼쪽부터 저장소 생성, 오거니제이션 생성, GitHub 학습 이다.

그 다음으로 Git이라는 인스톨러를 사용해야 하기 때문에 각 컴퓨터에 맞는 os를 설치해 줘야한다. 

window

https://git-scm.com/ Git 공식 웹사이트에 접속해 Git을 다운로드한다.

다운이 끝나고 환경설정을 위해 Git Bash를 실행시켜 준다.
![git2](screenshot/git2.png)
실행을 하면 나오는 터미널에 
`git config --global user.name "사용자 이름"`
`git config --global user.email github가입 시 사용한 이메일주소`
해당 코드를 입력해주고, `git config --list`를 입력해 'user.name','user.email'를 확인해봐서 방금 입력한 게 입력되어있으면 성공이다.

## Github에 파일 업로드하기


# 오류및 해결방안
git을 사용해  gihub에 파일을 업로드할 때
`git commit -m "이름" `해당 코드에서 `-m`을 빼먹음으로써 
.git 파일 안에 있는 index.lock 파일에 오류가 발생했음
그럼으로 인해 아래와 같은 사진이 출력됨
![error1](screenshot/error1.PNG)
해당 오류가 나오면 `commit`및 `push`명령어가 실행되지 X


* [해결 방법]
1. 문제가 생긴 Git 저장소 폴더 상단으로 이동

2. 해당 폴더를 루트로 하여 Terminal 및 컨맨트 툴을 이용해 `cd "git 저장소 폴더 경로"` 이 명령어를 통해 해당 폴더로 이동 후
(.git 파일이 있는 곳에서 터미널을 여는것이 더 편함)

3. 문제가 되는 index.lock 파일을 `rm -f ./.git/index.lock`를 통해 삭제

4. 다시  `commit`및 `push`명령어가 실행
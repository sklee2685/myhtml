var score = 0;
var hscore = 0;
var num = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var backup = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var backupscore = 0;



// 맨 처음 로드
window.onload = function() {
    var undo = document.getElementById("undo");
    undo.onclick = revert;
    var restart = document.getElementById("restart");
    restart.onclick = newGame;
    
    // 실행취소
    function revert() {
        num = backup;
        score = backupscore;
        update(false)
        console.log('yes');
    }
    
    newGame()
}



// 키입력
window.addEventListener("keydown", e => {
    // 37:left, 38:up, 39:right, 40:down
    moveCalc(e.keyCode);
});



// 새로 시작
function newGame() {
    score = 0;
    backupscore = 0;
    
    num = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    newNum()
    backup = num.slice();
    
    update()
}



// 숫자 옮기기
function moveCalc(k) {
    let checksum = 0;
    
    function move(n) {
        // undo기능을 위해 백업
        let backuptemp = num.slice(); // 깊은복사
        backupscore = score;
        
        
        // 2차원 배열을 회전
        function rotate() {
            let tempArray = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
            for (let x=0; x<4; x++) { for (let y=0; y<4; y++) {
                tempArray[y][3-x] = num[x][y];
            }}
            num = tempArray;
        }
        for (let i=0; i<n; i++) { rotate(); }
        
        
        // 숫자 계산
        for (let x=0; x<4; x++) {
            let temp1 = []; // 나열한 숫자
            let temp2 = []; // 계산한 숫자
            
            // 숫자를 나열
            for (let y=0; y<4; y++) { if (num[x][y] != 0) temp1.push(num[x][y]); }
            
            // 숫자 계산
            for (let i=0; i<temp1.length; i++) {
                if (i != temp1.length-1 && temp1[i] == temp1[i+1]) {
                    score += temp1[i];
                    temp2.push(temp1[i]*2);
                    i++;
                } else {
                    temp2.push(temp1[i]);
                }
            }
            
            // 빈자리에 0 넣기
            while (temp2.length < 4) { temp2.push(0); }
            
            // 변경사항이 있는지 확인
            if (JSON.stringify(temp2) != JSON.stringify(num[x])) { checksum++; }
            
            // 계산한 숫자 적용
            num[x] = temp2;
        }
        
        
        // 변경사항이 없었다면 백업을 갱신하지 않음
        if (checksum > 0) { backup = backuptemp; }
        
        
        // 회전 원상복구
        for (let i=0; i<4-n; i++) { rotate(); }
    }
    
    switch (k) {
        case 37:
            move(3);
            break;
            
        case 38:
            move(0);
            break;
            
        case 39:
            move(1);
            break;
            
        case 40:
            move(2);
            break;
        
        default:
            break;
    }
    
    // 변경사항이 있는지 확인
    if (40 >= k && k >= 37 && checksum != 0) {
        newNum()
        update()
    }
}



// 화면 업데이트
function update() {
    hscore = hscore < score ? score : hscore; // 최고기록 갱신
    document.getElementById("highscore").innerHTML = "High score : " + hscore;
    document.getElementById("score").innerHTML = "Score　 　    : " + score;
    
    for(let y=0; y<4; y++) { for(let x=0; x<4; x++) {
        let box = document.getElementById(''+x+y);
        box.innerHTML = ( num[x][y] == 0 ? '' : num[x][y] );
        box.style.fontSize = (num[x][y]+'').length > 2 ? 32-(((num[x][y]+'').length)-1)*2.5 + "px" : '32px'; // 길이에 따라 폰트 크기 조정
    }}
}



// 새 숫자 추가
function newNum() {
    let temp = [];
    while (temp.length < 2) {
        let tempx = Math.floor(Math.random()*4);
        let tempy = Math.floor(Math.random()*4);
        if (num[tempx][tempy] == 0) {
            temp.push([tempx,tempy]);
        }
    }
    
    if (temp[0][0]+temp[0][1]+'' == temp[1][0]+temp[1][1]+'') {
        num[temp[0][0]][temp[0][1]] = 4;
    } else {
        num[temp[0][0]][temp[0][1]] = 2;
        num[temp[1][0]][temp[1][1]] = 2;
    }
}
//로그인 버튼이 눌렸을때
document.querySelector("#login_button").addEventListener("click", () => {
    var id=document.querySelector("#l_id").value;//#l_id로 부터 값을 받아와 id에 저장
    var password = "1234";//공통 비밀번호
    
    switch (id){ //id 값을 받아와 switch문에서 아이디 체크
        case 'ho':
            if(id == document.querySelector("#l_id").value) {
                if(password == document.querySelector("#l_pw").value) {//비밀번호 확인
                    alert("로그인 되었습니다.");
                    location.href = "login_ho.html";
                }
                else {
                    alert("비밀번호가 맞지 않습니다.");
                }
            }
            break;
            
        case 'jin':
            if(id == document.querySelector("#l_id").value) {
                if(password == document.querySelector("#l_pw").value) {
                    alert("로그인 되었습니다.");
                    location.href = "./2048/2048.html";
                }
                else {
                    alert("비밀번호가 맞지 않습니다.");
                }
            }
            break;
            
        case 'ji':
            if(id == document.querySelector("#l_id").value) {
                if(password == document.querySelector("#l_pw").value) {
                    alert("로그인 되었습니다.");
                    location.href = "login_ji.html";
                }
                else {
                    alert("비밀번호가 맞지 않습니다.");
                }
            }
            break;
            
        case 'hyun':
            if(id == document.querySelector("#l_id").value) {
                if(password == document.querySelector("#l_pw").value) {
                    alert("로그인 되었습니다.");
                    location.href = "sehyun.html";
                }
                else {
                    alert("비밀번호가 맞지 않습니다.");
                }
            }
            break;
        default :
            alert("아이디 혹은 비밀번호가 틀렸습니다.")
    }
});

//회원가입 버튼이 눌렸을때
document.querySelector('#register_button').addEventListener("click",()=>{
    if (confirm("회원가입 페이지로 이동하겠습니까?") == true){
        location. href="register.html";//confirm으로 확인(true)을 누르면 페이지가 넘어감
    }else{
        return false;
    }
});
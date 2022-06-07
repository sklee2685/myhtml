document.querySelector("#r_button").addEventListener("click", () => {
    var name=document.querySelector("#name").value;//register.html에서 id가 name인 값을 변수 name에 저장 
    alert(name+"님 가입이 완료 되었습니다.");
    location.href="login.html"
});
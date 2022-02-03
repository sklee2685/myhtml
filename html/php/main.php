<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <style>
    h1{
      border-bottom: 1px solid gray;
    }

    nav {
        width: 160px;
        float: left;
    }

    nav ol {
        list-style: none;
    }
    article{
        border-left: 1px solid gray ;
        width: 414px;
        padding-left: 20px;
        float: left;
    }
    article h2{
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: -250px;
}
    table{
        font-size: 10px;
    }
    img{
        max-width: 200px;
        max-height: 200px;
    }
    #control{
      float:right;
    }

    body.white{
      background-color: white;
      color:black;
    }
    
    body.black{
      background-color: black;
      color:white;
    }
    /*이렇게 css를 표시할수도 있지만, 9.html이나 10.html처럼
    link를 사용해 더 간단히 그리고 수정도 더 편하게 만들수있다.*/
    </style>
</head>

<body id="target">
    <div id="control">
        <input type="button" value="white" id="white_btn" />
        <input type="button" value="black" id="black_btn" />
        <!--기존의 버튼(main.html에 있는버튼)을 다른방법으로 실행-->
    </div>
    <a href="main.php">맨처음 화면</a>
    <center>
        <h1>안드로이드 스튜디오를 사용한 코딩</h1>
    </center>
    <nav>
        <ol>
            <<목차>>
                <li><a href="main_1.php" style="font-size:10px;">안드로이드스튜디오</a></li>
        </ol>
    </nav>

    <article>
        <div>
            <h2>대학교에서 한 코딩을 정리해둔 홈페이지 입니다.</h2>
        </div>
    </article>

    <script src="script_btn.js"></script>
</body>

</html>
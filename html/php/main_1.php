<!DOCTYPE html>
<html>

<head>
  <title>모바일 프로그래밍 코딩</title>
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
    <input type="button" value="white" onclick="document.getElementById('target').className='white'" />
    <input type="button" value="black" onclick="document.getElementById('target').className='black'" />
    <!--white,black 버튼을 만들어서 이것들을 누르면 화면전체를 블랙 테마와 원래대로 되는 것을 구현-->
  </div>
  

  <a href="main.html">맨처음 화면</a>
  <center>
    <h1>안드로이드 스튜디오를 사용한 코딩</h1>
  </center>
  <nav>
    <ol>
      <<목차>>
        <?php
        echo file_get_contents("list.txt");
        ?>
    </ol>
  </nav>
  <article>
    <div>
      <h2>각 목차를 클릭시 해당 주차의 코딩과 결과 사진이 나옵니다. 
        (코딩 순서는 main->actibity.xml->커스텀xml 순서입니다.)</h2>
        <?php
        if(empty($_GET['id'])==false){
          echo file_get_contents($_GET['id'].".txt");
        }
        ?>
    </div>
  </article>

</body>

</html>
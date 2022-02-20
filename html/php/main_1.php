<!DOCTYPE html>
<html>

<head>
  <title>모바일 프로그래밍 코딩</title>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body id="target">
  
  <div id="control">
    <input type="button" value="white" onclick="document.getElementById('target').className='white'" />
    <input type="button" value="black" onclick="document.getElementById('target').className='black'" />
    <!--white,black 버튼을 만들어서 이것들을 누르면 화면전체를 블랙 테마와 원래대로 되는 것을 구현-->
  </div>
  

  <a href="main.php">맨처음 화면</a>
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
        <?php
        if(empty($_GET['id'])==TRUE){
          echo "<h2>각 목차를 클릭시 해당 주차의 코딩과 결과 사진이 나옵니다. 
          (코딩 순서는 main->actibity.xml->커스텀xml 순서입니다.)<h2>";
          echo file_get_contents("hwp.txt");
        }elseif(empty($_GET['id'])==FALSE){
          echo file_get_contents($_GET['id'].".txt");
        }
        ?>
    </div>
  </article>

</body>

</html>
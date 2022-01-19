<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    
    <body>
        <?php
        $password=$_GET["password"];
        if($password=="1234"){
            echo "로그인 되었습니다.";
        }else{
            echo "로그인에 실패 했습니다.";
        }
        ?>
    </body>
</html>
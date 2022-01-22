<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    
    <body>
        <h1>Java Script</h1>
        <Script>
            function a(input){
                document.write(input+input);
                //return input+input;
            }
            a(3);
            //document.write(a(3));
            //주석처리한 코드로 해도 동일한 값이 출력됨
        </Script>

        <h1>PHP</h1>
        <?php
        function b($input){
            echo $input;
            //return $input;
        }
        b(5);
        //echo b(5);
        ?>
    </body>
</html>
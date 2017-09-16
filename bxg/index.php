<?php

//   header('content-type:text/html;charset=utf8')
//   include ('./header.html');
//   echo '<div>主页内容</div>';
//   include ('./footer.html');
//    通过url区分用户访问

     /*php中的全局变量*/
//     var_dump($_SERVER);
//      echo $path;
        $dir='main';
        $filename='index';

        if(array_key_exists('PATH_INFO',$_SERVER)){
              $path = $_SERVER['PATH_INFO'];
//            字符串分割，和js中split方法很像
              $str = substr($path,1);
              $ret = explode('/',$str);
              if(count($ret) == 2){
                 $dir=$ret['0'];
                 $filename=$ret['1'];
              }
              else{
                 $filename = 'login';
            }
          };

       include('./views/'.$dir.'/'.$filename.'.html');
?>
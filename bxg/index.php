<?php

//   header('content-type:text/html;charset=utf8')
//   include ('./header.html');
//   echo '<div>��ҳ����</div>';
//   include ('./footer.html');
//    ͨ��url�����û�����

     /*php�е�ȫ�ֱ���*/
//     var_dump($_SERVER);
//      echo $path;
        $dir='main';
        $filename='index';

        if(array_key_exists('PATH_INFO',$_SERVER)){
              $path = $_SERVER['PATH_INFO'];
//            �ַ����ָ��js��split��������
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
/**
 * Created by lenovo on 2017/9/22.
 */
//��ѯ�ַ���
define(['jquery'],function(){
     return {
         qs:function(key){
             var param=location.search.substr(1);
             var result=null;
             if(param){
                 //�� & �ָ�ɶ���  ������ʾ&
                 var ps = param.split('&');
                 $.each(ps,function(index,item){
                     var kv=item.split('=');
                     if(kv[0]=key){
                         result=kv[1];
                         return false;
                     }
                 })
             }
             return result;
         }
     }

});

/**
 * Created by lenovo on 2017/9/22.
 */
//查询字符串
define(['jquery'],function(){
     return {
         qs:function(key){
             var param=location.search.substr(1);
             var result=null;
             if(param){
                 //从 & 分割成对象  ，不显示&
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

/**
 * Created by lenovo on 2017/9/20.
 */
define(['jquery','template'],function($,template){
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
             var html=template('teacherTal',{list:data.result})
             $('#teacherInfo').html(html)
        }
    })
});

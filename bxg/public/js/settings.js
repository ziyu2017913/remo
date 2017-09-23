/**
 * Created by lenovo on 2017/9/23.
 */
define(['jquery','template','datePicker','language'],function($,template){
    $.ajax({
        type:'get',
        url:'/api/teacher/profile',
        dataType:'json',
        success:function(data){
            var html=template('settingsTpl',data.result);
            $('#settingsInfo').html(html)
        }
    })
})

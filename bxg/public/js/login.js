/**
 * Created by lenovo on 2017/9/20.
 */
define(['jquery','cookie'],function($){   /*cookie 是JQ插件所以不用传参*/
    $('#loginBtn').click(function(){

        $.ajax({
            type:'post',
            url:'/api/login',
            data:$('#loginFrom').serialize(),
            dataType:'json',
            success:function(data){
                if(data.code == 200){
                    //                        把用户的登陆信息存在cookie中，方便跨页面共享数据
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    location.href='/main/index'
                }
            }
        });

        return false ; /*组织页面的默认跳转行为*/
    })
})

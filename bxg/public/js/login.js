/**
 * Created by lenovo on 2017/9/20.
 */
define(['jquery','cookie'],function($){   /*cookie ��JQ������Բ��ô���*/
    $('#loginBtn').click(function(){

        $.ajax({
            type:'post',
            url:'/api/login',
            data:$('#loginFrom').serialize(),
            dataType:'json',
            success:function(data){
                if(data.code == 200){
                    //                        ���û��ĵ�½��Ϣ����cookie�У������ҳ�湲������
                    $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
                    location.href='/main/index'
                }
            }
        });

        return false ; /*��֯ҳ���Ĭ����ת��Ϊ*/
    })
})

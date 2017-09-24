/**
 * Created by lenovo on 2017/9/23.
 */
define(['jquery','template','datePicker','language','upLoadIfy'],function($,template){
    $.ajax({
        type:'get',
        url:'/api/teacher/profile',
        dataType:'json',
        success:function(data){
            var html=template('settingsTpl',data.result);
            $('#settingsInfo').html(html);
            //����ͷ���ϴ�
            $('#upfile').uploadify({
                width:120,
                height:120,
                buttonText:'',
                itemTemplate:'<span><span>',
                swf:'/public/assets/uploadify/uploadify.swf',
                uploader:'/api/uploader/avatar',
                fileObjName:'tc_avatar',
                onUploadSuccess:function(a,b){
                   var obj=JSON.parse(b);
                    $('.preview img').attr('src',obj.result.path)
                }
            })
        }
    })
})

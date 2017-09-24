/**
 * Created by lenovo on 2017/9/23.
 */
define(['jquery','template','ckeditor','datePicker','language','upLoadIfy','region'],function($,template,CKEDITOR){
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
            });
            //����ʡ������������
            $('#pcd').region({
                url:'/public/assets/jquery-region/region.json'
            });
            // ���ı�
            CKEDITOR.replace('editor',{
                toolbarGroups : [
                    { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
                    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
                    { name: 'links', groups: [ 'links' ] }
                ]
            })
        }
    })
})

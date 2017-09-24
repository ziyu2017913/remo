/**
 * Created by lenovo on 2017/9/23.
 */
define(['jquery','template','ckeditor','datePicker','language','upLoadIfy','region','validate','form'],function($,template,CKEDITOR){
    $.ajax({
        type:'get',
        url:'/api/teacher/profile',
        dataType:'json',
        success:function(data){
            var html=template('settingsTpl',data.result);
            $('#settingsInfo').html(html);
            //处理头像上传
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
            //处理省市县三级联动
            $('#pcd').region({
                url:'/public/assets/jquery-region/region.json'
            });
            // 富文本
            CKEDITOR.replace('editor',{
                toolbarGroups : [
                    { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
                    { name: 'others', groups: [ 'others' ] },
                    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
                ]
            })
        //    表单提交
            $('#settingForm').validate({
                sendForm:false,
                valid:function(){
                    //获取家乡信息
                    var p=$('#p').find('option:selected').text();
                    var c=$('#c').find('option:selected').text();
                    var d=$('#d').find('option:selected').text();
                    var hometown =p+ '|'+c+"|"+d;
                    //同步富文本内容
                     for(var instance in CKEDITOR.instances){
                         CKEDITOR.instances[instance].updateElement();
                     };
                    //提交表单
                    $(this).ajaxSubmit({
                        type:'post',
                        url:'/api/teacher/modify',
                        dataType:'json',
                        data:{tc_hometown:hometown},
                        success:function(data){
                            if(data.code==200){
                                location.reload();
                            }
                        }

                    })
                }
            })
        }
    })
})

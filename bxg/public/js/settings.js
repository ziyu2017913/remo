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
                    { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
                    { name: 'others', groups: [ 'others' ] },
                    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
                ]
            })
        //    ���ύ
            $('#settingForm').validate({
                sendForm:false,
                valid:function(){
                    //��ȡ������Ϣ
                    var p=$('#p').find('option:selected').text();
                    var c=$('#c').find('option:selected').text();
                    var d=$('#d').find('option:selected').text();
                    var hometown =p+ '|'+c+"|"+d;
                    //ͬ�����ı�����
                     for(var instance in CKEDITOR.instances){
                         CKEDITOR.instances[instance].updateElement();
                     };
                    //�ύ��
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

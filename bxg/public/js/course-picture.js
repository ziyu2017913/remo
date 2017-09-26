/**
 * Created by lenovo on 2017/9/26.
 */
define(['jquery','template','util','upLoadIfy'],function($,template,util){
    //高亮显示页面
    util.setMenu('/course/courseAdd');
   // 获取id
    var csId=util.qs("cs_id")
   // 获取课程封面数据
    $.ajax({
        type:'get',
        url:'/api/course/picture',
        data:{cs_id:csId},
        dataType:'json',
        success:function(data){
            var html=template('pictureTpl',data.result)
            $('#pictureInfo').html(html)
        //    处理封面上传
            $('#myfile').uploadify({
                width:80,
                height:'auto',
                fileObjName:'cs_cover_original', //传参数
                buttonText:'选择图片',
                buttonClass:'btn btn-success btn-sm',
                itemTemplate:'<span></span>',
                swf:'/public/assets/uploadify/uploadify.swf',
                uploader:'/api/uploader/cover',
                formData:{cs_id:csId},
                onUploadSuccess:function(a,b){
                    console.log(b) ; //是字符串需要转换
                    var obj=JSON.parse(b.trim());//$.trim() JQ方法去掉字符串开始和末尾的空格
                    $('.preview img').attr('src',obj.result.path)
                    console.log(obj)
                }
            })
        }
    })
});
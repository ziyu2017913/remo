/**
 * Created by lenovo on 2017/9/26.
 */
define(['jquery','template','util','upLoadIfy','jcrop','form'],function($,template,util){
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
                }
            });
            //处理裁切封面
            $('#cropBtn').click(function(){
               var flag=$(this).attr('data-flag');
                if(flag){
                    //提交页面 跳转到下一步
                     $('#cropForm').ajaxSubmit({
                         type:'post',
                         url:'/api/course/update/picture',
                         data:{cs_id:csId},
                         dataType:'json',
                         success:function(data){
                             if(data.code==200){
                                 location.href='/course/lesson?cs_id='+data.result.cs_id
                             }
                         }
                     })
                }else{
                    //第一次点击
                    $(this).text('保存图片').attr('data-flag',true);
                    //实现裁切功能
                    cropImage();
                }
            });
            //选中图片
            var img=$('.preview img').eq(0);
            //封装独立的裁切功能
            function cropImage(){
                img.Jcrop({
                    //setSelect: [100, 100, 300, 100],  //创建选框，选中区域的x轴，y轴，宽度，高度
                    aspectRatio: 2                   // 选框宽高比。说明：width/height=2/1
                },function(){
                    var width=this.ui.stage.width;  //获取图片的宽度
                    var height=this.ui.stage.height;  //获取图片的高度
                    //计算选取的参数  高度是宽度的一半
                    var x= 0;
                    var y=(height-width/2)/2;
                    var w=width;
                    var h=width/2;
                    var aInput= $('#cropForm').find('input');
                    aInput.eq(0).val(x);
                    aInput.eq(1).val(y);
                    aInput.eq(2).val(w);
                    aInput.eq(3).val(h);
                    this.newSelection();   //动态生成一个选区
                    this.setSelect([x,y,w,h] ) ; //动态生成选框
                    this.initComponent('Thumbnailer',{
                         width:240,
                         height:120,
                         mythumb:'.thumb'
                        });
                    $('.jcrop-thumb').css({
                        position:'absolute',
                        left: 0,
                        top:0
                    });
                    img.parent().on('cropstart cropmove cropend',function(a,b,c){   //获取参数的方法
                        //console.log(c) ;  ////后台获取选取的相关参数
                        var aInput= $('#cropForm').find('input');
                        aInput.eq(0).val(c.x);
                        aInput.eq(1).val(c.y);
                        aInput.eq(2).val(c.w);
                        aInput.eq(3).val(c.h);
                    })
                } );

            }
        }
    })
});
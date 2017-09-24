/**
 * Created by lenovo on 2017/9/22.
 */
define(['jquery','template','util','datePicker','language','validate','form'],function($,template,util){
      var tcId=util.qs('tc_id');
    if(tcId){
      //    编辑
          $.ajax({
              type:'get',
              url:'/api/teacher/edit',
              data:{tc_id:tcId},
              dataType:'json',
              success:function(data){
                  data.result.operate='编辑讲师';
                  var html=template('teacherTp',data.result);
                  $('#teacherInfo').html(html);
                 // submitForm('/api/teacher/update');
              }
          });
      }else{
          //添加
        var html=template('teacherTp',{operate:'添加讲师'});
        $('#teacherInfo').html(html);
        //处理表单提交
        //submitForm('/api/teacher/add');
      }
        // 采用表单验证和提交插件提交插件
        //function submitForm(url){
        //    $('#teacherForm').validate({
        //        sendForm:false,  //去掉默认的
        //        valid:function(){
        //           $(this).ajaxSubmit({
        //               type:'post',
        //               url:url,
        //               dataType:'json',
        //               success:function(data){
        //               if(data.code==200){
        //               location.href='/teacher/list';
        //                }
        //               }
        //           })
        //        },
        //        description:{
        //             tcName:{
        //                 required:'用户名不能为空'
        //             },
        //             tcPass:{
        //                 required:'密码不能为空',
        //                 pattern:'密码必须为六位数'
        //             },
        //             tcJoinDate:{
        //                 required:'日期不能为空'
        //             }
        //        }
        //
        //    })
        //}
       //实现表单提交
      //function  submitForm(url){
      //      $('#teacherBtn').click(function(){
      //          $.ajax({
      //              type:'post',
      //              url:url,
      //              data:$('#teacherForm').serialize(),
      //              dataType:'json',
      //              success:function(data){
      //                  if(data.code==200){
      //                      location.href='/teacher/list';
      //                  }
      //              }
      //          })
      //      })
      //}

});

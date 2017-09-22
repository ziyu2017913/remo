/**
 * Created by lenovo on 2017/9/20.
 */
define(['jquery','template','bootstrap'],function($,template){
    $.ajax({
        type:'get',
        url:'/api/teacher',
        dataType:'json',
        success:function(data){
             var html=template('teacherTal',{list:data.result})
             $('#teacherInfo').html(html);
            //登陆注销功能
            $('.eod').click(function(){
                var that=$(this);
                  //获取到父元素
                  var td=$(this).parent();
                  // $(this).closest('td')  找到离他最近的父元素
                  var tcId=td.attr('data-tcId');
                  var status=td.attr('data-status');
                $.ajax({
                     type:'post',
                     url:'/api/teacher/handle',
                     dataType:'json',
                     data:{tc_id:tcId,tc_status:status},
                     success:function(data){
                         console.log(data);
                         if(data.code == 200){
                             td.attr('data-status',data.result.tc_status);
                             if(data.result.tc_status == 0){
                                 $(that).text('注销')
                             }else{
                                 $(that).text('开启')
                             }
                         }
                     }
                })
            })

        //     查看讲师
          $('.preview').click(function(){
              var td=$(this).parent();
              // $(this).closest('td')  找到离他最近的父元素
              var tcId=td.attr('data-tcId');
              $.ajax({
                  type:'get',
                  url:'/api/teacher/view',
                  data:{tc_id:tcId},
                  dataType:'json',
                  success:function(data){
                      var html=template('teacherView',data.result);
                      $('#modalInfo').html(html);
                      $('#teacherModal').modal();
                  }
              })
          })
        }
    })
});

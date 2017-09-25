/**
 * Created by lenovo on 2017/9/25.
 */
define(['jquery','util','template'],function($,util,template){
    util.setMenu(location.pathname)
    $.ajax({
      type:'get',
      url:'/api/course',
      dataType:'json',
      success:function(data){
      //    ‰÷»æ“≥√Ê
          console.log(data);
          var html=template('courseTpl',{list:data.result});
          $('#courseInfo').html(html)
      }
    })
});
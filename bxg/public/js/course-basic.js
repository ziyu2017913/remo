/**
 * Created by lenovo on 2017/9/25.
 */
define(['jquery', 'template', 'util','ckeditor'], function ($, template, util,CKEDITOR) {
    //设置导航菜单选中
    util.setMenu('/course/courseAdd');
    //获取课程ID
    var csId = util.qs('cs_id');
    //获取操作标识符
    var flag = util.qs('flag');
    //根据课程查找相关id信息
    $.ajax({
        type: 'get',
        url: '/api/course/basic',
        dataType: 'json',
        data: {cs_id: csId},
        success: function (data) {
            if (flag) {
                data.result.operate = '课程修改'
            } else {
                data.result.operate = '课程添加'
            }
            var html = template('basicTpl', data.result);
            $('#basicInfo').html(html);
            //处理二级分类的下拉联动
            $('#firstType').change(function () {
                //获取一级分类的值
                var pid = $(this).val();
                $.ajax({
                    type: 'get',
                    url: '/api/category/child',
                    dataType: 'json',
                    data:{cg_id:pid},
                    success:function(data){
                      var tpl='<option value="">请选择二级分类...</option>' +
                          '{{each list}}<option value="{{$value.cg_id}}">{{$value.cg_name}}</option>{{/each}}';
                      var html=template.render(tpl,{list:data.result});
                        $('#selectTpl').html(html);
                    }
                });
            });
        //    富文本
            CKEDITOR.replace('editor',{  //editor  文本的id名
                toolbarGroups : [
                    { name: 'others', groups: [ 'others' ] },
                    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
                    { name: 'styles', groups: [ 'styles' ] },
                    { name: 'colors', groups: [ 'colors' ] },
                ]
            })
        }
    });


});
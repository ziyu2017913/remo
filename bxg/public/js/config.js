/**
 * Created by lenovo on 2017/9/20.
 */
require.config({
    baseUrl:'/public/assets',
    paths:{
        jquery:'jquery/jquery',
        cookie:'jquery-cookie/jquery.cookie',
        template:'artTemplate/template-web',
        bootstrap:'bootstrap/js/bootstrap.min',
        datePicker:'bootstrap-datepicker/js/bootstrap-datepicker',//日期插件
        language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min', //中文显示日期插件
        validate:'validate/jquery-validate',                //表单验证插件
        form:'jquery-form/jquery.form',                     //表单提交插件
        upLoadIfy:'uploadify/jquery.uploadify.min',         //上传文件异步插件
        region:'jquery-region/jquery.region',               //三级联动插件
        ckeditor:'ckeditor/ckeditor',                      //富文本插件
        jcrop:'jcrop/js/Jcrop',                            //截切
        util:'../js/util',
        common:'../js/common',
        login:'../js/login',
        teacherList:'../js/teacher-list',
        teacherAdd:'../js/teacher-add',
        settings:'../js/settings',
        index:'../js/index',
        courseAdd:'../js/course-add',
        courseList:'../js/course-list',
        courseBasic:'../js/course-basic',
        coursePicture:'../js/course-picture'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        },
        language:{
            deps:['jquery','datePicker']
        },
        validate:{
            deps:['jquery']
        },
        upLoadIfy:{
            deps:['jquery']
        },
        ckeditor:{
            exports:'CKEDITOR'
        },
        jcrop:{
            deps:['jquery']
        }

    }
});
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
        datePicker:'bootstrap-datepicker/js/bootstrap-datepicker',//���ڲ��
        language:'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min', //������ʾ���ڲ��
        validate:'validate/jquery-validate',                //����֤���
        form:'jquery-form/jquery.form',                     //���ύ���
        upLoadIfy:'uploadify/jquery.uploadify.min',         //�ϴ��ļ��첽���
        region:'jquery-region/jquery.region',               //�����������
        ckeditor:'ckeditor/ckeditor',                      //���ı����
        jcrop:'jcrop/js/Jcrop',                            //����
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
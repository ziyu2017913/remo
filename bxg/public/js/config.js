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
        common:'../js/common',
        login:'../js/login',
        teacherList:'../js/teacher-list'
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }

    }
});
/* jshint esversion: 6 */
console.log('这是wp-vue-project-test 的入口文件');
//        vue文件 引入
import Vue from 'vue';
//        vue_resource 引入
import vue_resource from 'vue-resource';
Vue.use(vue_resource);
Vue.http.options.root = 'http://localhost:3000/';        /*为vue的http请求 设置根路径 */
//          路由引入
import VueRouter from "vue-router";
import router from './router.js';
Vue.use(VueRouter);
//          本地组件引入
import App from "./App.vue";
//          外部组件引入: mint-UI组件引入注册
import 'mint-ui/lib/style.css';
import { Header, Swipe, SwipeItem, Toast } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(Toast.name, Toast);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
//          本地 第三方组件引入: mui组件引入
import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";
import "./lib/mui/js/mui.js";
import "./lib/mui/fonts/mui.ttf";
import "./lib/mui/fonts/mui-icons-extra.ttf";
import "./lib/mui/fonts/iconfont.ttf";
// 导入格式化时间的插件
import moment from "moment";
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern);
});


console.log(Header.name);
var vm = new Vue({

    el: '#app',
    data: {
        msg: '1231231233'
    },

    render: c => c(App),


    router
});
Vue.config.productionTip = false;
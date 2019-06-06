console.log('这是wp-vue-project-test 的入口文件');
//        vue文件 引入
import Vue from 'vue';

//          路由引入
import VueRouter from "vue-router";
import router from './router.js';
Vue.use(VueRouter);
//          本地组件引入
import App from "./App.vue";
//          外部组件引入: mint-UI组件引入注册
import 'mint-ui/lib/style.css';b
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
//          本地 第三方组件引入: mui组件引入
import "./lib/mui/css/mui.css"; 
import "./lib/mui/js/mui.js";
import "./lib/mui/fonts/mui.ttf";

console.log(Header.name)
var vm = new Vue({ 
   
    el: '#app',
    data: {
        msg: '1231231233'
    },

    render: c=>c(App),
 

    router
});
Vue.config.productionTip = false;
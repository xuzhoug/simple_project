 /* jshint esversion: 6 */

import VueRouter from "vue-router";
import home_component from "./components/tabbar/home_component.vue";
import message_component from "./components/tabbar/message_component.vue";
import plus_component from "./components/tabbar/plus_component.vue";
import search_component from "./components/tabbar/search_component.vue";

var router = new VueRouter({
    routes: [
        { path: '/', component: home_component },
        { path: '/home_component', component: home_component },
        { path: '/message_component', component: message_component },
        { path: '/plus_component', component: plus_component },
        { path: '/search_component', component: search_component }
    ], 
    linkActiveClass: 'mui-active'
});
export default router;
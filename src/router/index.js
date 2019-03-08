import Router from "vue-router"
import Vue from "vue"
require('es6-promise').polyfill();
Vue.use(Router);

const Home=resolve=>require(['../pages/Home'],resolve);
// const Home=()=>import('../pages/Home.vue');
// import Home from "@/pages/Home.vue"
const routes=[
    {
        path:"/home",component:Home
    }
];
export default new Router({routes})

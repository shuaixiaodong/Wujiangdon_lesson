import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  login
} from 'pages/';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: '登录',
    hidden: true,
    component: login
  }
];

export default new VueRouter({
  routes,
})
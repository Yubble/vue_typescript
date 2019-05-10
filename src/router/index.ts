import Vue from 'vue';
import Router from 'vue-router';
import basicRouter from './basic';
import viewsRouter from './views'
// import Home from './views/Home.vue';

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...basicRouter,
    ...viewsRouter
  ]
});

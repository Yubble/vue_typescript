// 业务类型页面的路由

import { Route } from '../types/standard'
import Home from 'views/Home.vue'
import About from 'views/About.vue'
import More from 'views/More.vue'

const basicRouter: Route[] = [
  {
    path: '/',
    name: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    component: Home,
    name: 'home',
    meta: { title: '首页' }
  },
  {
    path: '/about',
    component: About,
    name: 'about',
    meta: { title: '关于' }
  },
  {
    path: '/more',
    component: More,
    name: 'more',
    meta: { title: '更多' }
  }
]

export default basicRouter

// 业务类型页面的路由

import { Route } from '../types/standard'
import Layout from '../../pages/layout/index.vue'
import Home from '../../views/Home.vue'
import About from '../../views/About.vue'
import More from '../../views/More.vue'

const basicRouter: Route[] = [
  {
    path: '/',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: '首页',
        component: Home,
        meta: { title: '首页' }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    children: [
      {
        path: '/',
        name: '关于',
        component: About,
        meta: { title: '关于' }
      }
    ]
  },
  {
    path: '/more',
    component: Layout,
    children: [
      {
        path: '/',
        name: '更多',
        component: More,
        meta: { title: '更多' }
      }
    ]
  }
]

export default basicRouter

// 业务类型页面的路由

import { Route } from '../types/standard'
import Layout from '../../pages/layout/index.vue'
import Home from '../../views/Home.vue'
import About from '../../views/About.vue'

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
    name: 'about',
    component: Layout,
    meta: {
      title: '关于',
      permission: true
    }
  }
]

export default basicRouter

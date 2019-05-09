// import Layout from '@/page/index/'
import { Route } from '../types/standard'
import Home from '../../views/Home.vue'
import About from '../../views/About.vue'

const basicRouter: Route[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页',
      permission: true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: '关于',
      permission: true
    }
  }
]

export default basicRouter

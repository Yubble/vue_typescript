// 基本类型页面的路由

// import Layout from '@/page/index/'
import { Route } from '../types/standard'
import unfound from '../../views/404.vue'
// import Home from '../../views/Home.vue'
// import About from '../../views/About.vue'

const basicRouter: Route[] = [
  {
    path: '/404',
    name: 'unfound',
    component: unfound,
    meta: {
      title: '错误页面',
      permission: true
    }
  }
]

export default basicRouter

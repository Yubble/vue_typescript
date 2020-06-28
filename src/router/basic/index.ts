// 基本类型页面的路由

import { Route } from '../types/standard'
import unfound from 'views/404.vue'

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

import router from '@/router/index'
import store from '@/store'

router.beforeEach((to, from, next) => {
  const saveRouter = {
    path: to.path,
    name: to.name,
    query: to.query,
    params: to.params
  }

  store.commit('ADD_TAG', saveRouter)
  next()
})
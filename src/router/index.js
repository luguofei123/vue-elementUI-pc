import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import constRouter from './routerData/constRouter'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRouter
})
// 路由钩子函数
router.beforeEach((to, from, next) => {
  if (store.state.auth.authInfo.pageAuth.length === 0) {
    next()
  } else {
    if (store.state.auth.authRoutes[0].children === false) {
      store.dispatch('auth/setAuthRouter')
        .then(() => {
          router.addRoutes(store.state.auth.authRoutes)
          router.addRoutes([{ path: '*', redirect: '/404', hidden: true }])
          console.log(router)
          next()
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      next()
    }
  }
  next()
  if (to.path.indexOf('index/') !== -1) {
    store.commit('tagsRecord/ADD_TAGSLIST', to)
    store.commit('tagsRecord/SET_BREADCRUBM_LIST', to)
  }
})
export default router

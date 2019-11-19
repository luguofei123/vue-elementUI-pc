import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import constRouter from './routerData/constRouter'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // base: 'dist',
  routes: constRouter
})
// 1 根据返回的角色 设置角色
let obj = {
  // 根据此值渲染菜单
  menuAuth: ['1', '2', '2-1', '2-2', '3', '3-1', '4', '5', '5-1', '5-2', '5-2-1', '5-2-2', '5-2-3', '6', '7', '8', '9', '9-1', '9-2', '10', '11', '11-1', '11-2', '11-3', '12', '13'],
  // 根据此值判断哪个页面可以访问
  pageAuth: ['dashboard', 'role', 'user', 'editorTable', 'tabs', 'baseform', 'editor', 'editorwang', 'markdown', 'upload', 'icon', 'chart', 'drag', 'dialog', 'i18n', 'permission', '404', 'pdf', 'baidu'],
  // 根据此值判断哪个页面的哪些按钮可以操作
  buttonAuth: {
    role: ['add', 'delete']
  }
}
// 路由钩子函数
router.beforeEach((to, from, next) => {
  // 先判断是否登录
  if (store.state.auth.userInfo.token === '') {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  } else {
    if (store.state.auth.authInfo.pageAuth.length === 0) {
      store.commit('auth/SET_AUTH_INFO', obj)
      store.dispatch('auth/setAuthRouter')
        .then(() => {
          router.addRoutes(store.state.auth.authRoutes)
          router.addRoutes([{ path: '*', redirect: '/403', hidden: true }])
          next({
            ...to, replace: true
          })
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      next()
    }
  }
  if (to.path.indexOf('index/') !== -1 && to.meta.title) {
    store.commit('tagsRecord/ADD_TAGSLIST', to)
    store.commit('tagsRecord/SET_BREADCRUBM_LIST', to)
  }
})
export default router

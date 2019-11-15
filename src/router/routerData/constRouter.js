let constRouter = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/views/Login.vue'], resolve)
  },
  {
    // 错误404
    path: '/403',
    name: '403',
    component: resolve => require(['@/views/error/403.vue'], resolve)
    // meta: { title: '404错误', requiresAuth: false }
  }
  // {
  //   path: '*',
  //   redirect: '/404'
  // }
]
export default constRouter

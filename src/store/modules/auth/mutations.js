// 一条重要的原则就是要记住 mutation 必须是同步函数
// import router from '@/router/index'
const mutations = {
  SET_AUTH_INFO: (state, obj) => {
    state.authInfo = obj
    localStorage.setItem('authInfo', JSON.stringify(obj))
  },
  SET_ROUTER: (state, arr) => {
    state.authRoutes = arr
  }
}
export default mutations

import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
import bigData from './bigData.vue'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

// import MyAxios from '@/service/index'
Vue.use(dataV)
Vue.use(VueJsonp)
// 将API方法绑定到全局
// Vue.prototype.$MyAxios = MyAxios
Vue.config.productionTip = false
new Vue({
  render: h => h(bigData)
}).$mount('#bigData')

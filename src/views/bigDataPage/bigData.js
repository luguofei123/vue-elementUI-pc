import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
import bigData from './bigData.vue'

// import MyAxios from '@/service/index'

Vue.use(VueJsonp)
// 将API方法绑定到全局
// Vue.prototype.$MyAxios = MyAxios
Vue.config.productionTip = false
new Vue({
  render: h => h(bigData)
}).$mount('#bigData')

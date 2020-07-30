import Vue from 'vue'
// import VueJsonp from 'vue-jsonp'
import '@/assets/css/iview/iview.css'
import iView from 'iview'
import iview from './iview.vue'

// import MyAxios from '@/service/index'

Vue.use(iView)

Vue.config.productionTip = false
new Vue({
  render: h => h(iview)
}).$mount('#iview')

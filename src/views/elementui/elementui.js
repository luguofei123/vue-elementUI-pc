import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
// css集中到一个js文件中然后引用
import '@/assets/css/index'
import ElementUI from 'element-ui'

import elementui from './elementui.vue'

Vue.use(ElementUI, {
  size: 'small'
})
Vue.use(VueJsonp)
// 将API方法绑定到全局
// Vue.prototype.$MyAxios = MyAxios
Vue.config.productionTip = false
new Vue({
  render: h => h(elementui)
}).$mount('#elementui')

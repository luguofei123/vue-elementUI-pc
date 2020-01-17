import Vue from 'vue'
// import '@babel/polyfill'
import VCharts from 'v-charts'
import VueJsonp from 'vue-jsonp'
import App from '@/App.vue'
import router from '@/router/index'
import store from '@/store/index'
// css集中到一个js文件中然后引用
import '@/assets/css/index'
import ElementUI from 'element-ui'
import MyAxios from '@/service/index'
import { eventBus } from '@/eventBus/eventBus.js'
// 引用全局组件js文件
import '@/components/index'
// 引入自定义指令
import * as directives from '@/directives/index'
import * as filters from '@/filter/index'
// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// 全局注册指令
Object.keys(directives).forEach(k => Vue.directive(k, directives[k]))
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
Vue.use(VCharts)
Vue.use(VueJsonp)
// 将API方法绑定到全局
Vue.prototype.$MyAxios = MyAxios
Vue.prototype.$EventBus = eventBus
Vue.config.productionTip = false
Vue.use(ElementUI, {
  size: 'small'
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

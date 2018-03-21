import Vue from 'vue'
import App from './App'

// 引入路由
import router from './router'
// 引入vuex
import store from './vuex'
// 重置全局样式
import 'assets/css/reset.css'
// 引入动画样式
import 'assets/css/animate.css'
// 引入fontawesome
import 'font-awesome/css/font-awesome.css'
// 引入全局函数
import notice from 'components/modules/notice'
// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.prototype.$notice = notice

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

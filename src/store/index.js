import Vue from 'vue'
import Vuex from 'vuex'

// import api from 'assets/js/api'
// import * as types from './types'
// import router from './../router'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    leftNav: [
      {
        name: '开关',
        linkto: '/home/switch'
      },
      {
        name: '日期选择器',
        linkto: '/home/datePicker'
      },
      {
        name: '图片上传',
        linkto: '/home/upload'
      },
      {
        name: '多选框',
        linkto: '/home/checkBox'
      }
    ]
  },
  getters: {
    leftNav: (state) => state.leftNav
  },
  actions: {},
  mutations: {}
})

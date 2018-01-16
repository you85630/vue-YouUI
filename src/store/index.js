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
        linkto: '/switch'
      },
      {
        name: '日期选择器',
        linkto: '/datePicker'
      },
      {
        name: '图片上传',
        linkto: '/upload'
      }
    ]
  },
  getters: {
    leftNav: (state) => state.leftNav
  },
  actions: {},
  mutations: {}
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    leftNav: [
      {
        name: '开关',
        linkto: '/home/switch'
      },
      {
        name: '单选框',
        linkto: '/home/radioBox'
      },
      {
        name: '多选框',
        linkto: '/home/checkBox'
      },
      {
        name: '弹窗',
        linkto: '/home/alertBox'
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
        name: '标签页',
        linkto: '/home/tabs'
      },
      {
        name: '树形结构',
        linkto: '/home/tree'
      },
      {
        name: '表格',
        linkto: '/home/table'
      },
      {
        name: '图表',
        linkto: '/home/echarts'
      }
    ]
  },
  getters: {
    leftNav: (state) => state.leftNav
  },
  actions: {},
  mutations: {}
})

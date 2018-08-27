import Vue from 'vue'
import Vuex from 'vuex'
import router from './../router'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // 登录
    account: {},
    // 登录错误提示
    errorMsg: '',
    // 左导航
    leftNav: [
      {
        name: '开关',
        linkto: '/home/switch'
      },
      {
        name: '按钮',
        linkto: '/home/button'
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
        name: '选择器',
        linkto: '/home/select'
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
        name: '时间选择器',
        linkto: '/home/timepicker'
      },
      {
        name: '图片转base46',
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
      },
      {
        name: '滑块',
        linkto: '/home/slider'
      },
      {
        name: '进度条',
        linkto: '/home/progress'
      },
      {
        name: '评分',
        linkto: '/home/rate'
      },
      {
        name: '卡片',
        linkto: '/home/card'
      },
      {
        name: '通知提醒',
        linkto: '/home/notice'
      },
      {
        name: '级联选择器',
        linkto: '/home/cascader'
      },
      {
        name: '导航菜单',
        linkto: '/home/menu'
      },
      {
        name: '折叠面板',
        linkto: '/home/collapse'
      }
    ]
  },
  getters: {
    // 登录
    account: (state) => state.account,
    // 登录错误提示
    errorMsg: (state) => state.errorMsg,
    // 左导航
    leftNav: (state) => state.leftNav
  },
  actions: {
    // 登录
    login: ({ commit }, key) => commit('login', key),
    // 登出
    exit: ({ commit }) => commit('exit')
  },
  mutations: {
    // 登录
    login: (state, key) => {
      console.log(key)
      state.account = {}
      router.push('/home/index')
    },
    // 登出
    exit: (state) => {
      localStorage.clear()
      router.push('/login')
    }
  }
})

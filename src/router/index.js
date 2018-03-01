import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = () => import('views/login')
const notfound = () => import('views/notfound')
const home = () => import('views/home')

const index = () => import('components/psges/index')
const Switch = () => import('components/psges/switch')
const button = () => import('components/psges/button')
const datePicker = () => import('components/psges/datePicker')
const upLoad = () => import('components/psges/upLoad')
const radioBox = () => import('components/psges/radioBox')
const checkBox = () => import('components/psges/checkBox')
const select = () => import('components/psges/select')
const cascader = () => import('components/psges/cascader')
const alertBox = () => import('components/psges/alertBox')
const tabs = () => import('components/psges/tabs')
const tree = () => import('components/psges/tree')
const table = () => import('components/psges/table')
const echarts = () => import('components/psges/echarts')
const slider = () => import('components/psges/slider')
const rate = () => import('components/psges/rate')

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/index'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '*',
      name: 'notfound',
      component: notfound
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/home/index',
          name: 'index',
          component: index
        },
        {
          path: '/home/switch',
          name: 'switch',
          component: Switch
        },
        {
          path: '/home/button',
          name: 'button',
          component: button
        },
        {
          path: '/home/datePicker',
          name: 'datePicker',
          component: datePicker
        },
        {
          path: '/home/upLoad',
          name: 'upLoad',
          component: upLoad
        },
        {
          path: '/home/radioBox',
          name: 'radioBox',
          component: radioBox
        },
        {
          path: '/home/checkBox',
          name: 'checkBox',
          component: checkBox
        },
        {
          path: '/home/select',
          name: 'select',
          component: select
        },
        {
          path: '/home/cascader',
          name: 'cascader',
          component: cascader
        },
        {
          path: '/home/alertBox',
          name: 'alertBox',
          component: alertBox
        },
        {
          path: '/home/tabs',
          name: 'tabs',
          component: tabs
        },
        {
          path: '/home/tree',
          name: 'tree',
          component: tree
        },
        {
          path: '/home/table',
          name: 'table',
          component: table
        },
        {
          path: '/home/echarts',
          name: 'echarts',
          component: echarts
        },
        {
          path: '/home/slider',
          name: 'slider',
          component: slider
        },
        {
          path: '/home/rate',
          name: 'rate',
          component: rate
        }
      ]
    }
  ]
})
export default router

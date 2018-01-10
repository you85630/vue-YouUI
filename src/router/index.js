import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const login = () => import('views/login')
const home = () => import('views/home')

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
export default router

import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import FirstSteps from './views/FirstSteps.vue'
import Account from './views/Account.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/first-steps',
      name: 'firstSteps',
      component: FirstSteps
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    
  ]
})

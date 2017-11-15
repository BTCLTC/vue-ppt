import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import One from '@/pages/One'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/1',
      name: '1',
      component: One
    }
  ]
})

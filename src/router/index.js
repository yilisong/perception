import Vue from 'vue'
import Router from 'vue-router'
import perception from '@/components/perception'
import cc from '@/components/cc'
import waf from '@/components/waf'
import ddos from '@/components/ddos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'perception',
      component: perception
    },
    {
      path: '/perception',
      name: 'perception',
      component: perception
    },
    {
      path: '/cc',
      name: 'cc',
      component: cc
    },
    {
      path: '/ddos',
      name: 'ddos',
      component: ddos
    },
    {
      path: '/waf',
      name: 'waf',
      component: waf
    }
  ]
})

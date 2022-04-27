import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aceleration',
    name: 'aceleration-comp',
    component: () => import('@/views/Aceleration.vue')
  },
  {
    path: '/time',
    name: 'time-comp',
    component: ()=> import('@/views/Time.vue')
  },
  {
    path: '/force',
    name: 'force-comp',
    component: () => import('@/views/Force.vue')
  },
  {
    path: '/power',
    name: 'power-comp',
    component: ()=> import ('@/views/Power.vue')
  },
  {
    path:'/work',
    name:'work-comp',
    component: ()=> import('@/views/Work.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

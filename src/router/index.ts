import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Weapons from '../views/Weapons.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Weapons',
    component: Weapons
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

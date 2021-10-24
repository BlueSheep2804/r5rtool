import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Weapons from '../views/Weapons.vue'
import Home from '../views/Home.vue'
import TabWeapons from '../views/TabWeapons.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Weapons',
    component: Weapons
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/tab',
    name: 'Tab',
    component: TabWeapons
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

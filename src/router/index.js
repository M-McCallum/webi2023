import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
  
    component: () => import('../views/About.vue')
  },
  {
    path: '/menus',
    name: 'Our Menus',
    component: () => import('../views/Menus.vue')
  },
  {
    path: '/trucks',
    name: 'Where Are We',
    component: () => import('../views/Trucks.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  }

]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior () {
  return { x: 0, y: 0 }
}
})

export default router

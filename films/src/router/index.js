import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/MainPage.vue')
  },
  {
    path: '/',
    name: 'choice',
    component: () => import('../views/ChoicePage.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

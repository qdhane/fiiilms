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
  routes
})

export default router

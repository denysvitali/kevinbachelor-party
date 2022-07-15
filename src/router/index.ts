import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/seen-you',
      name: 'seen-you',
      component: () => import('../views/SeenYou.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/Faq.vue')
    }
  ]
})

export default router

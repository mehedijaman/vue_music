import { createRouter, createWebHistory } from 'vue-router'
const HomeView = import('../views/HomeView.vue')
const NotFound = import('../views/NotFound.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: 'NotFound', 
      component: NotFound 
    },
  ]
})

export default router

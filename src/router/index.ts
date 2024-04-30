import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import OfferPositive from '../views/OfferPositive.vue'
import OfferNegative from '../views/OfferNegative.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/positive',
      name: 'positive',
      component: OfferPositive
    },
    {
      path: '/negative',
      name: 'negative',
      component: OfferNegative
    },
  ]
})

export default router

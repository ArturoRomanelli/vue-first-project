import { createRouter, createWebHistory } from 'vue-router'

import EventDetails from '../views/EventDetails.vue'
import About from '../views/AboutView.vue'
import EventList from '@/components/EventList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventList,
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/event/:id ',
      name: 'EventDetails',
      props: true,
      component: EventDetails
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

export default router

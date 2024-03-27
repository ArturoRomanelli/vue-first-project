import { createRouter, createWebHistory } from 'vue-router'

import EventLayout from '@/views/event/EventLayout.vue'
import About from '@/views/AboutView.vue'
import EventList from '@/components/EventList.vue'
import EventDetails from '@/views/event/EventDetails.vue'
import EventRegister from '@/views/event/EventRegister.vue'
import EventEdit from '@/views/event/EventEdit.vue'

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
      path: '/event/:id',
      name: 'EventLayout',
      props: true,
      component: EventLayout,
      children: [
        {
          path: '',
          name: 'EventDetails',
          component: EventDetails
        },
        {
          path: 'register',
          name: 'EventRegister',

          component: EventRegister
        },
        {
          path: 'edit',
          name: 'EventEdit',

          component: EventEdit
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

export default router

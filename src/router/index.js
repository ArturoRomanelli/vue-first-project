import { createRouter, createWebHistory } from 'vue-router'

import EventLayout from '@/views/event/EventLayout.vue'
import About from '@/views/AboutView.vue'
import EventList from '@/components/EventList.vue'
import EventDetails from '@/views/event/EventDetails.vue'
import EventRegister from '@/views/event/EventRegister.vue'
import EventEdit from '@/views/event/EventEdit.vue'
import NotFound from '@/views/NotFound.vue'
import NetworkError from '@/views/NetworkError.vue'
import NProgress from 'nprogress'
import EventService from '../services/EventService.js'
import Gstore from '@/stores'

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
      path: '/events/:id',
      name: 'EventLayout',
      props: true,
      component: EventLayout,
      beforeEnter: (to) => {
        return EventService.getEvent(to.params.id)
          .then((response) => {
            Gstore.event = response.data
          })
          .catch((error) => {
            if (error.response && error.response.status == 404) {
              return { name: '404Resource', params: { resource: 'event' } }
            } else {
              return { name: 'NetworkError' }
            }
          })
      },
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
      path: '/event/:afterEvent(.*)',
      redirect: (to) => {
        return { path: '/events/' + to.params.afterEvent }
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
    { path: '/404/:resource', name: '404Resource', component: NotFound, props: true },
    { path: '/networkError', name: 'NetworkError', component: NetworkError }
  ]
})

router.beforeEach(() => NProgress.start())
router.afterEach(() => NProgress.done())
export default router

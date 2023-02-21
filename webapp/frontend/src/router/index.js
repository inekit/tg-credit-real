import { h, resolveComponent } from 'vue'
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/filters/city',
    children: [
      {
        path: '/results',
        name: 'ResultsSearch',
        component: () => import('@/views/Results.vue'),
      },
      {
        path: '/results/:city/:page/:filter',
        name: 'Results',
        component: () => import('@/views/Results.vue'),
      },
      {
        path: '/items/:id',
        name: 'Items',
        component: () => import('@/views/Item.vue'),
      },
      {
        path: 'filters/:city',
        name: 'Cities',
        component: () => import('@/views/Filters.vue'),
      },
      {
        path: 'filters/:city/:page',
        name: 'Filters',
        component: () => import('@/views/Filters.vue'),
      },
    ],
  },
]

const router = createRouter({
  //history: createWebHashHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router

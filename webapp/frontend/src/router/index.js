import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',

    children: [
      {
        path: '/results/:city',
        name: 'ResultsSearch',
        component: () => import('@/views/Results.vue'),
      },
      {
        path: '/results/:city/:page/:filter',
        name: 'Results',
        component: () => import('@/views/Results.vue'),
      },
      {
        path: '/favorites',
        name: 'Favorites',
        component: () => import('@/views/Results.vue'),
      },

      {
        path: '/items/:id',
        name: 'Items',
        component: () => import('@/views/Item.vue'),
      },
      {
        path: '/:id',
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
  history: createWebHistory('/colorsfront/'),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router

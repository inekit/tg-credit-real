import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/results/1',
    children: [
      {
        path: '/results/:userId',
        name: 'Results',
        component: () => import('@/views/Results.vue'),
      },
      {
        path: '/basket',
        name: 'Basket',
        component: () => import('@/views/Basket.vue'),
      },
      {
        path: '/order',
        name: 'Order',
        component: () => import('@/views/Order.vue'),
      },
      {
        path: '/items/:id',
        name: 'Items',
        component: () => import('@/views/Item.vue'),
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

import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    children: [
      {
        path: '/calc',
        name: 'Calc',
        component: () => import('@/views/Calc.vue'),
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/Profile.vue'),
      },
      {
        path: '/status',
        name: 'Status',
        component: () => import('@/views/Status.vue'),
      },
      {
        path: '/verification',
        name: 'Verification',
        component: () => import('@/views/Verification.vue'),
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

import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/channels/1',
    children: [
      {
        path: '/channels/userId',
        name: 'Channels',
        component: () => import('@/views/Channels.vue'),
      },
      {
        path: '/channel/:channelId',
        name: 'Channel',
        component: () => import('@/views/Channel.vue'),
      },
      {
        path: '/favourites',
        name: 'Favourites',
        component: () => import('@/views/Favourites.vue'),
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

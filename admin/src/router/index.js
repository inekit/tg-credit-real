import { h, resolveComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/pages/Login'),
  },
  /*{
    path: '/register',
    name: 'Register',
    component: () => import('@/views/pages/Register'),
  },*/
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/items',
    children: [
      {
        path: '/admins',
        name: 'Admins',
        component: () => import('@/views/Admins.vue'),
      },
      {
        path: '/items',
        name: 'Items',
        component: () => import('@/views/Items.vue'),
        children: [
          {
            path: '/items/project/:categoryName',
            name: 'ItemsByCategory',
            props: true,
            component: () => import('@/views/Items.vue'),
            children: [],
          },
        ],
      },
      {
        path: '/static',
        name: 'Static',
        component: () => import('@/views/Static.vue'),
        children: [],
      },
      {
        path: '/orders',
        name: 'Orders',
        component: () => import('@/views/Orders.vue'),
        children: [],
      },
      {
        path: '/order/:orderId',
        name: 'OrderItems',
        props: true,
        component: () => import('@/views/Order.vue'),
        children: [],
      },
      {
        path: '/basket',
        name: 'BasketItems',
        props: true,
        component: () => import('@/views/Basket.vue'),
        children: [],
      },
      {
        path: '/categories',
        name: 'Categories',
        component: () => import('@/views/Categories.vue'),
        children: [],
      },
      {
        path: '/promos',
        name: 'Promos',
        component: () => import('@/views/Promos.vue'),
        children: [],
      },
    ],
  },
  {
    path: '/pages',
    redirect: '/pages/404',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/pages/Page404'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/pages/Page500'),
      },
    ],
  },
]

const router = createRouter({
  //history: createWebHashHistory(process.env.BASE_URL),
  history: createWebHistory('/colorsadmin/'),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router

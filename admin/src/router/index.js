import { h, resolveComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/pages/Login'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/pages/Register'),
  },
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/loans',
    children: [
      {
        path: '/admins',
        name: 'Admins',
        component: () => import('@/views/Admins.vue'),
      },
      {
        path: '/users',
        name: 'Users',
        component: () => import('@/views/Users.vue'),
      },
      {
        path: '/static',
        name: 'Static',
        component: () => import('@/views/Static.vue'),
        children: [],
      },
      {
        path: '/loans',
        name: 'Loans',
        component: () => import('@/views/Loans.vue'),
        children: [
          {
            path: '/loans/user/:userId',
            name: 'LoansByUser',
            props: true,
            component: () => import('@/views/Loans.vue'),
            children: [],
          },
          {
            path: '/loans/admin/:adminId',
            name: 'LoansByAdmin',
            props: true,
            component: () => import('@/views/Loans.vue'),
            children: [],
          },
        ],
      },
      {
        path: '/loan/:loanId',
        name: 'LoanInfo',
        props: true,
        component: () => import('@/views/Loan.vue'),
        children: [],
      },
      {
        path: '/mailing',
        name: 'Mailing',
        component: () => import('@/views/Mailing.vue'),
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

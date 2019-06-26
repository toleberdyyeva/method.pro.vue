import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'
import NewPostPage from '@/pages/new'
import LoginPage from '@/pages/login'


import Error from '@/pages/Error'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/new',
      name: 'new',
      component: NewPostPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
  ]
})



router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})

export default router

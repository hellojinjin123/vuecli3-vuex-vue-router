import Vue from 'vue'
import Router from 'vue-router'
import auth from './auth'
import IndexContainer from './components/tabbar/IndexContainer'
import HomeContainer from './components/tabbar/HomeContainer'
import ServiceContainer from './components/tabbar/ServiceContainer'
import UserContainer from './components/tabbar/UserContainer'
import Login from './components/login/Login'
import Todo from './components/Todo'
import StCenter from './components/setting/SettingCenter'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      component: IndexContainer
    },
    {
      path: '/service',
      component: ServiceContainer
    },
    {
      path: '/home',
      component: HomeContainer
    },
    {
      path: '/user',
      component: UserContainer,
      meta: {requiresAuth: true}
    },
    {
      name: 'todo',
      path: '/todo',
      component: Todo,
    },
    {
      name: 'stCenter',
      path: '/stCenter',
      component: StCenter,
      meta: {requiresAuth: true}
    }
  ]
})



// 全局路由前置守卫
router.beforeEach((to, from, next) => {
  // login auth
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router

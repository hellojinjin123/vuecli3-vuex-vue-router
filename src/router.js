import Vue from 'vue'
import Router from 'vue-router'
import IndexContainer from './components/tabbar/IndexContainer.vue'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import ServiceContainer from './components/tabbar/ServiceContainer.vue'
import UserContainer from './components/tabbar/UserContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
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
      component: UserContainer
    }
  ]
})

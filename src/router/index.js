/**
 * 路由器对象模块
 */
import Vue from 'vue'
import Router from 'vue-router'
import Miste from '../pages/Miste/Miste'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/miste',
      name: 'Miste',
      component: Miste
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/Msite'
    }
  ]
})

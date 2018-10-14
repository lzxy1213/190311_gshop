/**
 * 路由器对象模块
 */
import Vue from 'vue'
import Router from 'vue-router'
import Miste from '../pages/Miste/Miste'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
//const MSite = () => import('../pages/MSite/MSite.vue')
//const Search = () => import('../pages/Search/Search.vue')
//const Order = () => import('../pages/Order/Order.vue')
//const Profile = () => import('../pages/Profile/Profile.vue')
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/miste',
      component: Miste,//返回路由组件的函数，只有执行此函数才会加载路由组件，这个函数在请求对应的路由路径时才会执行
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/Msite'
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
  ]
})

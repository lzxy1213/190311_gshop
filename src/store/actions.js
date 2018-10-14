import {
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_IFNO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
} from './mutation-types'
import {
  reqShopRatings,
  reqShopGoods,
  reqShopInfo
} from '../api'
export default {
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if(result.code === 0) {
      const info = result.data
      commit(RECEIVE_IFNO, {info})
    }
  },
  async getShopGoods({commit}, callback) {
    const result = await reqShopGoods()
    if(result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      //数据更新了，通知一下组件
      callback && callback()
    }
  },
  async getShopRatings({commit}, callback) {
    const result = await reqShopRatings()
    if(result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      //数据更新了，通知一下组件
      callback && callback()
    }
  },
  //同步更新food中的count值
  updateFoodCount ({commit}, {isAdd, food}) {
    if(isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  },
  //同步清空购物车
  clearCart ({commit}) {
    commit(CLEAR_CART)
  }
}
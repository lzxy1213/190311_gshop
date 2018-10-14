import Vue from 'vue';
import {
  RECEIVE_GOODS,
  RECEIVE_IFNO,
  RECEIVE_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
} from './mutation-types'

export default {
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [RECEIVE_IFNO](state, {info}) {
    state.info = info
  },
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  [INCREMENT_FOOD_COUNT](state, {food}) {
    if(!food.count) {//第一次增加
      //food.count = 1//新增属性（没有数据绑定）
      /**
       * 对象
       * 属性名
       * 属性值
       */
      Vue.set(food, 'count', 1) //这种添加上方式，能够让新增的属性也有数据绑定
      //将food添加到cartFoods中
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state, {food}) {
    if(food.count) {//必须要有值才去减少
      food.count--
      if(food.count===0) {
        //将food从cartaFood中移除
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART](state) {
    //遍历,清除food中的count
    state.cartFoods.forEach(food => food.count = 0)
    //移除购物车内的所有东西
    state.cartFoods = []
  },
}
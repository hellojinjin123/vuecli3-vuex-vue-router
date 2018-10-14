import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: []
  },
  mutations: {
    addToCart(state, p) {
      let flag = false;
      state.cart.some((pro,index) => {
        if(pro.product_id == p.product_id){
          pro.count += 1
          Vue.set(state.cart,index,pro)  // 响应更新视图
          flag = true
          return true
        }
      })
      if(!flag){
        p.count = 1
        state.cart.push(p)
      }
    },
    removeFromCart(state, p){
      state.cart.some((pro, index) => {
        if(pro.product_id === p.product_id){
          if(pro.count == 1){
            state.cart.splice(index, 1)
            return false
          }
          pro.count -= 1
          Vue.set(state.cart,index,pro)
          return true
        }
      })
    }
  },
  getters: {
    getAllCount(state) {
      let c = 0
      state.cart.forEach((pro) => {
        c += pro.count
      })
      return c
    },
    getCount: (state) => {
      let o = {}
      state.cart.forEach(pro => o[pro.product_id] = pro.count)
      return o
    },
    getTolalPrice(state){
      let t = 0
      state.cart.forEach((pro) => {
        t += pro.count * pro.price * 100
      })
      return t
    },
    getCart(state) {
      return state.cart
    }
  },
  // actions: {
  //   getAllCount (context) {
  //     console.log(11)
  //     context.commit('getAllCount')
  //   }
  // }
})

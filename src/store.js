import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerIsShow: true
  },
  mutations: {
    showHeader(state,flag) {
      state.headerIsShow = flag;
    }
  },
  actions: {

  }
})

/*
*
* v1.0.0
*
* */
import Vue from 'vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

// mint-ui
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe)

import App from './App.vue'

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})

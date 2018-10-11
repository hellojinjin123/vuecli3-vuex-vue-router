/*
*
* v1.0.0
*
* */
import Vue from 'vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Resource from 'vue-resource'

Vue.use(Resource)  // 安装vue-resource
Vue.http.options.root = 'http://www.24jyun.com/apicode/htapi';
Vue.config.productionTip = false

// mui
// import mui from './assets/mui/js/mui.js'
// import '@/assets/mui/css/mui.css'
// Vue.prototype.mui = mui

// fastclick
import FastClick from 'fastclick'
FastClick.attach(document.body);

Vue.prototype.root = 'http://www.24jyun.com/apicode/i.php?img='

// mint-ui]
import { Toast ,Header, Tabbar, TabItem, Swipe, SwipeItem, Loadmore, Navbar, TabContainer, TabContainerItem, Cell,Field,Button } from 'mint-ui'

Vue.component(Cell.name, Cell);
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Loadmore.name, Loadmore)
Vue.component(Navbar.name, Navbar)
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Field.name, Field);
Vue.component(Button.name, Button);

// 引入全局scss
import './css/index.scss'
import './css/icon.css'


import App from './App.vue'

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

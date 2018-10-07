/*
*
* v1.0.0
*
* */
import Vue from 'vue'
import router from './router'
// import store from './store'
import './registerServiceWorker'
import Resource from 'vue-resource'

Vue.use(Resource)  // 安装vue-resource
Vue.http.options.root = 'http://www.24jyun.com/apicode/htapi';
Vue.config.productionTip = false

// mui
import mui from './assets/mui/js/mui.js'
import '@/assets/mui/css/mui.css'
Vue.prototype.mui = mui
Vue.prototype.root = 'http://www.24jyun.com/apicode/i.php?img='

// mint-ui]
import { Header, Tabbar,TabItem,Swipe, SwipeItem,Loadmore} from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Loadmore.name, Loadmore);

// 引入全局scss
import './css/index.scss'


import App from './App.vue'

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})

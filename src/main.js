import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import router from './js/router.js'
import axios from 'axios'
//轮播
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
//vuex
import store from './store'

Vue.use(Mint);

// 配置每个实例对象都可以用vue
Vue.use(VueRouter)

Vue.prototype.$http = axios
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store,
  components: { App },
  template: '<App/>'
})



//new Vue({
//el: '#app',
//router,
//store,
//components: { App },
//template: '<App/>'
//})

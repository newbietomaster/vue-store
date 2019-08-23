import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Bus from './lib/bus.js'
Vue.prototype.$bus = Bus  //新建一个vue实例，挂载在vue上，bus解决不同视图传值，详情见email.vue tel.vue

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

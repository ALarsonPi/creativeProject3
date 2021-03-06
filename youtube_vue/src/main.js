import Vue from 'vue'
import App from './App.vue'
import mock from './mock-data'
import router from './router'

Vue.config.productionTip = false

let data = {
  products: mock,
  cart: [],
  selectedYoutuber: {},
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

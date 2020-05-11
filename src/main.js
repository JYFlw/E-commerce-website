import Vue from 'vue'
import App from './App.vue'
import router from './router'

//引入 vant ui
import './pluginunit/vant.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

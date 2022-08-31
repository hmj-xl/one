import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import '../src/util/element'
import '../src/assets/css/index.css'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

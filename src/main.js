
import Vue from 'vue'
Vue.config.devtools = true
import App from './App'
import router from './router'
new Vue({
  el: '#app',
  render:h=>h(App),
  router
})

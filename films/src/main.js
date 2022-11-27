import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-design-icons-iconfont'
import film from '../src/vuex/films'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  film,
  render: h => h(App)
}).$mount('#app')

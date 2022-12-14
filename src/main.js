import Vue from 'vue'
import lineClamp from 'vue-line-clamp'
import App from './App.vue'
import store from './store'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(lineClamp)
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

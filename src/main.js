import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import './styles/style.css'
import 'hover.css'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import Photoswipe from 'vue-pswipe'

const pswipeOptions = {
  escKey: true,
  bgOpacity: .8,
  loop: false
}
 
Vue.use(Photoswipe, pswipeOptions)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

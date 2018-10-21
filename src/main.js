import Vue from 'vue'
import App from './App.vue'
import Vuefire from 'vuefire'

import '@babel/polyfill'
import './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuefire)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

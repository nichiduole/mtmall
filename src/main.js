import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/myself.css'
import '@/assets/css/normalize.css'
import '@/assets/css/common.less'
import 'lib-flexible'
import FastClick from 'fastclick'
import '@/swiperConfig.js'
import './vee-validate'
Vue.config.productionTip = false

FastClick.attach(document.body)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

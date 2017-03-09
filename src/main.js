// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueSuperagent from './plugins/vue-superagent'
import VueRouter from 'vue-router'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

import routes from './router/router'
import styles from './styles/css.css'
import flatpickercss from 'flatpickr/dist/flatpickr.min.css'

import store from './vuex/store'

import moment from 'moment'
Vue.filter('my-data', function(val){
  return moment(val).format('L')
})

Vue.use(VueRouter)
Vue.use(VueSuperagent)

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */

var app = new Vue({
  el : '#app',
  router,
  store,
  render: c => c(App)
})

import Vue from 'vue'
import axios from '../utils/ajax.js'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from '../route/router.js'
import Filter from '../utils/filter.js'
import toast from '../components/Toast/index.js'
import '../assets/css/base.less'

Vue.use(axios);
Vue.use(VueRouter);
Vue.use(toast);

Object.keys(Filter).forEach(function (k) {
  Vue.filter(k, Filter[k]);
});

const router = new VueRouter({
  // mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('app')
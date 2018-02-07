// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import '../node_modules/_bootstrap@3.3.7@bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/_bootstrap@3.3.7@bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
import lazyload from '../directive.js'//自定义懒加载命令

Vue.config.productionTip = false
Vue.config.debug = true; // 开启错误提示
Vue.prototype.$ajax = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

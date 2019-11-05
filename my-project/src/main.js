// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//axios
import axios from 'axios'
Vue.prototype.$axios=axios;
//ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false;
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
//store
import store from './store/store'
import {changeColor, changeText} from "./directive/change";
/* eslint-disable no-new */
import filter from "./directive/filter";
//百度地图
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: 'gM1juc7dFd6AFp3EhUPLbILld1CXnASY'
});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

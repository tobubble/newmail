import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// require styles
// import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

// 事件总线
Vue.prototype.$bus = new Vue()

// 1. 导入组件 js 文件
import Toast from "components/common/toast/index";
// 2. 将组件当作插件使用
Vue.use(Toast)

import VueLazyload from 'vue-lazyload' 
Vue.use(VueLazyload, {
  loading: require('assets/img/common/placeholder.png')
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

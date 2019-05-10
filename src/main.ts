import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入全局样式
import './styles/common.less'
// 引入ElementUI
import * as ELementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ELementUI)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

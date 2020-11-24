import Vue from 'vue';
import VueCarousel from '@chenfengyuan/vue-carousel';
import App from './App.vue';
import router from './router';
import http from './services/index';
import provedor from './provedor';

Vue.use(VueCarousel);
Vue.config.productionTip = false;
Vue.prototype.$http = http;

new Vue({
  router,
  render: (h) => h(App),
  store: provedor,
}).$mount('#app');

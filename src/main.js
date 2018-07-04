// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';
import router from './router';
import {_store} from './store/store';
import '@/assets/style/common.less';

Vue.config.productionTip = true;
Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.use(ElementUI);

/* eslint-disable no-new */
const store = new Vuex.Store({
  ..._store
});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
  // beforeRouteEnter (to, from, next) {
  // }
});
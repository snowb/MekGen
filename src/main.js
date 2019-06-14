import Vue from 'vue';
import App from './App.vue';
import store from "./store/store";
import VueMeta from 'vue-meta';

Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.use(VueMeta);

global.mekgen=new Vue({
  store,
  render: h => h(App),
}).$mount('#app');


import Vue from 'vue';
import App from './App.vue';
import store from "./store/store";

Vue.config.productionTip = false;
Vue.config.devtools = true;

global.mekgen=new Vue({
  store,
  render: h => h(App),
}).$mount('#app');


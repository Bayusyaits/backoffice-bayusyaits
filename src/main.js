/* eslint-disable */
import Vue from 'vue';
import ShardsVue from 'shards-vue';

import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate';

Vue.use(VueAxios, axios)
Vue.use(VeeValidate)

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '@/scss/shards-dashboards.scss';
import '@/assets/scss/date-range.scss';

// Core
import App from './App.vue';
import router from './router/';
import store from './store';

// Layouts
import Default from '@/layouts/Default.vue';

Vue.use(VueAxios, axios)

ShardsVue.install(Vue);

Vue.component('default-layout', Default);

Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
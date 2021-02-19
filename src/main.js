// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'

import { routes } from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Vue2TouchEvents from 'vue2-touch-events'
import vuetify from './plugins/vuetify';

Vue.use(Vue2TouchEvents);

library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

export const eventBus = new Vue();


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify,
  template: '<App/>'
});

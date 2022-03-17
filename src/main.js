import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, far);
Vue.component('vue-fontawesome', FontAwesomeIcon);
Vue.config.productionTip = false

Vue.use(Buefy);
Vue.use(FontAwesomeIcon);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

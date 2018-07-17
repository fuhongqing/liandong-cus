import Vue from 'vue'
import App from './App'
import router from './../../router/index'
import axios from './../../axios/index'
import './../../assets/commen.scss'
import {Header, Progress} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Progress.name, Progress);
Vue.use(axios)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

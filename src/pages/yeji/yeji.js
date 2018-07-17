import Vue from 'vue'
import Person from './App'
import router from './../../router/yeji'
import axios from './../../axios/index'
import VeLine from 'v-charts/lib/line.common'
import './../../assets/commen.scss'
import {Header} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.config.productionTip = false
Vue.component(VeLine.name, VeLine)
Vue.use(axios)
/* eslint-disable no-new */
new Vue({
  el: '#person',
  router,
  render: h => h(Person)
})

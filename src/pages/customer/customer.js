import Vue from 'vue'
import Custormer from './App'
import router from './../../router/customer'
import axios from './../../axios'
import {khApi, imageUrl, jyAppApi, khWeb} from './../../config/ip'
import {
  Cell,
  Navbar,
  TabItem,
  TabContainer,
  TabContainerItem,
  CellSwipe,
  Actionsheet,
  Picker,
  Header,
  Button,
  InfiniteScroll,
  Popup,
  Toast,
  Indicator,
  Tabbar,
  MessageBox
} from 'mint-ui';
// import "./../../assets/list.scss";

Vue.use(InfiniteScroll);
Vue.component(Popup.name, Popup);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Cell.name, Cell);
Vue.component(CellSwipe.name, CellSwipe);
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Picker.name, Picker);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Tabbar.name, Tabbar);
Vue.prototype.Toast = Toast;
Vue.prototype.MessageBox = MessageBox;
Vue.prototype.Indicator = Indicator;
Vue.prototype.khApi = khApi;
Vue.prototype.imageUrl = imageUrl;
Vue.prototype.jyAppApi = jyAppApi;
Vue.prototype.khWeb = khWeb;

Vue.config.productionTip = false
Vue.use(axios);
/* eslint-disable no-new */
new Vue({
  el: '#customer',
  router,
  render: h => h(Custormer)
})

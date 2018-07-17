import Vue from 'vue'
import Router from 'vue-router'
import list from '@/pages/customer/views/list'
import khDetail from '@/pages/customer/views/khDetail'
import baobeiDetail from '@/pages/customer/views/baobeiDetail'
import dadingDetail from '@/pages/customer/views/dadingDetail'
import laifangDetail from '@/pages/customer/views/laifangDetail'
import presignDetail from '@/pages/customer/views/presignDetail'
import signDetail from '@/pages/customer/views/signDetail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/list',
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/khDetail/:customerId/:type/:dadingId/:signId',
      name: 'kh-detail',
      component: khDetail
    },
    {
      path: '/baobeiDetail/:type/:id',
      name: 'baobei-detail',
      component: baobeiDetail
    },
    {
      path: '/laifangDetail/:type/:id/:visitNum',
      name: 'laifang-detail',
      component: laifangDetail
    },
    {
      path: '/dadingDetail/:type/:id',
      name: 'dading-detail',
      component: dadingDetail
    },
    {
      path: '/presignDetail/:type/:id',
      name: 'presign-detail',
      component: presignDetail
    },
    {
      path: '/signDetail/:type/:id',
      name: 'sign-detail',
      component: signDetail
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/yeji/views/Index'
import PlaceUser from '@/pages/yeji/views/PlaceUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/index"
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/placeUser',
      component: PlaceUser
    }
  ]
})

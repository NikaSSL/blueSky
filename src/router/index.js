import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/pages/me'
import News from '@/pages/news'
import Orders from '@/pages/orders'
import NewDetail from '@/pages/newDetail'
import Search from '@/pages/search'
import PushMsg from '@/pages/pushMsg.vue'
import AboutBlueSky from '@/pages/aboutBlueSky.vue'

Vue.use(Router)

export default new Router({
  routes: [{
		path:'/me',
		component:Me
    },{
    	path:'/news',
    	component:News
    },{
    	path:'/orders',
    	component:Orders
    },{
      path:'/newDetail',
      component:NewDetail
    },{
      path:'/search',
      component:Search
    },{
      path:'/pushMsg',
      component: PushMsg
    },{
      path:'/aboutBlueSky',
      component: AboutBlueSky
    }
  ]
})

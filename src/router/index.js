import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/pages/me'
import NewList from '@/pages/newList'
import Orders from '@/pages/orders'
import NewDetail from '@/pages/newDetail'
import Search from '@/pages/search'
import PushMsg from '@/pages/pushMsg'
import AboutBlueSky from '@/pages/aboutBlueSky'
import ThumbUp from '@/pages/thumbUp'

import temp from '@/pages/temp.vue'

Vue.use(Router)

export default new Router({
  routes: [{
		path:'/me',
		component:Me
    },{
    	path:'/newList',
    	component:NewList
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
    },{
      path:'/thumbUp',
      component:ThumbUp
    },{
      path:'/temp',
      component:temp
    }
  ]
})

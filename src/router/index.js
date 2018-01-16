import Vue from 'vue'
import Router from 'vue-router'
import Me from '@/pages/me'
import News from '@/pages/news'
import Orders from '@/pages/orders'
import newDetail from '@/pages/newDetail'

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
      component:newDetail
    }
  ]
})

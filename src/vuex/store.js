import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//需要维护的状态，初始化state
const state = {
	news:true,
	orders:false,
	me:false
}

//初始化 mutations
const mutations = {
	IN_NEWS(state){
		state.news = true;
		state.orders = false;
		state.me = false;
	},
	IN_ORDERS(state){
		state.news = false;
		state.orders = true;
		state.me = false;		
	},
	IN_ME(state){
		state.news = false;
		state.orders = false;
		state.me = true;			
	}
}

//初始化 actions
const actions ={
	inNews({commit}){
		commit('IN_NEWS');
	},
	inOrders({commit}){
		commit('IN_ORDERS');
	},
	inMe({commit}){
		commit('IN_ME');
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
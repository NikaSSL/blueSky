import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//需要维护的状态，初始化state
const state = {
	news:true,
	orders:false,
	me:false,
	index:true,
	shareState:false,//分享界面是否显示
	showComment:false//评论区界面是否显示
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
	},
	IN_Detail(state){
		state.index = false;
	},
	In_Index(state){
		state.index = true;
	},
	IN_Share(state){
		state.shareState = true;
	},
	Out_Share(state){
		state.shareState = false;
	},
	IN_Comment(state){
		state.showComment = true;
	},
	Out_Comment(state){
		state.showComment = false;
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
	},
	inDetail({commit}){
		commit('IN_Detail');
	},
	inIndex({commit}){
		commit('In_Index');
	},
	inShare({commit}){
		commit('IN_Share');
	},
	outShare({commit}){
		commit('Out_Share');
	},
	inComment({commit}){
		commit('IN_Comment');
	},
	outComment({commit}){
		commit('Out_Comment');
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
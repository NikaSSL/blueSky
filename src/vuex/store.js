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
	newInfo:{},//选中新闻的相关数据
	comment:false,//评论板块是否显示
	writeComment:false//评论输入面板是否显示
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
	Set_NewInfo(state,newInfo){
		state.newInfo = newInfo;
	},
	Toggle_comment(state){
		state.comment = !state.comment;
	},
	Toggle_write(state){
		state.writeComment = !state.writeComment;
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
	setNewInfo({commit}){
		commit('Set_NewInfo');
	},
	toggleComment({commit}){
		commit('Toggle_comment');
	},
	toggleWrite({commit}){
		commit('Toggle_write');
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
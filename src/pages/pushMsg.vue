<template>
	<div class="outer-box">
		<head-ban :headText="headText" :searchState="searchState" :backState="backState"></head-ban>
		<div class="msg-list">
			<msg-item v-for="(item,index) in msg" :key="index" :item="item"></msg-item>			
		</div>
	</div>
</template>

<script>
	import HeadBan from '../components/indexHeader.vue'
	import MsgItem from '../components/msgItem.vue'
	export default{
		name:'pushMsg',
		data(){
			return{
				headText:'消息通知',
				searchState:false,
				backState:true
			}
		},
		computed:{
			msg:function(){
				return this.$store.state.pushMsg?this.$store.state.pushMsg:{};
			}
		},
		components:{
			HeadBan,
			MsgItem
		},
		methods:{
			getData:function(){
				this.$ajax.get("/api/pushMsg").then((response) => {
					this.$store.commit('Set_PushMsg',response.data.data.message);
				})
			}
		},
		created(){
			this.getData();
		}
	}
</script>

<style scoped>
	.header{
		width: 100%;
		height: 1.31rem;
		border-bottom: 1px solid #E2E4E6;
		position: fixed;
		top: 0;
		background-color: #FFFFFF;
		z-index: 2;
	}
	.head-title{
		display: block;
		width: 100%;
		height: 1.31rem;
		text-align: center;
		font-weight: bold;
		font-size: 0.32rem;
		padding-top: 0.6rem;
	}
	.back{
		background-image: url("../assets/4_icon_back.png");
		background-size: 100%;
		background-repeat: no-repeat;
		width: 0.32rem;
		height: 0.32rem;
		margin-left: 0.3rem;
		margin-top: 0.68rem;
		display: block;
		position: absolute;
	}
	.msg-list{
		margin-top: 1.31rem;
	}
</style>
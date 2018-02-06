<template>
	<div class="outer-box">
		<head-ban :headText="headText" :searchState="searchState" :backState="backState"></head-ban>
		<msg-item v-for="(item,index) in msg" :key="index" :item="item"></msg-item>			
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
	.outer-box{
		padding-top: 1.3rem;
		padding-bottom: 1rem;
	}
</style>
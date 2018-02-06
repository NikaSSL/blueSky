<template>
	<div>
		<head-ban :headText="headText" :searchState="searchState" :backState="backState"></head-ban>
		<div class="msg-list">
			<msg-item v-for="(item,index) in msg" :key="index" :item="item"></msg-item>			
		</div>		
	</div>
</template>

<script>
	import HeadBan from '../components/indexHeader.vue'
	import MsgItem from '../components/thumbUpItem.vue'
	export default{
		name:'thumbUp',
		components:{
			HeadBan,
			MsgItem
		},
		data(){
			return {
				headText:'赞过的评论',
				searchState:false,
				backState:true
			}
		},
		computed:{
			msg:function(){
				return this.$store.state.thumbUpList?this.$store.state.thumbUpList:{};
			}
		},
		methods:{
			getData:function(){
				this.$ajax.get('/api/newsContent').then((responese) => {
					this.$store.commit('Set_ThumbUpList',responese.data.data.comments)
				})
			}
		},
		created(){
			this.getData();
		}
	}
</script>

<style scoped>
	.msg-list{
		padding-top: 1.3rem;
	}
</style>
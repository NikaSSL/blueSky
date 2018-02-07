<template>
	<div :class="['item-list',editState?'edit-item-list':'']">
		<common-item v-for="(item,index) in items" v-if="item" :item='item' :key="index"></common-item>
		<div class="bottom-word"><span>已显示全部内容</span></div>
	</div>
</template>

<script>
	import CommonItem from '../components/commonItem.vue'
	export default{
		name:'collectList',
		data:function(){
			return{
				showData:{
					collectData:[],
					historyData:[]
				}
			}
		},
		computed:{
			darkState:function(){
				return this.$store.stae.darkState;
			},
			editState:function(){
				return this.$store.state.editState;
			},
			inCollect:function(){
				return this.$store.state.inCollect;
			},
			items:function(){
				return this.inCollect?this.showData.collectData:this.showData.historyData;
			}
		},
		components:{
			CommonItem
		},
		methods:{
			getCollectData:function(){
				this.$ajax.get("/api/newsList").then((response) => {
					this.showData.collectData = response.data.data.slice(0,3);
				});				
			},
			getHistoryDate:function(){
				this.$ajax.get("/api/newsList").then((response) => {
					this.showData.historyData = response.data.data.slice(0,2);
				});
			}
		},
		mounted(){
			this.getCollectData();
			this.getHistoryDate();
		}
	}
</script>

<style scoped>
	.item-list{
		padding-top: 1.31rem;
	}
	.edit-item-list{
		padding-bottom: 1rem;		
	}
	.bottom-word{
		text-align: center;
		font-size: 0.28rem;
		color:  #A5A5A5;
		margin-top: 0.32rem;
	}
</style>